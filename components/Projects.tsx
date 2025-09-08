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
import { Briefcase, ChevronRight, ExternalLink, Github, Star, Sparkles } from "lucide-react";
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
      gradient: "from-violet-600/20 via-purple-600/20 to-fuchsia-600/20",
      accentColor: "violet",
      borderGradient: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Web Scrapper",
      description: "Efficiently scrape web data using Cheerio and securely store results in Supabase. Includes user authentication, database management, and seamless data handling for automated web extraction.",
      image: WebScrapper, 
      link: "https://github.com/yeshwanthc/web-scrapper", 
      github: "https://github.com/yeshwanthc/web-scrapper",
      tags: [ "Next.js", "TypeScript","Supabase"],
      featured: true,
      gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
      accentColor: "emerald",
      borderGradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "Lumière Spaces",
      description: "Designed and developed a sleek, responsive landing page for Lumière Spaces using modern technologies. Ensured fast load times, seamless navigation, and a visually appealing interface to showcase luxury interior designs.",
      image: LumereSpaces, 
      link: "https://lumierespaces.netlify.app", 
      github: "https://github.com/yeshwanthc/lumiere-spaces",
      tags: ["React.js",  "TypeScript", "Tailwind CSS"],
      featured: false,
      gradient: "from-amber-500/10 to-orange-500/10",
      accentColor: "amber",
      borderGradient: "from-amber-500 to-orange-500",
    },
    {
      title: "E-Zee",
      description: "A platform showcasing electric bicycles developed by the brand. E-Zee provides detailed specifications, pricing, and performance insights for each electric cycle, helping users make informed choices.",
      image: EZEE, 
      link: "https://www.e-zee.in", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
      gradient: "from-blue-500/10 to-indigo-500/10",
      accentColor: "blue",
      borderGradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "React Dashboard",
      description: "A functional dashboard to track product sales, website visits, and more.",
      image: RBD, 
      link: "https://reactdashboard14.netlify.app/", 
      github: "https://github.com/yeshwanthc/react-dashboard",
      tags: ["React.js", "Material UI", "TypeScript"],
      featured: false,
      gradient: "from-rose-500/10 to-pink-500/10",
      accentColor: "rose",
      borderGradient: "from-rose-500 to-pink-500",
    },
    {
      title: "Dutch Aviation Trainers",
      description: "Training solutions for aviation professionals based in the Netherlands.",
      image: DAT, 
      link: "https://dutchaviationtrainers.com", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
      gradient: "from-slate-500/10 to-gray-500/10",
      accentColor: "slate",
      borderGradient: "from-slate-500 to-gray-500",
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="space-y-20" id="projects">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            Portfolio Showcase
          </span>
        </div>
        <h2
          className={`text-5xl lg:text-6xl font-bold ${
            isDarkMode
              ? "bg-gradient-to-r from-white via-blue-100 to-purple-200 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 text-transparent bg-clip-text"
          }`}
        >
          Featured Projects
        </h2>
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
          isDarkMode ? "text-slate-300" : "text-slate-600"
        }`}>
          A curated collection of my most impactful work, showcasing modern web applications 
          built with cutting-edge technologies and thoughtful design principles.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border-0"
                : "bg-gradient-to-br from-white via-slate-50/50 to-white border-0"
            } shadow-2xl hover:shadow-3xl backdrop-blur-xl`}
          >
            {/* Animated border gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-60 rounded-xl`} />
            <div className={`absolute inset-[1px] bg-gradient-to-br ${
              isDarkMode 
                ? "from-slate-900/95 via-slate-800/90 to-slate-900/95" 
                : "from-white/95 via-slate-50/80 to-white/95"
            } rounded-xl`} />
            
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-xl blur-xl`} />
            
            <div className="relative">
              {/* Image container with enhanced overlay */}
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Multi-layered overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Featured badge with animation */}
                <div className="absolute top-6 left-6">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
                    isDarkMode 
                      ? "bg-white/10 border-white/20 text-white" 
                      : "bg-black/10 border-black/20 text-white"
                  } shadow-lg`}>
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                </div>
                
                {/* Action buttons with improved styling */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Content with improved spacing */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <CardTitle className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`text-base leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {project.description}
                  </CardDescription>
                </div>

                {/* Enhanced tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? "bg-slate-800/60 text-slate-200 hover:bg-slate-700/80 border border-slate-600/40"
                          : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-300/40"
                      } backdrop-blur-sm shadow-sm`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced CTA button */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full group/btn transition-all duration-500 bg-gradient-to-r ${project.borderGradient} text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] border-0 font-semibold py-3 text-base rounded-xl`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Project 
                      <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Other Projects with improved grid */}
      <div className="space-y-12">
        <div className="text-center">
          <h3 className={`text-4xl font-bold ${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          }`}>
            More Projects
          </h3>
          <p className={`text-lg mt-3 ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Additional work showcasing diverse skills and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode
                  ? "bg-slate-900/80 border-slate-700/30 backdrop-blur-xl"
                  : "bg-white/90 border-slate-200/30 backdrop-blur-xl"
              } shadow-xl hover:shadow-2xl border`}
            >
              {/* Accent line with gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.borderGradient}`} />
              
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 shadow-lg">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 shadow-lg">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 space-y-3">
                <CardTitle className={`text-xl font-bold ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  {project.title}
                </CardTitle>
                <CardDescription className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                } line-clamp-3`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge
                      key={i}
                      className={`text-xs transition-all duration-200 hover:scale-105 ${
                        isDarkMode
                          ? "bg-slate-800/60 text-slate-300 border-slate-600/40"
                          : "bg-slate-100/80 text-slate-700 border-slate-300/40"
                      } border backdrop-blur-sm`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${project.borderGradient} text-white hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl font-medium border-0`}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Project
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;