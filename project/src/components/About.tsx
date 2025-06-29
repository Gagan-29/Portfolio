import React from 'react';
import { GraduationCap, BookOpen, Star, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-200/40 to-violet-200/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-8">
              My Journey
            </h3>
            <div className="space-y-6">
              <div className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-indigo-100/50 hover:border-indigo-300/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  As a Computer Science undergraduate at <span className="font-semibold text-indigo-600">VIT Vellore</span> with a stellar <span className="font-bold text-violet-600">9.62 CGPA</span>, I'm passionate about leveraging technology to solve real-world problems. My journey in software development has been driven by curiosity and a constant desire to learn and improve.
                </p>
              </div>

              <div className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-indigo-100/50 hover:border-indigo-300/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  I specialize in <span className="font-semibold text-indigo-600">full-stack web development</span> and have experience with modern technologies like React, Node.js, and MongoDB. I also have a keen interest in <span className="font-semibold text-violet-600">machine learning and data analysis</span>, which I've applied in various projects.
                </p>
              </div>

              <div className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-indigo-100/50 hover:border-indigo-300/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  When I'm not coding, you can find me participating in <span className="font-semibold text-indigo-600">coding contests</span>, contributing to open-source projects, or exploring new technologies through online courses and certifications.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="group relative">
                {/* 3D Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"></div>
                
                <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-indigo-100/50 hover:border-indigo-300/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-4 shadow-xl hover:shadow-2xl">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                        <Trophy className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-3">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-600 font-semibold text-lg mb-3">{edu.institution}</p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-slate-600 font-medium">{edu.duration}</span>
                        <div className="relative">
                          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                            CGPA: {edu.cgpa}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur opacity-50 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-4 flex items-center text-lg">
                          <BookOpen className="w-5 h-5 mr-3 text-indigo-600" />
                          Relevant Coursework
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                          {edu.coursework.map((course, idx) => (
                            <div key={idx} className="group/course relative">
                              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 text-slate-700 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-indigo-100/50 hover:border-indigo-300/50">
                                {course}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;