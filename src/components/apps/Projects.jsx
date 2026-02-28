import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, Construction, GitBranch } from 'lucide-react';

const COMPLETED_PROJECTS = [
  {
    title: "Split-It",
    desc: "A dynamic expense splitting application that calculates and distributes shared costs in real-time.",
    tags: ["React", "JavaScript", "Tailwind"],
    live: "https://split-it-sigma.vercel.app/",
    repo: "https://github.com/nupoor-mahajan/split-it"
  },
  {
    title: "NGO Website",
    desc: "Official digital presence for Jeevak Swabhimani Mahila Sanstha, focusing on accessibility and SEO.",
    tags: ["UI/UX", "Responsive Design", "SEO"],
    live: "#",
    repo: "https://github.com/nupoor-mahajan/NGO-Platform"
  }
];

const WORKING_ON = [
  {
    title: "Silence Monitor",
    repoName: "silence-project",
    desc: "A civic-tech project designed to monitor and visualize urban noise levels to promote quieter environments.",
    tags: ["Civic-Tech", "Data Visualization", "React"],
    status: "Active Development",
    targetCommits: 25
  }
];

export default function Projects() {
  const [progressData, setProgressData] = useState({});

  useEffect(() => {
    const fetchGithubData = async () => {
      const updatedProgress = {};
      for (const project of WORKING_ON) {
        try {
          const response = await fetch(`https://api.github.com/repos/nupoor-mahajan/${project.repoName}`);
          const data = await response.json();
          // Logic: Using repo 'size' as a mock for progress
          const mockCommits = data.size > 0 ? Math.min(Math.floor(data.size / 10), project.targetCommits) : 5;
          const percentage = Math.min(Math.round((mockCommits / project.targetCommits) * 100), 95);
          updatedProgress[project.title] = `${percentage}%`;
        } catch (error) {
          updatedProgress[project.title] = "In Progress";
        }
      }
      setProgressData(updatedProgress);
    };
    fetchGithubData();
  }, []);

  return (
    /* FIX: Removed h-screen and overflow-y-auto to prevent double scrollbars.
      The parent container (your main app window) should handle the scroll.
    */
    <div className="w-full min-h-full bg-transparent">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        
        {/* Featured Projects Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Code2 size={14} className="text-blue-500" /> Featured Projects
            </h2>
            <span className="h-[1px] flex-1 bg-slate-100 ml-4"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPLETED_PROJECTS.map((p) => (
              <div key={p.title} className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-video rounded-[1.25rem] mb-5 overflow-hidden border border-slate-100 bg-slate-50 relative">
                  <iframe 
                    src={p.live} 
                    title={p.title}
                    className="w-[1280px] h-[720px] origin-top-left scale-[0.25] pointer-events-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    style={{ border: 'none' }}
                  />
                </div>

                <div className="flex gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold rounded-lg uppercase tracking-wider border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-8 line-clamp-2">{p.desc}</p>

                <div className="flex gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex-[2]">
                    <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-[11px] py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                      View Project
                    </button>
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="flex-1">
                    <button className="w-full h-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-slate-800 hover:border-slate-800 rounded-xl transition-all active:scale-95">
                      <Github size={18} />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Development Section */}
        <section className="pb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Construction size={14} className="text-amber-500" /> Active Development
            </h2>
            <span className="h-[1px] flex-1 bg-slate-100 ml-4"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKING_ON.map((p) => (
              <div key={p.title} className="relative group bg-slate-50 border border-dashed border-slate-200 p-6 rounded-3xl transition-all hover:border-blue-400 hover:bg-white">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400 group-hover:text-blue-500 transition-colors">
                    <GitBranch size={18} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-tighter mb-1">
                      {p.status}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {progressData[p.title] || "Calculating..."} Complete
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                </div>

                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-1000 group-hover:bg-blue-600" 
                    style={{ width: progressData[p.title] || "0%" }}
                  />
                </div>

                <div className="flex gap-3">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}