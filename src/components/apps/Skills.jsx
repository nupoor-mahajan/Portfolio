import React from 'react';
import { Layout, Terminal, Wrench, Code2, Database, Smartphone, Cpu, ListChecks, Server, Layers, Lightbulb, PenTool } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "Frontend Development (Web)",
    description: "Building the visual parts of a website that people interact with.",
    icon: <Layout size={18} className="text-blue-500" />,
    items: ["React.js", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Web Design"],
    gridSpan: "md:col-span-2",
    bg: "bg-[#f8fafc]"
  },
  {
    category: "Web Framework",
    description: "Using powerful blueprints to build websites faster.",
    icon: <Layers size={18} className="text-indigo-500" />,
    items: ["Django"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#eef2ff]"
  },
  {
    category: "Programming Languages",
    description: "The core languages I use to give instructions to computers.",
    icon: <Terminal size={18} className="text-emerald-500" />,
    items: ["C", "Java", "Python", "JavaScript"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#f7fee7]"
  },
  {
    category: "Backend Development",
    description: "Handling the data processing that happens 'under the hood'.",
    icon: <Server size={18} className="text-slate-600" />,
    items: ["CRUD Operations", "REST APIs"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#f1f5f9]"
  },
  {
    category: "Database Management",
    description: "Setting up secure 'digital filing systems' for information.",
    icon: <Database size={18} className="text-orange-500" />,
    items: ["Oracle Live", "MongoDB"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#fff7ed]"
  },
  {
    category: "Mobile App Development",
    description: "Creating software specifically for smartphones.",
    icon: <Smartphone size={18} className="text-cyan-500" />,
    items: ["Flutter"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#ecfeff]"
  },
  {
    category: "UI / UX Design",
    description: "Planning layouts so they are easy and beautiful to use.",
    icon: <Code2 size={18} className="text-purple-500" />,
    items: ["Figma", "Wireframing", "Prototyping"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#faf5ff]"
  },
  {
    category: "Tools & Workflow",
    description: "Professional tools for collaboration and documentation.",
    icon: <Wrench size={18} className="text-amber-500" />,
    items: ["GitHub", "Canva", "Technical Documentation"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#fffbeb]"
  },
  {
    category: "Deployment",
    description: "Taking code and making it 'live' for the whole world to see.",
    icon: <Cpu size={18} className="text-rose-500" />,
    items: ["Vercel", "Netlify", "Web Application Deployment"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#fff1f2]"
  },
  {
    category: "Logic & Problem Solving",
    description: "Using math and structure to solve complex challenges.",
    icon: <ListChecks size={18} className="text-blue-400" />,
    items: ["Data Structures & Algorithms (C)", "Problem Solving", "Logical Thinking"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#f0f9ff]"
  },
  {
    category: "Currently Exploring",
    description: "Learning how to build intelligent, data-driven systems.",
    icon: <Lightbulb size={18} className="text-pink-500" />,
    items: ["Machine Learning", "Python for Data Science"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#fdf2f8]"
  },
  {
    category: "Productivity Skills",
    description: "Essential office software for data and presentations.",
    icon: <Layout size={18} className="text-slate-400" />,
    items: ["PowerPoint", "Excel (Basics)", "Documentation"],
    gridSpan: "md:col-span-1",
    bg: "bg-[#f8fafc]"
  }
];

export default function Skills() {
  return (
    <div className="h-full w-full p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
        {SKILLS_DATA.map((group) => (
          <div 
            key={group.category} 
            className={`${group.gridSpan} ${group.bg} border border-slate-200/60 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:bg-white transition-all duration-500 group flex flex-col`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform flex-shrink-0">
                {group.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  {group.category}
                </h3>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">
                  {group.description}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.items.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-white border border-slate-200/60 rounded-xl text-[10px] font-bold text-slate-600 shadow-sm hover:border-blue-400 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}