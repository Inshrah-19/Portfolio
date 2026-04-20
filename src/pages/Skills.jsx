"use client"
import SkillBar from "../components/SkillBar.jsx"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 80 },
      {name: "API Integration", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Responsive Design", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "RESTful APIs", level: 65 },
      { name: "C++", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "Java", level: 60 },
      { name: "MongoDB", level: 20 },
      { name: "Express.js", level: 10 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/Github", level: 90 },     
      { name: "Canva", level: 95 },
      { name: "Figma", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "Trello & Notion", level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and
            tools to build production-ready websites.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
