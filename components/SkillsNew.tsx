"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Palette, Database } from 'lucide-react'

interface SkillsProps {
  isDarkMode?: boolean
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
      "Next.js",
      "TypeScript",
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
    ],
  },
  {
    name: "Others",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Vite",
      "Netlify",
      "Node.js",
      "Supabase",
      "GraphQL",
    ],
  },
]

const ProfessionalSkills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name)

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
        className={`overflow-hidden ${
          isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
        }`}
      >
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              className={`flex w-full ${
                isDarkMode ? "bg-slate-700" : "bg-gray-100"
              }`}
            >
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className={`flex-1 py-2 px-4 flex items-center justify-center space-x-2 ${
                    isDarkMode
                      ? "data-[state=active]:bg-slate-600 data-[state=active]:text-white"
                      : "data-[state=active]:bg-white data-[state=active]:text-blue-600"
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="p-6">
              {skillCategories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  {activeTab === category.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`w-full py-2 px-3 text-sm font-medium ${
                              isDarkMode
                                ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            } transition-colors duration-200`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

export default ProfessionalSkills

