"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Palette, Database, Cog, Beaker } from "lucide-react";

interface SkillsProps {
  isDarkMode?: boolean;
}

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next Js",
      "TypeScript",
      "Responsive Design",
      "Jest",
    ],
  },
  {
    name: "Styling",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Styled Components",
    ],
  },
  {
    name: "Others",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "GitHub",
      "Bit Bucket",
      "Vercel",
      "Vite",
      "Netlify",
      "Node.js",
      "Bun.js",
      "Supabase",
      "GraphQL",
    ],
  },
];

const Skills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name);

  return (
    <section className="mb-16" id="skills">
      <h2
        className={`text-3xl font-bold mb-8 flex items-center ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <Briefcase className="mr-3 w-8 h-8" /> Skills & Expertise
      </h2>
      <Card
        className={`overflow-hidden glossy-card ${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-gray-200"
        }`}
      >
        <CardContent className="p-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex w-full p-10 bg-slate-900">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className={`flex-1 py-4 px-6 flex flex-col items-center justify-center space-y-2 ${
                    isDarkMode
                      ? "data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                      : "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="p-6">
              <AnimatePresence mode="popLayout">
                {skillCategories.map((category) => (
                  <TabsContent key={category.name} value={category.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap gap-3"
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`${
                              isDarkMode
                                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            } transition-colors duration-200 text-sm py-2 px-4`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
