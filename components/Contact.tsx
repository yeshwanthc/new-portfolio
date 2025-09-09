"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle, Users, Clock } from "lucide-react";
import Form from "./Form";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://www.linkedin.com/in/yeshwanth-c-a89a3826a/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
      description: "Professional Network"
    },
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://github.com/yeshwanthc",
      label: "GitHub",
      color: "hover:text-purple-500",
      bgColor: "hover:bg-purple-500/10",
      description: "Code Repository"
    },
    {
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://x.com/Yeshwanth1823",
      label: "Twitter",
      color: "hover:text-cyan-500",
      bgColor: "hover:bg-cyan-500/10",
      description: "Latest Updates"
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      value: "yeshwanth3708@gmail.com",
      href: "mailto:yeshwanth3708@gmail.com",
      description: "Drop me a line anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Phone",
      value: "+919550066495",
      href: "tel:+919550066495",
      description: "Let's have a conversation",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Location",
      value: "Chittoor, AP, India",
      href: null,
      description: "Available for remote work",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const stats = [
    { icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Response Time", value: "< 24 hours" },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Projects Completed", value: "15+" },
    { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Years Experience", value: "2+" },
  ];

  return (
    <section className="py-16 lg:py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Send className="w-4 h-4 text-purple-400" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
              Let's Connect
            </span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode
              ? "bg-gradient-to-r from-white via-purple-100 to-pink-200 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-slate-900 via-purple-800 to-pink-800 text-transparent bg-clip-text"
          }`}>
            Let's Collaborate
          </h2>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}>
            Have an exciting project in mind? I'd love to hear about it and discuss how we can 
            work together to bring your vision to life with cutting-edge technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center p-4 sm:p-6 border-0 shadow-xl rounded-2xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl"
                  : "bg-gradient-to-br from-white/90 to-slate-50/70 backdrop-blur-xl"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3 sm:mb-4`}>
                {stat.icon}
              </div>
              <div className={`text-xl sm:text-2xl font-bold mb-1 ${
                isDarkMode ? "text-slate-100" : "text-slate-900"
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Form isDarkMode={isDarkMode} />
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            {/* Contact Details Card */}
            <Card className={`border-0 shadow-2xl overflow-hidden rounded-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl"
                : "bg-gradient-to-br from-white/95 to-slate-50/80 backdrop-blur-xl"
            }`}>
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 rounded-2xl" />
              <div className={`absolute inset-[1px] bg-gradient-to-br ${
                isDarkMode 
                  ? "from-slate-900/95 to-slate-800/90" 
                  : "from-white/95 to-slate-50/80"
              } rounded-2xl`} />
              
              <CardHeader className="relative p-4 sm:p-6">
                <CardTitle className={`text-xl sm:text-2xl font-bold flex items-center gap-3 ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? "hover:bg-slate-800/60 border border-slate-700/30 hover:border-slate-600/50" 
                        : "hover:bg-slate-50/80 border border-slate-200/40 hover:border-slate-300/60"
                    } backdrop-blur-sm`}>
                      <div className={`p-2 sm:p-3 rounded-2xl bg-gradient-to-r ${info.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-sm font-medium ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`text-sm sm:text-lg font-semibold transition-colors duration-200 block truncate ${
                              isDarkMode 
                                ? "text-slate-200 hover:text-blue-400" 
                                : "text-slate-800 hover:text-blue-600"
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`text-sm sm:text-lg font-semibold truncate ${
                            isDarkMode ? "text-slate-200" : "text-slate-800"
                          }`}>
                            {info.value}
                          </p>
                        )}
                        <p className={`text-xs ${
                          isDarkMode ? "text-slate-500" : "text-slate-500"
                        }`}>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className={`border-0 shadow-2xl overflow-hidden rounded-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl"
                : "bg-gradient-to-br from-white/95 to-slate-50/80 backdrop-blur-xl"
            }`}>
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60 rounded-2xl" />
              <div className={`absolute inset-[1px] bg-gradient-to-br ${
                isDarkMode 
                  ? "from-slate-900/95 to-slate-800/90" 
                  : "from-white/95 to-slate-50/80"
              } rounded-2xl`} />
              
              <CardHeader className="relative p-4 sm:p-6">
                <CardTitle className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  Connect with Me
                </CardTitle>
                <p className={`text-sm sm:text-base ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  Follow my journey and stay updated with my latest work
                </p>
              </CardHeader>
              
              <CardContent className="relative p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                        isDarkMode
                          ? "bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700/30 hover:border-slate-600/50"
                          : "bg-slate-100/60 hover:bg-slate-50/80 border border-slate-200/40 hover:border-slate-300/60"
                      } ${link.bgColor} backdrop-blur-sm shadow-lg hover:shadow-xl`}
                    >
                      <div className={`p-2 sm:p-3 rounded-2xl transition-all duration-300 ${
                        isDarkMode
                          ? "bg-slate-700/60 text-slate-300 group-hover:bg-slate-600/60"
                          : "bg-white/80 text-slate-700 group-hover:bg-white"
                      } ${link.color} shadow-lg group-hover:scale-110`}>
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-base sm:text-lg ${
                          isDarkMode ? "text-slate-200" : "text-slate-800"
                        }`}>
                          {link.label}
                        </div>
                        <div className={`text-xs sm:text-sm ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          {link.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action Card */}
            <div className={`relative overflow-hidden text-center p-6 sm:p-8 rounded-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" 
                : "bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80"
            } backdrop-blur-sm border ${
              isDarkMode ? "border-blue-500/20" : "border-blue-200/40"
            }`}>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
              
              <div className="relative space-y-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 shadow-xl`}>
                  <Send className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-blue-300" : "text-blue-800"
                }`}>
                  Ready to Start Your Project?
                </h3>
                <p className={`text-sm sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-blue-200/80" : "text-blue-700/80"
                }`}>
                  Let's discuss your ideas and turn them into reality. I'm always excited to work on 
                  new challenges and create amazing digital experiences that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;