import React from 'react';
import { Download, Printer, Share2, Mail, MapPin, Github, ExternalLink, Linkedin } from 'lucide-react';

export default function Resume() {
  
  const handlePrint = () => {
    window.print();
  };

  // New Native Share Functionality
  const handleShare = async () => {
    const shareData = {
      title: "Nupoor Mahajan - Resume",
      text: "Check out Nupoor Mahajan's Frontend Developer resume.",
      url: window.location.href, // Or your specific portfolio link
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy link to clipboard if Share API isn't supported
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="bg-[#F1F5F9] h-full flex flex-col font-sans relative">
      {/* PDF Tool Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-white border-b border-slate-200 shadow-sm z-10 print:hidden relative">
        <div className="flex gap-6 relative">
           <button 
            onClick={handlePrint}
            className="flex items-center gap-2 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors relative"
          >
            <Printer size={14} className="relative" /> PRINT 
          </button>
        </div>
        <div className="flex items-center gap-4 text-slate-400 relative">
           <span className="text-[10px] font-bold relative">100%</span>
           {/* Updated Share Button */}
           <button onClick={handleShare} title="Share Resume">
             <Share2 size={14} className="hover:text-blue-600 cursor-pointer transition-colors relative" />
           </button>
        </div>
      </div>

      {/* PDF Canvas */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 flex justify-center custom-scrollbar print:p-0 print:overflow-visible print:bg-white relative">
        
        {/* Resume Sheet */}
        <div id="resume-sheet" className="w-full max-w-[800px] bg-white shadow-2xl min-h-[1050px] p-8 md:p-14 border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full relative">
          
          {/* Header */}
          <header className="flex flex-col-reverse md:flex-row justify-between items-start mb-10 gap-6 border-b-2 border-slate-100 pb-10 relative">
            <div className="flex-1 relative">
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase relative">Nupoor Mahajan</h1>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mt-1 relative">
                Frontend Developer • Aspiring Full-Stack & ML Engineer
              </p>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] font-semibold text-slate-500 relative">
                <div className="flex items-center gap-2 tracking-tight relative">
                  <Mail size={12} className="text-slate-400 relative" /> nupoormahajan06@gmail.com
                </div>
                <div className="flex items-center gap-2 tracking-tight relative">
                  <Linkedin size={12} className="text-slate-400 relative" /> linkedin.com/in/nupoor-mahajan
                </div>
                <div className="flex items-center gap-2 tracking-tight relative">
                  <Github size={12} className="text-slate-400 relative" /> github.com/nupoor-mahajan
                </div>
                <div className="flex items-center gap-2 tracking-tight relative">
                  <MapPin size={12} className="text-slate-400 relative" /> Mumbai, Maharashtra
                </div>
              </div>
            </div>
            
            <div className="w-24 h-24 bg-slate-50 rounded-2xl border-4 border-white shadow-lg overflow-hidden flex items-center justify-center shrink-0 relative">
              <img 
                src="image_0.png" 
                alt="Portrait of Nupoor Mahajan" 
                className="w-full h-full object-cover relative" 
              />
            </div>
          </header>

          {/* Sections remain exactly as provided in your snippet */}
          <section className="mb-10 relative">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b pb-2 relative">Summary</h3>
            <p className="text-xs text-slate-600 leading-relaxed relative">
              Frontend-focused developer with hands-on experience building responsive web applications using React, JavaScript, and modern UI frameworks. Strong foundation in Data Structures and Algorithms (C) and core programming principles. Developed and deployed production-ready websites, including a digital platform for an NGO. Currently expanding expertise in Machine Learning and backend development with Django.
            </p>
          </section>

          <section className="mb-10 relative">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2 relative">Education</h3>
            <div className="space-y-4 relative">
              <div className="flex justify-between items-start relative">
                <div className="relative">
                  <h4 className="text-sm font-bold text-slate-800 uppercase relative">SHAH & ANCHOR KUTCHHI ENGINEERING COLLEGE</h4>
                  <p className="text-[11px] font-bold text-blue-500 italic relative">Bachelor of Engineering • 2024 — Present</p>
                </div>
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded shrink-0 relative">CGPA: 9.8</span>
              </div>
              <div className="flex justify-between items-start relative">
                <div className="relative">
                  <h4 className="text-sm font-bold text-slate-800 uppercase relative">INTEGRATED CET (11TH & 12TH)</h4>
                  <p className="text-[11px] font-bold text-slate-400 relative">Higher Secondary Education • 2024</p>
                </div>
                <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded shrink-0 relative">95.96 %tile</span>
              </div>
            </div>
          </section>

          <section className="mb-10 relative">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2 relative">Key Projects</h3>
            <div className="space-y-6 relative">
              <div className="relative">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 relative">
                  Split-It <ExternalLink size={12} className="text-slate-300 print:hidden relative" />
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1 relative">
                  Expense splitting web application that dynamically calculates and distributes shared expenses. Implemented real-time DOM updates using JavaScript and designed a responsive UI with Tailwind CSS.
                </p>
              </div>
              <div className="relative">
                <h4 className="text-sm font-bold text-slate-800 relative">Jeevak Swabhimani Mahila Sanstha (NGO)</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1 relative">
                  Designed and developed a responsive website to improve the NGO’s digital presence. Translated organizational requirements into a functional design, improving accessibility and online visibility.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2 relative">Technical Proficiency</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 relative">
              <div className="relative">
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1 relative">Frontend</h5>
                <p className="text-[11px] text-slate-500 leading-tight relative">React.js, Vite, Tailwind CSS, Framer Motion, HTML5, CSS3, Responsive Design</p>
              </div>
              <div className="relative">
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1 relative">Languages</h5>
                <p className="text-[11px] text-slate-500 leading-tight relative">C (DSA), Java, Python, JavaScript (ES6+)</p>
              </div>
              <div className="relative">
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1 relative">Backend & Databases</h5>
                <p className="text-[11px] text-slate-500 leading-tight relative">Django, Flutter, REST API Integration, Oracle Live, MongoDB</p>
              </div>
              <div className="relative">
                <h5 className="text-[10px] font-black text-slate-800 uppercase mb-1 underline decoration-blue-500 underline-offset-4 relative">Currently Exploring</h5>
                <p className="text-[11px] text-blue-600 font-bold leading-tight relative">Machine Learning, Python for Data Science</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 0; size: auto; }
          body { background: white; -webkit-print-color-adjust: exact; }
          .custom-scrollbar::-webkit-scrollbar { display: none; }
        }
      `}} />
    </div>
  );
}