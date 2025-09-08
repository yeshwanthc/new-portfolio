"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Zap, Sparkles, TrendingUp } from 'lucide-react'

interface SkillsProps {
  isDarkMode?: boolean
}

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    skills: [
      { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
      { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
      { name: "Next.js", level: 82, color: "from-gray-800 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-800" },
    ],
  },
  {
    name: "Styling",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    skills: [
      { name: "Sass", level: 85, color: "from-pink-500 to-rose-500" },
      { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "Bootstrap", level: 88, color: "from-purple-600 to-indigo-600" },
      { name: "Material-UI", level: 75, color: "from-blue-500 to-cyan-500" },
    ],
  },
  {
    name: "Tools & Others",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGradient: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
    skills: [
      { name: "Git", level: 85, color: "from-orange-600 to-red-600" },
      { name: "GitHub", level: 88, color: "from-gray-700 to-gray-900" },
      { name: "Vercel", level: 80, color: "from-gray-800 to-black" },
      { name: "Vite", level: 82, color: "from-purple-600 to-blue-600" },
      { name: "Netlify", level: 85, color: "from-teal-500 to-cyan-500" },
      { name: "Node.js", level: 70, color: "from-green-600 to-green-800" },
      { name: "Supabase", level: 75, color: "from-green-500 to-emerald-500" },
      { name: "GraphQL", level: 65, color: "from-pink-500 to-purple-500" },
    ],
  },
]

const ProfessionalSkills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="space-y-20" id="skills">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span className={`text-sm font-medium ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
            Technical Expertise
          </span>
        </div>
        <h2
          className={`text-5xl lg:text-6xl font-bold ${
            isDarkMode
              ? "bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 text-transparent bg-clip-text"
          }`}
        >
          Skills & Expertise
        </h2>
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
          isDarkMode ? "text-slate-300" : "text-slate-600"
        }`}>
          A comprehensive toolkit of modern technologies and frameworks that I leverage 
          to create exceptional digital experiences and robust applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl`
                  : isDarkMode
                  ? "bg-slate-800/50 text-slate-300 hover:bg-slate-700/60 border border-slate-600/30"
                  : "bg-white/70 text-slate-700 hover:bg-slate-50/80 border border-slate-200/50"
              } backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${
                  activeCategory === index 
                    ? "bg-white/20" 
                    : `bg-gradient-to-r ${category.gradient} text-white`
                }`}>
                  {category.icon}
                </div>
                <span className="font-semibold text-lg">{category.name}</span>
              </div>
              
              {/* Active indicator */}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <Card
          className={`overflow-hidden border-0 shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" 
              : "bg-gradient-to-br from-white/95 via-slate-50/80 to-white/95"
          } backdrop-blur-xl`}
        >
          {/* Animated border */}
          <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].gradient} opacity-60 rounded-2xl`} />
          <div className={`absolute inset-[1px] bg-gradient-to-br ${
            isDarkMode 
              ? "from-slate-900/95 via-slate-800/90 to-slate-900/95" 
              : "from-white/95 via-slate-50/80 to-white/95"
          } rounded-2xl`} />
          
          <CardContent className="relative p-12">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center space-y-4">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].bgGradient} border ${
                  isDarkMode ? "border-slate-600/30" : "border-slate-200/50"
                } backdrop-blur-sm`}>
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].gradient} text-white`}>
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? "text-slate-100" : "text-slate-800"
                  }`}>
                    {skillCategories[activeCategory].name} Technologies
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDarkMode 
                        ? "bg-slate-800/60 border border-slate-600/40 hover:bg-slate-700/60 hover:border-slate-500/60" 
                        : "bg-white/80 border border-slate-200/60 hover:bg-white/90 hover:border-slate-300/60"
                    } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={`font-bold text-lg ${
                          isDarkMode ? "text-slate-100" : "text-slate-800"
                        }`}>
                          {skill.name}
                        </span>
                        <Badge className={`px-3 py-1 font-semibold ${
                          isDarkMode
                            ? "bg-slate-700/60 text-slate-200 border-slate-500/40"
                            : "bg-slate-100/80 text-slate-700 border-slate-300/40"
                        } border backdrop-blur-sm`}>
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress bar with gradient */}
                      <div className={`w-full h-3 rounded-full overflow-hidden ${
                        isDarkMode ? "bg-slate-700/60" : "bg-slate-200/80"
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < Math.floor(skill.level / 20)
                                  ? `bg-gradient-to-r ${skill.color}`
                                  : isDarkMode
                                  ? "bg-slate-600"
                                  : "bg-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className={`text-sm font-medium ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Intermediate"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Category Summary */}
              <div className="text-center pt-8">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${
                  isDarkMode
                    ? "bg-slate-800/60 border border-slate-600/40"
                    : "bg-slate-100/80 border border-slate-200/50"
                } backdrop-blur-sm`}>
                  <Sparkles className={`w-5 h-5 ${
                    isDarkMode ? "text-yellow-400" : "text-yellow-600"
                  }`} />
                  <span className={`text-lg font-semibold ${
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  }`}>
                    {skillCategories[activeCategory].skills.length} Technologies Mastered
                  </span>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ProfessionalSkills