import React from 'react';
import { Code, Database, Wrench, Layers, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: portfolioData.skills['Programming Languages'],
      gradient: 'from-indigo-600 to-violet-600',
      bgGradient: 'from-indigo-50 to-violet-50',
      borderGradient: 'from-indigo-200 to-violet-200'
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: portfolioData.skills['Frameworks & Libraries'],
      gradient: 'from-violet-600 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      borderGradient: 'from-violet-200 to-purple-200'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: portfolioData.skills['Databases'],
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderGradient: 'from-emerald-200 to-teal-200'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: portfolioData.skills['Tools & Technologies'],
      gradient: 'from-orange-600 to-amber-600',
      bgGradient: 'from-orange-50 to-amber-50',
      borderGradient: 'from-orange-200 to-amber-200'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-r from-indigo-200/40 to-violet-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group relative">
                {/* 3D Shadow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1`}></div>
                
                <div className={`relative bg-white/95 backdrop-blur-xl rounded-3xl border border-indigo-100/50 hover:border-indigo-300/50 p-8 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-4 shadow-xl hover:shadow-2xl`}>
                  <div className="flex items-center mb-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`group/skill relative bg-gradient-to-r ${category.bgGradient} hover:shadow-lg px-4 py-3 rounded-xl text-slate-700 font-semibold text-sm transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-indigo-200 cursor-default`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                        <span className="relative z-10">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Proficiency Overview */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-indigo-100/50 p-10 shadow-2xl">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-12 text-center">
              Proficiency Overview
            </h3>
            <div className="space-y-8">
              {[
                { skill: 'JavaScript/React', level: 90, gradient: 'from-indigo-600 to-violet-600' },
                { skill: 'Node.js/Express', level: 85, gradient: 'from-violet-600 to-purple-600' },
                { skill: 'MongoDB/SQL', level: 80, gradient: 'from-emerald-600 to-teal-600' },
                { skill: 'C++/Algorithms', level: 88, gradient: 'from-orange-600 to-amber-600' },
                { skill: 'Machine Learning', level: 75, gradient: 'from-emerald-600 to-teal-600' }
              ].map((item, index) => (
                <div key={index} className="group/bar">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-800 font-semibold text-lg">{item.skill}</span>
                    <span className={`bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {item.level}%
                    </span>
                  </div>
                  <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className={`h-4 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000 ease-out group-hover/bar:scale-x-105 origin-left relative overflow-hidden`}
                      style={{ width: `${item.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;