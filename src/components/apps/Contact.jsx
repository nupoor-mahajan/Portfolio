import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Check, ArrowRight } from 'lucide-react';

const channels = [
  { 
    icon: <Mail size={18} />, 
    label: 'Email', 
    value: 'nupoormahajan06@gmail.com',
    type: 'link',
    url: 'mailto:nupoormahajan06@gmail.com'
  },
  { 
    icon: <Linkedin size={18} />, 
    label: 'LinkedIn', 
    value: 'nupoor-mahajan',
    type: 'link',
    url: 'https://www.linkedin.com/in/nupoor-mahajan/'
  },
  { 
    icon: <Github size={18} />, 
    label: 'GitHub', 
    value: 'nupoor-mahajan',
    type: 'link',
    url: 'https://github.com/nupoor-mahajan'
  },
  { 
    icon: <Phone size={18} />, 
    label: 'Phone', 
    value: '+91 9321534059',
    type: 'copy',
    copyValue: '+919321534059'
  },
];

export default function Contact() {
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleAction = (c) => {
    if (c.type === 'link') {
      window.open(c.url, '_blank');
    } else if (c.type === 'copy') {
      navigator.clipboard.writeText(c.copyValue);
      setCopiedLabel(c.label);
      setTimeout(() => setCopiedLabel(null), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-2">
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-4 border border-blue-100 shadow-sm">
          <span className="text-2xl font-bold">@</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Let's Connect</h2>
        <p className="text-xs text-slate-400 text-center leading-relaxed">
          Reach out for collaborations or just a friendly hello.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-3 w-full">
        {channels.map((c) => (
          <button 
            key={c.label} 
            onClick={() => handleAction(c)}
            className="w-full flex items-center justify-between p-3 md:p-4 bg-white/40 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-md transition-all group active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                {c.icon}
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                <p className="text-sm font-semibold text-slate-700 truncate max-w-[180px] md:max-w-none">
                  {c.value}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {copiedLabel === c.label ? (
                <span className="text-[10px] font-bold text-green-500 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                  <Check size={12} /> COPIED
                </span>
              ) : (
                <div className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}