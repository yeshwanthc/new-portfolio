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
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
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
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
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
      gradient: "from-violet-500/15 via-purple-500/15 to-fuchsia-500/15",
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
      gradient: "from-orange-500/15 via-amber-500/15 to-yellow-500/15",
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
      gradient: "from-indigo-500/15 via-blue-500/15 to-sky-500/15",
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
      gradient: "from-rose-500/15 via-pink-500/15 to-red-500/15",
      accentColor: "rose",
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const getAccentColors = (accentColor: string, isDarkMode: boolean) => {
    const colors = {
      blue: {
        primary: isDarkMode ? "from-blue-400 to-blue-600" : "from-blue-500 to-blue-700",
        secondary: isDarkMode ? "text-blue-400" : "text-blue-600",
        bg: isDarkMode ? "bg-blue-500/10" : "bg-blue-50",
        border: isDarkMode ? "border-blue-500/30" : "border-blue-200",
        hover: isDarkMode ? "hover:bg-blue-500/20" : "hover:bg-blue-100"
      },
      emerald: {
        primary: isDarkMode ? "from-emerald-400 to-emerald-600" : "from-emerald-500 to-emerald-700",
        secondary: isDarkMode ? "text-emerald-400" : "text-emerald-600",
        bg: isDarkMode ? "bg-emerald-500/10" : "bg-emerald-50",
        border: isDarkMode ? "border-emerald-500/30" : "border-emerald-200",
        hover: isDarkMode ? "hover:bg-emerald-500/20" : "hover:bg-emerald-100"
      },
      violet: {
        primary: isDarkMode ? "from-violet-400 to-violet-600" : "from-violet-500 to-violet-700",
        secondary: isDarkMode ? "text-violet-400" : "text-violet-600",
        bg: isDarkMode ? "bg-violet-500/10" : "bg-violet-50",
        border: isDarkMode ? "border-violet-500/30" : "border-violet-200",
        hover: isDarkMode ? "hover:bg-violet-500/20" : "hover:bg-violet-100"
      },
      orange: {
        primary: isDarkMode ? "from-orange-400 to-orange-600" : "from-orange-500 to-orange-700",
        secondary: isDarkMode ? "text-orange-400" : "text-orange-600",
        bg: isDarkMode ? "bg-orange-500/10" : "bg-orange-50",
        border: isDarkMode ? "border-orange-500/30" : "border-orange-200",
        hover: isDarkMode ? "hover:bg-orange-500/20" : "hover:bg-orange-100"
      },
      indigo: {
        primary: isDarkMode ? "from-indigo-400 to-indigo-600" : "from-indigo-500 to-indigo-700",
        secondary: isDarkMode ? "text-indigo-400" : "text-indigo-600",
        bg: isDarkMode ? "bg-indigo-500/10" : "bg-indigo-50",
        border: isDarkMode ? "border-indigo-500/30" : "border-indigo-200",
        hover: isDarkMode ? "hover:bg-indigo-500/20" : "hover:bg-indigo-100"
      },
      rose: {
        primary: isDarkMode ? "from-rose-400 to-rose-600" : "from-rose-500 to-rose-700",
        secondary: isDarkMode ? "text-rose-400" : "text-rose-600",
        bg: isDarkMode ? "bg-rose-500/10" : "bg-rose-50",
        border: isDarkMode ? "border-rose-500/30" : "border-rose-200",
        hover: isDarkMode ? "hover:bg-rose-500/20" : "hover:bg-rose-100"
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
                  ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-xl"
                  : "bg-gradient-to-br from-white/80 to-slate-50/80 border-slate-200/50 backdrop-blur-xl"
              } shadow-2xl hover:shadow-3xl`}
            >
              {/* Accent border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${accentColors.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
              
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
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${accentColors.bg} ${accentColors.secondary} backdrop-blur-sm border ${accentColors.border}`}>
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
                      className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                        isDarkMode
                          ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full group/btn transition-all duration-300 bg-gradient-to-r ${accentColors.primary} text-white shadow-lg hover:shadow-xl hover:scale-105 border-0`}
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
                    ? "bg-slate-900/50 border-slate-700/40 backdrop-blur-sm"
                    : "bg-white/80 border-slate-200/40 backdrop-blur-sm"
                } shadow-lg hover:shadow-xl border-2`}
              >
                {/* Accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors.primary}`} />
                
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
                  }`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`text-sm ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  } line-clamp-3`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={`text-xs transition-all duration-200 ${
                          isDarkMode
                            ? `${accentColors.bg} ${accentColors.secondary} border ${accentColors.border}`
                            : `${accentColors.bg} ${accentColors.secondary} border ${accentColors.border}`
                        } hover:scale-105`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${accentColors.primary} text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
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