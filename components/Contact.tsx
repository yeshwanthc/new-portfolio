"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import Form from "./Form";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/yeshwanth-c-a89a3826a/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yeshwanthc",
      label: "GitHub",
      color: "hover:text-purple-500",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/Yeshwanth1823",
      label: "Twitter",
      color: "hover:text-cyan-500",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yeshwanth3708@gmail.com",
      href: "mailto:yeshwanth3708@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+919550066495",
      href: "tel:+919550066495",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chittoor, AP, India",
      href: null,
    },
  ];

  return (
    <section className="space-y-16" id="contact">
      <div className="text-center space-y-4">
        <h2
          className={`text-4xl lg:text-5xl font-bold ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          }`}
        >
          Let's Collaborate
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${
          isDarkMode ? "text-slate-400" : "text-slate-600"
        }`}>
          Have a project in mind? I'd love to hear about it and discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <Form isDarkMode={isDarkMode} />
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card
            className={`border-0 shadow-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl"
                : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-2xl font-bold flex items-center ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                <Send className="mr-3 w-6 h-6" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`p-3 rounded-full ${
                    isDarkMode 
                      ? "bg-slate-700/50 text-slate-300 group-hover:bg-blue-500/20" 
                      : "bg-slate-100 text-slate-700 group-hover:bg-blue-50"
                  } transition-colors duration-200`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-lg font-medium transition-colors duration-200 ${
                          isDarkMode 
                            ? "text-slate-200 hover:text-blue-400" 
                            : "text-slate-800 hover:text-blue-600"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-medium ${
                        isDarkMode ? "text-slate-200" : "text-slate-800"
                      }`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card
            className={`border-0 shadow-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl"
                : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Connect with Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode
                        ? "bg-slate-700/30 text-slate-300 hover:bg-slate-600/50"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    } ${link.color}`}
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className={`text-center p-8 rounded-2xl ${
            isDarkMode 
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20" 
              : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-slate-200" : "text-slate-800"
            }`}>
              Ready to Start Your Project?
            </h3>
            <p className={`${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Let's discuss your ideas and turn them into reality. I'm always excited to work on new challenges and create amazing digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;