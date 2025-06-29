import React from 'react';
import { Heart, Github, Linkedin, Code2, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="group">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </h3>
            <p className="text-indigo-300 mb-4 text-lg font-medium">
              {portfolioData.personal.role}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Building innovative solutions with modern technologies. 
              Always excited to take on new challenges and collaborate on interesting projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2 relative group/link"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 group-hover/link:w-4"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href={portfolioData.personal.github}
                className="group/social relative p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-slate-700 hover:border-indigo-500/50"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                className="group/social relative p-3 bg-blue-600 hover:bg-blue-500 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href={portfolioData.personal.leetcode}
                className="group/social relative p-3 bg-orange-600 hover:bg-orange-500 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                aria-label="LeetCode"
              >
                <Code2 className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="text-slate-300 text-sm space-y-2">
              <p className="flex items-center">
                <span className="font-medium text-slate-200">Email:</span>
                <span className="ml-2 text-indigo-300">{portfolioData.personal.email}</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-slate-200">Phone:</span>
                <span className="ml-2 text-indigo-300">{portfolioData.personal.phone}</span>
              </p>
              <p className="text-emerald-400 font-medium">Available for new opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-slate-300 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-2 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-slate-300 text-sm">
            <span>© {currentYear} {portfolioData.personal.name}. All rights reserved.</span>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group relative p-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 z-50 overflow-hidden"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <ArrowUp className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;