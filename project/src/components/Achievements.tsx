import React from 'react';
import { Award, Trophy, ExternalLink, Code2, AlignCenterVertical as Certificate, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-white via-indigo-50/20 to-violet-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recognition of my dedication to continuous learning and competitive programming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-12 flex items-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl mr-4 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Competitive Programming
              </span>
            </h3>
            <div className="space-y-6">
              {portfolioData.achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"></div>
                  
                  <div className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl border border-amber-200/50 hover:border-amber-300/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h4>
                        <p className="text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>
                        <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coding Profiles */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-12 flex items-center">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-2xl mr-4 shadow-lg">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
                  Coding Profiles
                </span>
              </h3>
              <div className="space-y-4">
                {portfolioData.codingProfiles.map((profile, index) => (
                  <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"></div>
                      
                      <div className="relative bg-gradient-to-r from-indigo-50 via-violet-50 to-purple-50 p-8 rounded-3xl border border-indigo-200/50 hover:border-indigo-300/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                              {profile.platform}
                            </h4>
                            <p className="text-slate-600 mb-1 text-lg">{profile.stats}</p>
                            {profile.maxRating && (
                              <p className="text-sm bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent font-bold">
                                Max Rating: {profile.maxRating}
                              </p>
                            )}
                          </div>
                          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-12 flex items-center">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl mr-4 shadow-lg">
                <Certificate className="w-8 h-8 text-white" />
              </div>
              <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <div className="space-y-6">
              {portfolioData.certifications.map((cert, index) => (
                <a key={index} href={cert.link} className="block group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"></div>
                    
                    <div className="relative bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-8 rounded-3xl border border-emerald-200/50 hover:border-emerald-300/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                      <div className="flex items-start">
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Certificate className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <p className="text-slate-600 mb-4 text-lg">{cert.issuer}</p>
                          <div className="flex items-center text-emerald-700 font-bold">
                            <span className="mr-2">View Certificate</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* 3D Stats Section */}
            <div className="mt-16 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-indigo-100/50 shadow-2xl">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-8 text-center">
                  Technical Expertise
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '800+', label: 'Problems Solved', gradient: 'from-indigo-600 to-violet-600' },
                    { value: '5+', label: 'Projects Built', gradient: 'from-emerald-600 to-teal-600' },
                    { value: '3', label: 'Certifications', gradient: 'from-orange-600 to-red-600' },
                    { value: '1585', label: 'Max Rating', gradient: 'from-emerald-600 to-teal-600' }
                  ].map((stat, index) => (
                    <div key={index} className="group/stat relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-20 group-hover/stat:opacity-40 transition-opacity duration-300`}></div>
                      
                      <div className="relative text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 transform group-hover/stat:scale-105 group-hover/stat:-translate-y-1 shadow-lg hover:shadow-xl">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
