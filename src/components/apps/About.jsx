export default function About() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative w-28 h-28 bg-slate-200 rounded-3xl shrink-0 overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="/image_0.png" // This path points to public/portrait.png
            alt="Portrait of Nupoor Mahajan"
            className="w-full h-full object-cover relative"
          />
          {/* Subtle Status Pulse */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">About Me</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter border border-blue-100">
              Frontend Developer
            </span>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter border border-indigo-100">
              Builder
            </span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-tighter border border-emerald-100">
              ML Explorer
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {/* Bio Section */}
        <section>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-200"></span> Bio
          </h3>
          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              I’m a frontend-focused developer with a strong <span className="text-slate-900 font-medium">builder mindset</span> and a passion for creating impactful digital experiences. I enjoy transforming ideas into clean, responsive, and user-friendly web applications using modern technologies. My approach combines thoughtful design, performance optimization, and intuitive user interaction.
            </p>
            <p>
              I actively participate in <span className="text-blue-600">hackathons</span>, where I collaborate, innovate under pressure, and turn concepts into working solutions. These experiences have strengthened my problem-solving skills and adaptability.
            </p>
            <p>
              Beyond frontend development, I’m currently expanding my knowledge in <span className="text-indigo-600">Machine Learning</span> to better understand intelligent systems and build smarter, data-driven applications. My goal is simple: build meaningful products that are not just visually appealing, but practical, scalable, and impactful.
            </p>
          </div>
        </section>

        {/* Skills & Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React.js', 'Next.js', 'JavaScript (ES6+)', 
                'Tailwind CSS', 'HTML5 & CSS3', 'Git & GitHub', 
                'Responsive Design', 'UI/UX Fundamentals'
              ].map(skill => (
                <span key={skill} className="text-[11px] font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Interests</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                'Hackathons & Prototyping', 'ML & AI Exploration', 
                'Design Systems', 'Web Accessibility', 
                'Micro-interactions', 'Real-World Projects'
              ].map(interest => (
                <li key={interest} className="flex items-center gap-2 text-[11px] text-slate-600 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                  {interest}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}