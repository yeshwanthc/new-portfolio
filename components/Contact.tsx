"use client"

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

import Form from "./Form";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
 
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/yeshwanth-c-a89a3826a/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yeshwanthc",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/Yeshwanth1823",
    },
  ];

 

  return (
    <section
    id="contact"
      className={`rounded-lg p-8 ${
        isDarkMode ? "bg-slate-800" : "bg-white shadow-lg"
      }`}
    >
      <div className="">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Let's Collaborate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Form isDarkMode={isDarkMode} />
          <div className="space-y-6">
            <Card
              className={`${
                isDarkMode
                  ? "bg-slate-700 border-slate-600"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`${
                    isDarkMode ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    yeshwanthnaidu62@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    +919550066495
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Chittoor, AP, India
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card
              className={`${
                isDarkMode
                  ? "bg-slate-700 border-slate-600"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`${
                    isDarkMode ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Connect with Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? "bg-slate-600 text-slate-300 hover:bg-slate-500"
                          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      } transition-colors duration-200`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <p
          className={`mt-8 text-center ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Have a project in mind? I'd love to hear about it and discuss how we
          can work together to bring your ideas to life.
        </p>
      </div>
    </section>
  );
};

export default Contact;