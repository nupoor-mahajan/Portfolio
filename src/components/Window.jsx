import { motion } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { useRef } from 'react';

export default function Window({ 
  title, children, onClose, onMinimize, onMaximize, isMaximized, 
  zIndex, onFocus, active, style 
}) {
  // We use a ref to ensure the motion component has a clear reference for drag logic
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        // Smooth transition between windowed and maximized states
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      exit={{ scale: 0.95, opacity: 0, y: 20 }}
      
      /* DRAG CONFIGURATION */
      drag={!isMaximized} 
      // Changed to true for that "weighted" physical feel
      dragMomentum={true} 
      // dragElastic allows the window to slightly resist being pulled off-screen
      dragElastic={0.05} 
      // Use the header as the only draggable area (the "handle")
      dragControls={undefined} 
      dragListener={true}
      
      onPointerDown={onFocus}
      style={{ zIndex, ...style, touchAction: 'none' }}
      className={`absolute flex flex-col overflow-hidden pointer-events-auto shadow-2xl
                  ${isMaximized 
                    ? 'w-full h-full rounded-none top-0 left-0' 
                    : 'w-[95vw] md:w-[750px] h-[500px] rounded-2xl border border-white/40'}
                  bg-white/85 backdrop-blur-3xl transition-shadow duration-300
                  ${active ? 'ring-1 ring-blue-500/30 shadow-blue-500/20' : 'shadow-black/10'}`}
    >
      {/* Window Header - The "Drag Handle" */}
      <div 
        className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-200/50 cursor-grab active:cursor-grabbing select-none"
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-3">
          {/* Decorative dots for a premium feel */}
          <div className="flex gap-1.5 px-1">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-300/60" />
             <div className="w-2.5 h-2.5 rounded-full bg-slate-300/60" />
          </div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {title}
          </span>
        </div>
        
        <div className="flex gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="p-1.5 hover:bg-slate-200/60 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
            title="Minimize"
          >
            <Minus size={14} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="p-1.5 hover:bg-slate-200/60 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-1.5 hover:bg-red-500 hover:text-white rounded-lg transition-all text-slate-400"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto custom-scrollbar bg-white/50">
        {children}
      </div>
    </motion.div>
  );
}