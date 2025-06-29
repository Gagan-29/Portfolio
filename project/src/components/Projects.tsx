import React from 'react';
import { ExternalLink, Github, ArrowRight, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-300/30 to-violet-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* 3D Card Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-indigo-100/50 hover:border-indigo-300/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-4 shadow-xl hover:shadow-2xl">
                {/* Project Header with 3D Effect */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/25 transform rotate-45 animate-spin-slow"></div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 transform group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-110 border border-indigo-200/50 hover:border-indigo-300 shadow-sm hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-600 flex items-center group/feature">
                          <ArrowRight className="w-4 h-4 mr-3 text-indigo-600 group-hover/feature:text-violet-600 transition-colors duration-300 transform group-hover/feature:scale-110" />
                          <span className="group-hover/feature:text-slate-800 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <a
                      href={project.liveLink}
                      className="group/link flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="font-semibold">Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="group/link flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-300 transform hover:scale-105"
                    >
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="font-semibold">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;