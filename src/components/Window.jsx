import { motion } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

export default function Window({ 
  title, children, onClose, onMinimize, onMaximize, isMaximized, 
  zIndex, onFocus, active, style 
}) {
  return (
    <motion.div
      /* layout prop enables hardware-accelerated fluid size transitions */
      layout
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        /* Reset drag offsets to 0 when maximized to prevent misalignment */
        x: isMaximized ? 0 : undefined,
        y: isMaximized ? 0 : undefined,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          layout: { duration: 0.3 } 
        }
      }}
      exit={{ scale: 0.95, opacity: 0 }}
      
      /* DRAG CONFIGURATION */
      drag={!isMaximized} 
      dragMomentum={true} 
      dragElastic={0.05} 
      onPointerDown={onFocus}
      
      style={{ 
        zIndex, 
        ...style, 
        position: 'absolute',
        touchAction: 'none' /* Prevents system gestures from interfering with drag */
      }}
      
      /* FIX: Added !h-[100dvh] to lock height to the dynamic viewport.
         FIX: Added pt-[env(safe-area-inset-top)] to keep the header below the notch.
      */
      className={`flex flex-col overflow-hidden pointer-events-auto shadow-2xl
        ${isMaximized 
          ? '!w-screen !h-[100dvh] !rounded-none !top-0 !left-0 pt-[env(safe-area-inset-top,20px)]' 
          : 'w-[95vw] md:w-[750px] h-[70vh] md:h-[500px] rounded-2xl border border-white/40'}
        bg-white/85 backdrop-blur-3xl
        ${active ? 'ring-1 ring-blue-500/30 shadow-blue-500/20' : 'shadow-black/10'}`}
    >
      {/* Window Header - Fixed Top Area */}
      <div 
        className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-200/50 cursor-grab active:cursor-grabbing select-none shrink-0"
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-3">
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

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-auto custom-scrollbar bg-white/50">
        {children}
      </div>
    </motion.div>
  );
}