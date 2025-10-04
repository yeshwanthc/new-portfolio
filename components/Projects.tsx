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

interface ProjectProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Email Signature Generator",
      description: "Craft personalized email signatures effortlessly with 40 unique styles. Enhance professionalism, improve communication, and make lasting impressions with customizable designs tailored for any industry.",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://esgenerator.netlify.app", 
      github: "https://github.com/yeshwanthc/email-signature-generator",
      tags: ["React.js", "Tailwind CSS", "TypeScript"],
      featured: true,
      gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
      accentColor: "indigo",
      borderGradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Web Scrapper",
      description: "Efficiently scrape web data using Cheerio and securely store results in Supabase. Includes user authentication, database management, and seamless data handling for automated web extraction.",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800", 
      link: "https://github.com/yeshwanthc/web-scrapper", 
      github: "https://github.com/yeshwanthc/web-scrapper",
      tags: [ "Next.js", "TypeScript","Supabase"],
      featured: true,
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      accentColor: "emerald",
      borderGradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Lumière Spaces",
      description: "Designed and developed a sleek, responsive landing page for Lumière Spaces using modern technologies. Ensured fast load times, seamless navigation, and a visually appealing interface to showcase luxury interior designs.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800", 
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
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800", 
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
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800", 
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
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800", 
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
    <section className="py-16 lg:py-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Portfolio Showcase
            </span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode
              ? "bg-gradient-to-r from-white via-blue-100 to-purple-200 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 text-transparent bg-clip-text"
          }`}>
            Featured Projects
          </h2>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}>
            A curated collection of my most impactful work, showcasing modern web applications 
            built with cutting-edge technologies and thoughtful design principles.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border-0"
                  : "bg-gradient-to-br from-white via-slate-50/50 to-white border-0"
              } shadow-2xl hover:shadow-3xl backdrop-blur-xl rounded-2xl`}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-60 rounded-2xl`} />
              <div className={`absolute inset-[1px] bg-gradient-to-br ${
                isDarkMode 
                  ? "from-slate-900/95 via-slate-800/90 to-slate-900/95" 
                  : "from-white/95 via-slate-50/80 to-white/95"
              } rounded-2xl`} />
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl blur-xl`} />
              
              <div className="relative">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-video w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full backdrop-blur-md border ${
                      isDarkMode 
                        ? "bg-white/10 border-white/20 text-white" 
                        : "bg-black/10 border-black/20 text-white"
                    } shadow-lg`}>
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold">Featured</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 p-0"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="sm" 
                          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 p-0"
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <CardTitle className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`text-sm sm:text-base leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {project.description}
                    </CardDescription>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          isDarkMode
                            ? "bg-slate-800/60 text-slate-200 hover:bg-slate-700/80 border border-slate-600/40"
                            : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-300/40"
                        } backdrop-blur-sm shadow-sm rounded-full`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      className={`w-full group/btn transition-all duration-500 bg-gradient-to-r ${project.borderGradient} text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] border-0 font-semibold py-3 text-sm sm:text-base rounded-xl`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Project 
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-slate-100" : "text-slate-800"
            }`}>
              More Projects
            </h3>
            <p className={`text-base sm:text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Additional work showcasing diverse skills and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                  isDarkMode
                    ? "bg-slate-900/80 border-slate-700/30 backdrop-blur-xl"
                    : "bg-white/90 border-slate-200/30 backdrop-blur-xl"
                } shadow-xl hover:shadow-2xl border rounded-2xl`}
              >
                {/* Accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.borderGradient}`} />
                
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 shadow-lg w-10 h-10 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 shadow-lg w-10 h-10 p-0">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <CardHeader className="p-0 pb-3 space-y-2">
                    <CardTitle className={`text-lg sm:text-xl font-bold ${
                      isDarkMode ? "text-slate-100" : "text-slate-900"
                    }`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    } line-clamp-3`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge
                          key={i}
                          className={`text-xs transition-all duration-200 hover:scale-105 ${
                            isDarkMode
                              ? "bg-slate-800/60 text-slate-300 border-slate-600/40"
                              : "bg-slate-100/80 text-slate-700 border-slate-300/40"
                          } border backdrop-blur-sm px-2 py-1 rounded-full`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${project.borderGradient} text-white hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl font-medium border-0 text-xs sm:text-sm py-2`}
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Project
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;