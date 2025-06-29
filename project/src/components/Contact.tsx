import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/40 to-violet-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-indigo-100/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-6">
                  Let's Connect
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Whether you're looking for a developer, have a project in mind, or just want to network, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center group/item">
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Email</h4>
                      <a href={`mailto:${portfolioData.personal.email}`} className="text-indigo-600 hover:text-violet-600 transition-colors duration-300 font-medium">
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group/item">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Phone</h4>
                      <a href={`tel:${portfolioData.personal.phone}`} className="text-emerald-600 hover:text-teal-600 transition-colors duration-300 font-medium">
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group/item">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Location</h4>
                      <p className="text-slate-600 font-medium">Vellore, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-indigo-100/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-6">
                  Find Me Online
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={portfolioData.personal.github}
                    className="group/social relative p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-slate-700 hover:border-indigo-500/50"
                  >
                    <Github className="w-6 h-6 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    className="group/social relative p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={portfolioData.personal.leetcode}
                    className="group/social relative p-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                  >
                    <Code2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-indigo-100/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-indigo-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-indigo-300/50 group-hover/input:scale-105"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group/input">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-indigo-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-indigo-300/50 group-hover/input:scale-105"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-indigo-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-indigo-300/50 group-hover/input:scale-105"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group/input">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-indigo-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-indigo-300/50 resize-none group-hover/input:scale-105"
                    placeholder="Tell me about your project or just say hi!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group/btn relative w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Send className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold text-lg">Send Message</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;