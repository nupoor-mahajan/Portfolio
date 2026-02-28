import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Window from './components/Window';
import Projects from './components/apps/Projects';
import About from './components/apps/About';
import Contact from './components/apps/Contact';
import Skills from './components/apps/Skills';
import Resume from './components/apps/Resume';

const APPS = [
  { id: 'about', title: 'About.txt', icon: '📄', color: 'text-slate-600' },
  { id: 'projects', title: 'Projects.app', icon: '📁', color: 'text-amber-500' },
  { id: 'skills', title: 'Skills.json', icon: '{}', color: 'text-blue-500' },
  { id: 'resume', title: 'Resume.pdf', icon: '📥', color: 'text-red-500' },
  { id: 'contact', title: 'Contact.exe', icon: '@', color: 'text-emerald-500' },
];

export default function App() {
  const [openApps, setOpenApps] = useState([]); 
  const [minimizedApps, setMinimizedApps] = useState([]); 
  const [maximizedApps, setMaximizedApps] = useState([]); 
  const [focusedApp, setFocusedApp] = useState(null);

  const toggleApp = (id) => {
    if (openApps.includes(id)) {
      if (minimizedApps.includes(id)) {
        setMinimizedApps(minimizedApps.filter(a => a !== id));
        setFocusedApp(id);
      } else if (focusedApp !== id) {
        setFocusedApp(id);
      } else {
        setMinimizedApps([...minimizedApps, id]);
      }
    } else {
      setOpenApps([...openApps, id]);
      setFocusedApp(id);
    }
  };

  const handleClose = (id) => {
    setOpenApps(openApps.filter(a => a !== id));
    setMinimizedApps(minimizedApps.filter(a => a !== id));
    setMaximizedApps(maximizedApps.filter(a => a !== id)); 
    if (focusedApp === id) setFocusedApp(null);
  };

  const handleMinimize = (id) => {
    setMinimizedApps([...minimizedApps, id]);
    setFocusedApp(null);
  };

  const handleMaximize = (id) => {
  // 1. Immediately bring the window to the front
  setFocusedApp(id); 

  // 2. Toggle maximize state using a functional update to prevent lag
  setMaximizedApps((prev) => 
    prev.includes(id) 
      ? prev.filter(a => a !== id) 
      : [...prev, id]
  );
};

  return (
    /* 1. APPLY THE IMAGE HERE (The Root Container) */
    <div 
      className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Ensure the path is correct
    >
      
      {/* 2. BACKGROUND TEXT LAYER (Centered on the image) */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-0 tracking-tighter drop-shadow-2xl leading-none">
          Nupoor
        </h1>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter drop-shadow-2xl leading-none">
          Mahajan
        </h1>
        <p className="text-sm md:text-xl text-black font-bold max-w-sm md:max-w-2xl leading-relaxed drop-shadow-lg">
          Built on logic. Driven by curiosity. Focused on the frontend, expanding into intelligent systems.
        </p>
      </div>

      {/* LAYER 2: Windows Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-transparent">
        <AnimatePresence>
          {openApps.map((appId, index) => {
            const isVisible = !minimizedApps.includes(appId);
            const isMaximized = maximizedApps.includes(appId);
            if (!isVisible) return null;

            return (
              <Window 
                key={appId}
                title={APPS.find(a => a.id === appId)?.title}
                onClose={() => handleClose(appId)}
                onMinimize={() => handleMinimize(appId)}
                onMaximize={() => handleMaximize(appId)}
                isMaximized={isMaximized}
                active={focusedApp === appId}
                onFocus={() => setFocusedApp(appId)}
                style={isMaximized 
                  ? { zIndex: 60 } 
                  : { 
                      top: 40 + (index * 20), 
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }
                }
                zIndex={focusedApp === appId ? 50 : 10 + index}
              >
                {appId === 'about' && <About />}
                {appId === 'projects' && <Projects />}
                {appId === 'skills' && <Skills />}
                {appId === 'contact' && <Contact />}
                {appId === 'resume' && <Resume />}
              </Window>
            );
          })}
        </AnimatePresence>
      </div>

      {/* LAYER 3: Dock */}
      <div className="absolute bottom-8 md:bottom-18 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-4 bg-white/40 backdrop-blur-3xl p-2 md:p-3 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl pointer-events-auto max-w-[95vw]">
        {APPS.map(app => (
          <button
            key={app.id}
            onClick={() => toggleApp(app.id)}
            className={`group relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl transition-all duration-300 active:scale-90
              ${openApps.includes(app.id) 
                ? 'bg-white/80 shadow-lg border border-white -translate-y-1' 
                : 'bg-transparent hover:bg-white/40 hover:-translate-y-2'
              }
            `}
          >
            <span className="hidden md:block absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-800 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest pointer-events-none whitespace-nowrap shadow-xl">
              {app.title}
            </span>

            <span className={`${app.color} group-hover:scale-110 transition-transform duration-300`}>
              {app.icon}
            </span>
            
            {openApps.includes(app.id) && (
              <div className="absolute -bottom-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}