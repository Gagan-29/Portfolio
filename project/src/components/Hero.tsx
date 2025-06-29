import React from 'react';
import { ChevronDown, Github, Linkedin, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 transform rotate-12 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                {portfolioData.personal.name}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-indigo-200 mb-4 font-light">
            {portfolioData.personal.role}
          </h2>

          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full border border-indigo-400/30 backdrop-blur-sm mb-8">
            <span className="text-lg text-indigo-200">🎓 VIT Vellore • CGPA: 9.62</span>
          </div>
          
          <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 font-semibold">View My Work</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative px-8 py-4 border-2 border-indigo-400 text-indigo-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white hover:border-transparent transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm"
            >
              <span className="relative z-10 font-semibold">Get In Touch</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a
              href={portfolioData.personal.github}
              className="group relative p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-slate-700 hover:border-indigo-500/50"
              aria-label="GitHub"
            >
              <Github size={28} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              className="group relative p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={portfolioData.personal.leetcode}
              className="group relative p-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
              aria-label="LeetCode"
            >
              <Code2 size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('#about')}
          className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 animate-bounce hover:animate-none"
        >
          <ChevronDown size={32} className="text-white group-hover:text-indigo-300 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;