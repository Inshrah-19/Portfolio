"use client"
import ProjectCard from "../components/ProjectCard.jsx"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Hospital Management System",
    description:
      "An advanced console based system built with C++, using priority queues having numerous features for beter management.",
    link: "https://github.com/Inshrah-19/Hospital-Management-System",
    image: "/HMS.png",
    tech: ["C++", "File Handling", "Console-based"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio template emphasizing designing, creativeness, and animations using REact.js, Tailwind CSS, and Framer Motion.",
    link: "https://github.com/Inshrah-19/Portfolio",
    image: "Portfolio.png",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Pakistan Railways App",
    description:
      "Created a dark mode blog web app with React and Node.js, focusing on accessibility and sleek purple UI design.",
    link: "https://github.com/yourusername/dark-mode-blog",
    image: "/dark-blog-platform.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "3D Interactive Dashboard",
    description: "Modern dashboard with 3D elements and real-time data visualization using Three.js and React.",
    link: "https://github.com/yourusername/3d-dashboard",
    image: "/3d-dashboard-interface.png",
    tech: ["Three.js", "React", "D3.js"],
  },
  {
    title: "AI-Powered Chat App",
    description: "Real-time chat application with AI integration, featuring modern UI and seamless user experience.",
    link: "https://github.com/yourusername/ai-chat-app",
    image: "/ai-chat-application.png",
    tech: ["React", "Socket.io", "OpenAI API"],
  },
  {
    title: "Animated Landing Page",
    description: "High-converting landing page with advanced animations and optimized performance.",
    link: "https://github.com/yourusername/animated-landing",
    image: "/animated-landing-page.png",
    tech: ["React", "GSAP", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring modern web applications with cutting-edge technologies and stunning
            visual design.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
