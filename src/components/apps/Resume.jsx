import React from 'react';
import { Mail, MapPin, Github, ExternalLink, Linkedin, Printer, Share2 } from 'lucide-react';

export default function Resume() {
  
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: "Nupoor Mahajan - Resume",
      text: "Check out Nupoor Mahajan's Frontend Developer resume.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    /* Changed h-full to flex-1 and added overflow-hidden to keep toolbar fixed at top */
    <div className="bg-[#F1F5F9] flex-1 flex flex-col font-sans overflow-hidden">
      
      {/* Fixed Toolbar */}
      <div className="flex items-center justify-between px-6 py-2 bg-white border-b border-slate-200 shadow-sm z-10 print:hidden shrink-0">
        <div className="flex gap-6">
           <button 
            onClick={handlePrint}
            className="flex items-center gap-2 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Printer size={14} /> PRINT
          </button>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
           <span className="text-[10px] font-bold">100%</span>
           <button onClick={handleShare} title="Share Resume">
             <Share2 size={14} className="hover:text-blue-600 cursor-pointer transition-colors" />
           </button>
        </div>
      </div>

      {/* Scrollable Canvas Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 custom-scrollbar print:p-0 print:overflow-visible print:bg-white">
        
        {/* Resume Sheet */}
        <div id="resume-sheet" className="mx-auto w-full max-w-[800px] bg-white shadow-2xl min-h-[1050px] p-8 md:p-14 border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
          
          {/* Header */}
          <header className="flex flex-col-reverse md:flex-row justify-between items-start mb-10 gap-6 border-b-2 border-slate-100 pb-10">
            <div className="flex-1">
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Nupoor Mahajan</h1>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mt-1">
                Frontend Developer • Aspiring Full-Stack & ML Engineer
              </p>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] font-semibold text-slate-500">
                <div className="flex items-center gap-2 tracking-tight">
                  <Mail size={12} className="text-slate-400" /> nupoormahajan06@gmail.com
                </div>
                <div className="flex items-center gap-2 tracking-tight">
                  <Linkedin size={12} className="text-slate-400" /> linkedin.com/in/nupoor-mahajan
                </div>
                <div className="flex items-center gap-2 tracking-tight">
                  <Github size={12} className="text-slate-400" /> github.com/nupoor-mahajan
                </div>
                <div className="flex items-center gap-2 tracking-tight">
                  <MapPin size={12} className="text-slate-400" /> Mumbai, Maharashtra
                </div>
              </div>
            </div>
            
            <div className="w-24 h-24 bg-slate-50 rounded-2xl border-4 border-white shadow-lg overflow-hidden flex items-center justify-center shrink-0">
              <img 
                src="image_0.png" 
                alt="Portrait" 
                className="w-full h-full object-cover" 
              />
            </div>
          </header>

          <section className="mb-10">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b pb-2">Summary</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Frontend-focused developer with hands-on experience building responsive web applications using React, JavaScript, and modern UI frameworks. Strong foundation in Data Structures and Algorithms (C) and core programming principles. Developed and deployed production-ready websites, including a digital platform for an NGO. Currently expanding expertise in Machine Learning and backend development with Django.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">SHAH & ANCHOR KUTCHHI ENGINEERING COLLEGE</h4>
                  <p className="text-[11px] font-bold text-blue-500 italic">Bachelor of Engineering • 2024 — Present</p>
                </div>
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded shrink-0">CGPA: 9.8</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">INTEGRATED CET (11TH & 12TH)</h4>
                  <p className="text-[11px] font-bold text-slate-400">Higher Secondary Education • 2024</p>
                </div>
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded shrink-0">95.96 %tile</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Key Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  Split-It <ExternalLink size={12} className="text-slate-300 print:hidden" />
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Expense splitting web application that dynamically calculates and distributes shared expenses. Implemented real-time DOM updates using JavaScript and designed a responsive UI with Tailwind CSS.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Jeevak Swabhimani Mahila Sanstha (NGO)</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Designed and developed a responsive website to improve the NGO’s digital presence. Translated organizational requirements into a functional design, improving accessibility and online visibility.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Technical Proficiency</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8">
              <div>
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1">Frontend</h5>
                <p className="text-[11px] text-slate-500 leading-tight">React.js, Vite, Tailwind CSS, Framer Motion, HTML5, CSS3, Responsive Design</p>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1">Languages</h5>
                <p className="text-[11px] text-slate-500 leading-tight">C (DSA), Java, Python, JavaScript (ES6+)</p>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1">Backend & Databases</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Django, Flutter, REST API Integration, Oracle Live, MongoDB</p>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1 underline decoration-blue-500 underline-offset-4">Currently Exploring</h5>
                <p className="text-[11px] text-blue-600 font-bold leading-tight">Machine Learning, Python for Data Science</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 0; size: auto; }
          body { background: white !important; -webkit-print-color-adjust: exact; }
          .print\:hidden { display: none !important; }
        }
      `}} />
    </div>
  );
}