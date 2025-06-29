import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-indigo-100/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
              isScrolled 
                ? 'text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text' 
                : 'text-white drop-shadow-lg'
            }`}>
              K Gagan
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 transform relative group ${
                  isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-indigo-300'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a 
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:-translate-y-1"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                isScrolled ? 'text-slate-700 hover:bg-indigo-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl mt-2 border border-indigo-100/20">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 rounded-xl w-full text-left transition-all duration-300 transform hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href={portfolioData.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-4 transform hover:scale-105"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;