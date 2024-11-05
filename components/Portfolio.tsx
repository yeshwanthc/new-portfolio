"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Github, Linkedin, Mail, Code, Briefcase } from "lucide-react";
import Image from "next/image";
import ImageMain from "../app/images/yesh.png";
import Skills from "./SkillsNew";
import Projects from "./Projects";
import Contact from "./Contact";
import Link from "next/link";

export default function EnhancedPortfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const handleScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-slate-950 text-slate-300"
          : "bg-slate-300 text-slate-950"
      }`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${
            cursorPosition.y
          }px, ${
            isDarkMode ? "rgba(29, 78, 216, 0.15)" : "rgba(59, 130, 246, 0.15)"
          }, transparent 80%)`,
        }}
      />
      <div className="container-main mx-auto px-4 py-16 relative z-10">
        <main className="flex flex-col py-8 md:flex-row items-center justify-between mb-16">
          <div>
            <h1
              className={`text-4xl font-bold mb-2 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                  : "text-blue-600"
              }`}
            >
              Yeshwanth C
            </h1>
            <p
              className={`text-xl mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Front End Developer
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/yeshwanthc" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className={
                    isDarkMode
                      ? "text-gray-400 hover:text-gray-900 hover:border-white"
                      : "text-gray-600 hover:text-gray-900 hover:border-gray-900"
                  }
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yeshwanth-c-a89a3826a"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={
                    isDarkMode
                      ? "text-gray-400 hover:text-gray-900 hover:border-white"
                      : "text-gray-600 hover:text-gray-900 hover:border-gray-900"
                  }
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href = "mailto:yeshwanthnaidu62@gmail.com")
                }
                size="icon"
                className={
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-900 hover:border-white"
                    : "text-gray-600 hover:text-gray-900 hover:border-gray-900"
                }
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div
              className={`w-48 h-48 rounded-full p-1 ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-400 to-purple-500"
                  : "bg-gradient-to-br from-blue-500 to-purple-600"
              }`}
            >
              <Image
                src={ImageMain}
                alt="Yeshwanth"
                width={200}
                height={200}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            {/* <div className="flex items-center space-x-2">
              <Moon className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                className={`${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
              <Sun className={`h-5 w-5 ${isDarkMode ? 'text-gray-600' : 'text-yellow-500'}`} />
            </div> */}
          </div>
        </main>

        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />

        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
