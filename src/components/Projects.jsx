import React from 'react'
import image1 from "./../assets/images/projects/image1.png";
import image2 from "./../assets/images/projects/image2.png";
import image3 from "./../assets/images/projects/image3.png";
import image4 from "./../assets/images/projects/image4.png";
import image5 from "./../assets/images/projects/image5.png";
// Sample array holding your frontend development projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A high-performance analytics dashboard built with React 19 and Tailwind CSS v4, featuring dynamic charts.",
    image: image5,
    liveLink: " http://koreanpartsking.co.nz",
    
    tags: ["React", "Tailwind CSS", "Recharts"]
  },
  {
    id: 2,
    title: "AI Prompt Marketplace",
    description: "An interactive, fully responsive UI marketplace template allowing users to discover and share AI-optimized prompts.",
    image: image1,
    liveLink: " https://genisyspower.com.au/",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: 3,
    title: "Crypto Tracker SPA",
    description: "A single-page application utilizing real-time third-party REST APIs to display live cryptocurrency market changes.",
    image: image3,
    liveLink: "  https://www.mikepearce.co.nz/",
    
    tags: ["React", "Context API", "Tailwind"]
  }
];
const Projects = () => {
  return (
    <>
        <section id="projects" className="py-20 px-4 md:px-8 bg-slate-200 text-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A curated selection of my recent work as a frontend developer, showcasing clean UI designs and smooth interactions.
          </p>
        </div>

        {/* Projects Grid Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-200 rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/10"
            >
              
              {/* Clickable Image Container */}
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-video overflow-hidden cursor-pointer"
                aria-label={`View live demo for ${project.title}`}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2">
                  <span className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-full font-semibold text-sm tracking-wide shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Live Project 🚀
                  </span>
                </div>
              </a>

              {/* Project Card Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700 text-cyan-300 border border-slate-600/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Projects