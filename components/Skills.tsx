import React from "react";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";


interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  return (
    <section className="mb-16">
      <h2
        className={`text-2xl font-semibold mb-6 flex items-center ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <Star className="mr-2" /> Core Competencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Frontend Development", level: 90 },
          { name: "Backend Development", level: 85 },
          { name: "Database Management", level: 80 },
          { name: "DevOps & CI/CD", level: 75 },
          { name: "UI/UX Design", level: 70 },
          { name: "Cloud Services (AWS, GCP)", level: 80 },
        ].map((skill, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.name}
              </span>
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {skill.level}%
              </span>
            </div>
            <Progress
              value={skill.level}
              className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
