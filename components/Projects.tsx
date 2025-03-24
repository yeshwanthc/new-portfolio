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
import { Briefcase, ChevronRight } from "lucide-react";
import Image from "next/image";
import SignatureHub from "../app/images/esgenerator.png";
import DAT from "../app/images/Dutch Aviation Trainers.png";
import RBD from "../app/images/React Dashboard.png";
import WebScrapper from "../app/images/webscrapper.png";
import EZEE from "../app/images/e-zee.png";
import Unilet from "../app/images/Unilet.png";

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
      tags: ["React.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "E-Zee",
      description: "A platform showcasing electric bicycles developed by the brand. E-Zee provides detailed specifications, pricing, and performance insights for each electric cycle, helping users make informed choices.",
      image: EZEE, 
      link: "https://www.e-zee.in", 
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Web Scrapper",
      description: "Efficiently scrape web data using Cheerio and securely store results in Supabase. Includes user authentication, database management, and seamless data handling for automated web extraction.",
      image: WebScrapper, 
      link: "https://github.com/yeshwanthc/web-scrapper", 
      tags: [ "Next.js", "TypeScript","Supabase"],
    },
    {
      title: "React Dashboard",
      description: "A functional dashboard to track product sales, website visits, and more.",
      image: RBD, 
      link: "https://reactdashboard14.netlify.app/", 
      tags: ["React JS", "Material UI", "TypeScript"],
    },
    {
      title: "Dutch Aviation Trainers",
      description: "Training solutions for aviation professionals based in the Netherlands.",
      image: DAT, 
      link: "https://dutchaviationtrainers.com", 
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Unilet Stores",
      description: "A retail store for consumer electronics and home appliances.",
      image: Unilet, 
      link: "https://uniletstores.com", 
      tags: ["HTML", "CSS", "JavaScript", "WordPress", "WooCommerce"],
    },
  ];

  return (
    <section className="mb-16" id="projects">
      <h2
        className={`text-2xl font-semibold mb-6 flex items-center ${
          isDarkMode ? "text-slate-100" : "text-slate-900"
        }`}
      >
        <Briefcase className="mr-2" /> Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg backdrop-blur-lg ${
              isDarkMode
                ? "bg-slate-900 bg-opacity-60 border-slate-700"
                : "bg-white bg-opacity-70 border-slate-200"
            }`}
          >
            <div className="relative overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
            </div>

            <CardHeader className="relative z-10 p-6">
              <CardTitle
                className={`text-lg font-bold ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {project.title}
              </CardTitle>
              <CardDescription
                className={`mt-2 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className={
                      isDarkMode
                        ? "bg-slate-700 text-slate-300 hover:text-slate-950"
                        : "bg-slate-800 text-slate-700"
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className={`w-full flex justify-center items-center transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                      : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                  }`}
                >
                  View Project <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;