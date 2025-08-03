"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Zap } from 'lucide-react'

interface SkillsProps {
  isDarkMode?: boolean
}

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    name: "Styling",
    icon: <Palette className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Sass", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Material-UI", level: 75 },
    ],
  },
  {
    name: "Tools & Others",
    icon: <Database className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Vercel", level: 80 },
      { name: "Vite", level: 82 },
      { name: "Netlify", level: 85 },
      { name: "Node.js", level: 70 },
      { name: "Supabase", level: 75 },
      { name: "GraphQL", level: 65 },
    ],
  },
]

const ProfessionalSkills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name)

  return (
    <section className="space-y-16" id="skills">
      <div className="text-center space-y-4">
        <h2
          className={`text-4xl lg:text-5xl font-bold ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          }`}
        >
          Skills & Expertise
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${
          isDarkMode ? "text-slate-400" : "text-slate-600"
        }`}>
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <Card
        className={`overflow-hidden border-0 shadow-2xl ${
          isDarkMode 
            ? "bg-slate-900/70 backdrop-blur-xl border border-slate-700/30" 
            : "bg-white/90 backdrop-blur-xl border border-slate-200/30"
        }`}
      >
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              className={`flex w-full h-16 rounded-none ${
                isDarkMode ? "bg-slate-800/50" : "bg-slate-100/50"
              } backdrop-blur-sm border-b ${
                isDarkMode ? "border-slate-700/30" : "border-slate-200/30"
              }`}
            >
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className={`flex-1 h-full flex items-center justify-center space-x-3 text-base font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "data-[state=active]:bg-slate-700/60 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-400"
                      : "data-[state=active]:bg-white/80 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-lg"
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="p-8">
              {skillCategories.map((category) => (
                <TabsContent key={category.name} value={category.name} className="mt-0">
                  {activeTab === category.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`p-4 rounded-xl ${
                              isDarkMode 
                                ? "bg-slate-800/50 border border-slate-600/40 hover:bg-slate-700/50" 
                                : "bg-white/70 border border-slate-200/50 hover:bg-slate-50/80"
                            } backdrop-blur-sm`}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <span className={`font-semibold ${
                                isDarkMode ? "text-slate-200" : "text-slate-800"
                              }`}>
                                {skill.name}
                              </span>
                              <span className={`text-sm font-medium ${
                                isDarkMode ? "text-slate-400" : "text-slate-600"
                              }`}>
                                {skill.level}%
                              </span>
                            </div>
                            <div className={`w-full h-2 rounded-full ${
                              isDarkMode ? "bg-slate-700" : "bg-slate-200"
                            } overflow-hidden`}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="text-center pt-4">
                        <Badge
                          variant="secondary"
                          className={`px-6 py-2 text-base font-medium ${
                            isDarkMode
                              ? "bg-slate-800/60 text-blue-300 border border-slate-600/40"
                              : "bg-blue-50 text-blue-700 border border-blue-200/50"
                          }`}
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          {category.skills.length} Technologies Mastered
                        </Badge>
                      </div>
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