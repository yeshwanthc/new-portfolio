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
    },
    {
      title: "Web Scrapper",
      description: "Efficiently scrape web data using Cheerio and securely store results in Supabase. Includes user authentication, database management, and seamless data handling for automated web extraction.",
      image: WebScrapper, 
      link: "https://github.com/yeshwanthc/web-scrapper", 
      github: "https://github.com/yeshwanthc/web-scrapper",
      tags: [ "Next.js", "TypeScript","Supabase"],
      featured: true,
    },
    {
      title: "Lumière Spaces",
      description: "Designed and developed a sleek, responsive landing page for Lumière Spaces using modern technologies. Ensured fast load times, seamless navigation, and a visually appealing interface to showcase luxury interior designs.",
      image: LumereSpaces, 
      link: "https://lumierespaces.netlify.app", 
      github: "https://github.com/yeshwanthc/lumiere-spaces",
      tags: ["React.js",  "TypeScript", "Tailwind CSS"],
      featured: false,
    },
    {
      title: "E-Zee",
      description: "A platform showcasing electric bicycles developed by the brand. E-Zee provides detailed specifications, pricing, and performance insights for each electric cycle, helping users make informed choices.",
      image: EZEE, 
      link: "https://www.e-zee.in", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
    },
    {
      title: "React Dashboard",
      description: "A functional dashboard to track product sales, website visits, and more.",
      image: RBD, 
      link: "https://reactdashboard14.netlify.app/", 
      github: "https://github.com/yeshwanthc/react-dashboard",
      tags: ["React.js", "Material UI", "TypeScript"],
      featured: false,
    },
    {
      title: "Dutch Aviation Trainers",
      description: "Training solutions for aviation professionals based in the Netherlands.",
      image: DAT, 
      link: "https://dutchaviationtrainers.com", 
      github: null,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-xl"
                : "bg-gradient-to-br from-white/80 to-slate-50/80 border-slate-200/50 backdrop-blur-xl"
            } shadow-2xl hover:shadow-3xl`}
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  className={`w-full group/btn transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white"
                  } shadow-lg hover:shadow-xl`}
                >
                  View Project 
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      <div className="space-y-8">
        <h3 className={`text-2xl font-bold text-center ${
          isDarkMode ? "text-slate-200" : "text-slate-800"
        }`}>
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-slate-900/30 border-slate-700/30 backdrop-blur-sm"
                  : "bg-white/70 border-slate-200/30 backdrop-blur-sm"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className={`text-lg font-semibold ${
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
                      className={`text-xs ${
                        isDarkMode
                          ? "bg-slate-700/50 text-slate-300"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      className={`w-full ${
                        isDarkMode
                          ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                          : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                      }`}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View
                    </Button>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${
                          isDarkMode
                            ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                            : "border-slate-300 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;