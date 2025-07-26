"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Briefcase, ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import ImageMain from "../app/images/yesh.png";
import Skills from "./SkillsNew";
import Projects from "./Projects";
import Contact from "./Contact";
import Link from "next/link";
import { FloatingIcons } from "./FloatingIcons";

export default function EnhancedPortfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const updateScrollY = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-400"
        }`} style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? "bg-purple-500" : "bg-purple-400"
        }`} style={{ transform: `translateY(${-scrollY * 0.1}px)` }} />
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? "bg-indigo-500" : "bg-indigo-400"
        }`} style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)` }} />
      </div>

      <FloatingIcons />
      
      {/* Enhanced Cursor Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px at ${cursorPosition.x}px ${
            cursorPosition.y
          }px, ${
            isDarkMode ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0.05)"
          }, transparent 70%)`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 100 
          ? `backdrop-blur-xl ${isDarkMode ? 'bg-slate-950/80' : 'bg-white/80'} border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`
          : 'bg-transparent'
      }`}>
        <div className="container-main mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-xl font-bold ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                : "text-blue-600"
            }`}>
              Yeshwanth C
            </div>
            <div className="hidden md:flex space-x-8">
              {['projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container-main mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  isDarkMode 
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                }`}>
                  👋 Welcome to my portfolio
                </div>
                <h1 className={`text-5xl lg:text-7xl font-bold leading-tight ${
                  isDarkMode
                    ? "bg-gradient-to-r from-white via-blue-100 to-purple-200 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 text-transparent bg-clip-text"
                }`}>
                  Yeshwanth C
                </h1>
                <p className={`text-xl lg:text-2xl font-light ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}>
                  Front-End Developer & UI/UX Enthusiast
                </p>
                <p className={`text-lg max-w-lg leading-relaxed ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  Crafting beautiful, responsive web experiences with modern technologies. 
                  Passionate about clean code and exceptional user interfaces.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25"
                      : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white shadow-lg hover:shadow-blue-500/25"
                  } transform hover:scale-105`}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                  } transform hover:scale-105`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com/yeshwanthc", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/yeshwanth-c-a89a3826a", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:yeshwanthnaidu62@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <Link key={label} href={href} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-12 h-12 rounded-full transition-all duration-300 ${
                        isDarkMode
                          ? "border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10"
                          : "border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50"
                      } transform hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-400 to-purple-500"
                    : "bg-gradient-to-br from-blue-500 to-purple-600"
                } animate-pulse`} />
                <div className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-2 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
                    : "bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600"
                } shadow-2xl`}>
                  <Image
                    src={ImageMain}
                    alt="Yeshwanth"
                    width={400}
                    height={400}
                    className="rounded-full w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                } flex items-center justify-center shadow-lg`}>
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <Projects isDarkMode={isDarkMode} />
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <Skills isDarkMode={isDarkMode} />
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <Contact isDarkMode={isDarkMode} />
        </section>

        {/* Footer */}
        <footer className={`py-12 border-t ${
          isDarkMode ? "border-slate-800" : "border-slate-200"
        }`}>
          <div className="text-center">
            <p className={`text-lg font-medium mb-2 ${
              isDarkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              Let's build something amazing together
            </p>
            <p className={`${
              isDarkMode ? "text-slate-500" : "text-slate-500"
            }`}>
              © 2024 Yeshwanth C. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}