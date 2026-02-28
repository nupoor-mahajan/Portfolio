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
        // Restore from minimize
        setMinimizedApps(minimizedApps.filter(a => a !== id));
        setFocusedApp(id);
      } else if (focusedApp !== id) {
        // Bring to front
        setFocusedApp(id);
      } else {
        // If already focused, minimize it
        setMinimizedApps([...minimizedApps, id]);
      }
    } else {
      // Open fresh
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
    if (maximizedApps.includes(id)) {
      setMaximizedApps(maximizedApps.filter(a => a !== id));
    } else {
      setMaximizedApps([...maximizedApps, id]);
      setFocusedApp(id); 
    }
  };

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Intro */}
      <div className="text-center z-0 pointer-events-none select-none px-4">
  <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-2 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    Nupoor
  </h1>
  <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    Mahajan
  </h1>
  
  {/* Added mx-auto to center the block and max-w-2xl to constrain the width */}
  <p className="text-lg md:text-xl text-black font-black max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
    Built on logic. Driven by curiosity. Focused on the frontend, expanding into intelligent systems.
  </p>
</div>
      {/* Windows Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
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
                // Dynamic style based on maximize state
                style={isMaximized 
                  ? { top: 0, left: 0, width: '100vw', height: '100vh', maxWidth: 'none' } 
                  : { top: 100 + (index * 20), left: '25%' }
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

      {/* Dock */}
      {/* Updated Dock in App.jsx */}
<div className="absolute bottom-10 z-50 flex gap-4 bg-white/20 backdrop-blur-3xl p-3 rounded-3xl border border-white/40 shadow-2xl pointer-events-auto">
  {APPS.map(app => (
    <button
      key={app.id}
      onClick={() => toggleApp(app.id)}
      /* group class is essential for the tooltip hover effect */
      className={`group relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 active:scale-90
        ${openApps.includes(app.id) 
          ? 'bg-white/80 shadow-lg border border-white -translate-y-1' 
          : 'bg-transparent hover:bg-white/40 hover:-translate-y-2'
        }
      `}
    >
      {/* Tooltip: visible only on hover */}
      <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-800 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest pointer-events-none whitespace-nowrap shadow-xl">
        {app.title}
      </span>

      <span className={`${app.color} group-hover:scale-110 transition-transform duration-300`}>
        {app.icon}
      </span>
      
      {/* Active Indicator */}
      {openApps.includes(app.id) && (
        <div className="absolute -bottom-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
      )}
    </button>
  ))}
</div>
    </div>
  );
}