import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SignatureHub from "../app/images/esgenerator.png";
import DAT from "../app/images/Dutch Aviation Trainers.png";
import RBD from "../app/images/React Dashboard.png";
import WebScrapper from "../app/images/webscrapper.png";
import EZEE from "../app/images/e-zee.png";
import LumereSpaces from "../app/images/lumerespaces.png";

interface ProjectProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Email Signature Generator",
      description: "Craft personalized email signatures effortlessly with 40 unique styles. Enhance professionalism, improve communication, and make lasting impressions with customizable designs tailored for any industry.",
      image: SignatureHub,
      link: "https://esgenerator.netlify.app", 
      github: "https://github.com/yeshwanthc/email-signature-generator",
      tags: ["React.js", "Tailwind CSS", "TypeScript"],
      featured: true,
      gradient: "from-blue-500/10 to-indigo-500/10",
      accentColor: "blue",
    },
    {
      title: "Web Scrapper",
      description: "Efficiently scrape web data using Cheerio and securely store results in Supabase. Includes user authentication, database management, and seamless data handling for automated web extraction.",
      image: WebScrapper, 
      link: "https://github.com/yeshwanthc/web-scrapper", 
      github: "https://github.com/yeshwanthc/web-scrapper",
      tags: [ "Next.js", "TypeScript","Supabase"],
      featured: true,
      gradient: "from-emerald-500/10 to-teal-500/10",
      accentColor: "emerald",
    },
    {
      title: "Lumière Spaces",
      description: "Designed and developed a sleek, responsive landing page for Lumière Spaces using modern technologies. Ensured fast load times, seamless navigation, and a visually appealing interface to showcase luxury interior designs.",
      image: LumereSpaces, 
      link: "https://lumierespaces.netlify.app", 
      github: "https://github.com/yeshwanthc/lumiere-spaces",
      tags: ["React.js",  "TypeScript", "Tailwind CSS"],
      featured: false,
      gradient: "from-violet-500/10 to-purple-500/10",
      accentColor: "violet",
    },
    {
      title: "E-Zee",
      description: "A platform showcasing electric bicycles developed by the brand. E-Zee provides detailed specifications, pricing, and performance insights for each electric cycle, helping users make informed choices.",
      image: EZEE, 
      link: "https://www.e-zee.in", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
      gradient: "from-orange-500/10 to-red-500/10",
      accentColor: "orange",
    },
    {
      title: "React Dashboard",
      description: "A functional dashboard to track product sales, website visits, and more.",
      image: RBD, 
      link: "https://reactdashboard14.netlify.app/", 
      github: "https://github.com/yeshwanthc/react-dashboard",
      tags: ["React.js", "Material UI", "TypeScript"],
      featured: false,
      gradient: "from-indigo-500/10 to-blue-500/10",
      accentColor: "indigo",
    },
    {
      title: "Dutch Aviation Trainers",
      description: "Training solutions for aviation professionals based in the Netherlands.",
      image: DAT, 
      link: "https://dutchaviationtrainers.com", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
      gradient: "from-rose-500/10 to-pink-500/10",
      accentColor: "rose",
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const getAccentColors = (accentColor: string, isDarkMode: boolean) => {
    const colors = {
      blue: {
        primary: isDarkMode ? "from-blue-500 to-indigo-600" : "from-blue-600 to-indigo-700",
        secondary: isDarkMode ? "text-blue-300" : "text-blue-700",
        bg: isDarkMode ? "bg-blue-500/20" : "bg-blue-50",
        border: isDarkMode ? "border-blue-400/40" : "border-blue-300",
        hover: isDarkMode ? "hover:bg-blue-500/30" : "hover:bg-blue-100",
        badge: isDarkMode ? "bg-blue-500/15 text-blue-300 border-blue-400/30" : "bg-blue-100 text-blue-800 border-blue-300"
      },
      emerald: {
        primary: isDarkMode ? "from-emerald-500 to-teal-600" : "from-emerald-600 to-teal-700",
        secondary: isDarkMode ? "text-emerald-300" : "text-emerald-700",
        bg: isDarkMode ? "bg-emerald-500/20" : "bg-emerald-50",
        border: isDarkMode ? "border-emerald-400/40" : "border-emerald-300",
        hover: isDarkMode ? "hover:bg-emerald-500/30" : "hover:bg-emerald-100",
        badge: isDarkMode ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30" : "bg-emerald-100 text-emerald-800 border-emerald-300"
      },
      violet: {
        primary: isDarkMode ? "from-violet-500 to-purple-600" : "from-violet-600 to-purple-700",
        secondary: isDarkMode ? "text-violet-300" : "text-violet-700",
        bg: isDarkMode ? "bg-violet-500/20" : "bg-violet-50",
        border: isDarkMode ? "border-violet-400/40" : "border-violet-300",
        hover: isDarkMode ? "hover:bg-violet-500/30" : "hover:bg-violet-100",
        badge: isDarkMode ? "bg-violet-500/15 text-violet-300 border-violet-400/30" : "bg-violet-100 text-violet-800 border-violet-300"
      },
      orange: {
        primary: isDarkMode ? "from-orange-500 to-red-600" : "from-orange-600 to-red-700",
        secondary: isDarkMode ? "text-orange-300" : "text-orange-700",
        bg: isDarkMode ? "bg-orange-500/20" : "bg-orange-50",
        border: isDarkMode ? "border-orange-400/40" : "border-orange-300",
        hover: isDarkMode ? "hover:bg-orange-500/30" : "hover:bg-orange-100",
        badge: isDarkMode ? "bg-orange-500/15 text-orange-300 border-orange-400/30" : "bg-orange-100 text-orange-800 border-orange-300"
      },
      indigo: {
        primary: isDarkMode ? "from-indigo-500 to-blue-600" : "from-indigo-600 to-blue-700",
        secondary: isDarkMode ? "text-indigo-300" : "text-indigo-700",
        bg: isDarkMode ? "bg-indigo-500/20" : "bg-indigo-50",
        border: isDarkMode ? "border-indigo-400/40" : "border-indigo-300",
        hover: isDarkMode ? "hover:bg-indigo-500/30" : "hover:bg-indigo-100",
        badge: isDarkMode ? "bg-indigo-500/15 text-indigo-300 border-indigo-400/30" : "bg-indigo-100 text-indigo-800 border-indigo-300"
      },
      rose: {
        primary: isDarkMode ? "from-rose-500 to-pink-600" : "from-rose-600 to-pink-700",
        secondary: isDarkMode ? "text-rose-300" : "text-rose-700",
        bg: isDarkMode ? "bg-rose-500/20" : "bg-rose-50",
        border: isDarkMode ? "border-rose-400/40" : "border-rose-300",
        hover: isDarkMode ? "hover:bg-rose-500/30" : "hover:bg-rose-100",
        badge: isDarkMode ? "bg-rose-500/15 text-rose-300 border-rose-400/30" : "bg-rose-100 text-rose-800 border-rose-300"
      }
    };
    return colors[accentColor as keyof typeof colors];
  };

  return (
    <section className="space-y-16" id="projects">
      <div className="text-center space-y-4">
        <h2
          className={`text-4xl lg:text-5xl font-bold ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          }`}
        >
          Featured Projects
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${
          isDarkMode ? "text-slate-400" : "text-slate-600"
        }`}>
          A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => {
          const accentColors = getAccentColors(project.accentColor, isDarkMode);
          return (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/30 backdrop-blur-xl"
                  : "bg-gradient-to-br from-white/90 to-slate-50/70 border-slate-200/40 backdrop-blur-xl"
              } shadow-xl hover:shadow-2xl border`}
            >
              {/* Accent border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 rounded-lg`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${accentColors.primary} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
              
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${accentColors.badge}`}>
                  ✨ Featured
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardHeader className="space-y-3">
                <CardTitle className={`text-xl font-bold ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  {project.title}
                </CardTitle>
                <CardDescription className={`text-base leading-relaxed ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        isDarkMode
                          ? "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-600/40"
                          : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-300/40"
                      } backdrop-blur-sm`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full group/btn transition-all duration-300 bg-gradient-to-r ${accentColors.primary} text-white shadow-lg hover:shadow-xl hover:scale-[1.02] border-0 font-medium`}
                  >
                    View Project 
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Other Projects */}
      <div className="space-y-8">
        <h3 className={`text-3xl font-bold text-center ${
          isDarkMode ? "text-slate-200" : "text-slate-800"
        }`}>
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const accentColors = getAccentColors(project.accentColor, isDarkMode);
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-rotate-1 ${
                  isDarkMode
                    ? "bg-slate-900/70 border-slate-700/30 backdrop-blur-xl"
                    : "bg-white/85 border-slate-200/30 backdrop-blur-xl"
                } shadow-lg hover:shadow-xl border`}
              >
                {/* Accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors.primary}`} />
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 rounded-lg`} />
                
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Hover overlay with project links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3 space-y-2">
                  <CardTitle className={`text-lg font-bold ${
                    isDarkMode ? "text-slate-100" : "text-slate-900"
                  } relative z-10`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`text-sm ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  } line-clamp-3 relative z-10`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 relative z-10">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={`text-xs transition-all duration-200 hover:scale-105 ${accentColors.badge}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${accentColors.primary} text-white hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg font-medium`}
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;