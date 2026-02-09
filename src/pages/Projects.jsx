"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "framer-motion";

const projects = [
{
  title: "Hospital Management System (C++)",
  description:
    "An advanced console-based Hospital Management System developed in C++ to manage patients, doctors, appointments, and records efficiently using structured programming and file handling.",
  link: "https://github.com/Inshrah-19/Hospital-Management-System.git",
  image: "/HMS.png",
  tech: ["C++", "File Handling", "Data Structures", "Console Application"],
  category: "semester",
},
{
  title: "Snake Game (C++)",
  description:
    "A classic console-based Snake Game developed in C++ to demonstrate game logic, input handling, and basic data structures along with scores handling in a terminal environment.",
  link: "https://github.com/Inshrah-19/Snake-Game.git",
  image: "/SnakeC++.jpg",
  tech: ["C++", "Game Logic", "Console Application", "File Handling"],
  category: "semester",
},
{
  title: "Railway Management System",
  description:
    "A static website built using HTML, CSS, and JavaScript that simulates a railway management system with pages for train schedules, ticket booking, and basic navigation.",
  link: "https://inshrah-19.github.io/Railway-Management-System/",
  image: "/RailwayMS.png",
  tech: ["HTML", "CSS", "JavaScript"],
  category: "semester",
},
{
  title: "Fitness Tracker",
  description:
    "A Java-based GUI fitness tracking application that allows users to calculate BMI, manage health-related data, and track fitness goals using object-oriented programming concepts.",
  link: "https://github.com/Inshrah-19/Fitness-Tracker.git",
  image: "/FitnessTracker.png",
  tech: ["Java", "OOP", "GUI Development", "Data Management"],
  category: "semester",
},
{
  title: "Snake Game (Assembly)",
  description:
    "A low-level console-based Snake Game implemented in Assembly language to understand memory management, control flow, and processor-level operations.",
  link: "https://github.com/Inshrah-19/SnakeGame-Assebmly-Languge.git",
  image: "/SnakeAssembly.png",
  tech: ["Assembly Language", "Low-level Programming", "Console Application"],
  category: "semester",
},
{
  title: "Portfolio Website",
  description:
    "A modern, responsive personal portfolio website showcasing projects, skills, and experience with smooth animations and a clean UI.",
  link: "https://github.com/Inshrah-19/Portfolio.git",
  image: "/Portfolio.png",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  category: "web",
},
{
  title: "RouteMate – Bus Tracker & Manager",
  description:
    "A full-stack bus tracking and management system designed to manage routes, buses, and schedules with a modern and responsive user interface.",
  link: "https://github.com/Inshrah-19/RouteMate.git",
  image: "/routemate.png",
  tech: ["React", "TypeScript", "Express.js", "Sequelize ORM", "MySQL"],
  category: "web",
},
{
  title: "OptiPrice – E-commerce Price Optimization",
  description:
    "A UI/UX design concept for an AI-powered e-commerce price optimization platform for both buyers and sellers, focusing on usability, data visualization, and user-friendly workflows.",
  link: "https://github.com/Inshrah-19/OptiPrice-E-commerce-Price-Optimization",
  image: "/OptiPrice.png",
  tech: ["Figma", "UI/UX Design", "AI-based Concept"],
  category: "web",
},
{
  title: "Pakistan Railways App – Redesign",
  description:
    "A UI/UX redesign concept for the Pakistan Railways mobile application aimed at improving usability, navigation, and visual consistency.",
  link: "https://www.figma.com/design/bCVtAOo31c6IVK7pKMvy1Q/Untitled?node-id=0-1&t=SzRieISathn4JUEl-1",
  image: "/PKRAPrototype.png",
  tech: ["Figma", "UI/UX Design"],
  category: "web",
},
{
  title: "Bus Management System – Prototype",
  description:
    "A complete UI/UX design for a bus management system focusing on dashboards, booking flows, and admin management interfaces.",
  link: "https://www.figma.com/design/iDOHJER8v2nTCLLZBKWybP/RouteMate?node-id=457-25&t=UHrsabwGDUas152K-1",
  image: "/RouteMate-Prototype.png",
  tech: ["Figma", "Prototyping", "UI/UX Design"],
  category: "web",
},
{
  title: "Clockify Homepage – Redesign",
  description:
    "A modern homepage redesign concept for Clockify with improved layout, visual hierarchy, and user engagement.",
  link: "https://www.figma.com/design/xDgcJWWYn6rZgWLRKLH0sI/Untitled?node-id=1-2&t=UHrsabwGDUas152K-1",
  image: "/Clockify.png",
  tech: ["Figma", "UI Redesign", "UX Principles"],
  category: "web",
},
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("web");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring modern web applications,
            UI/UX Designs, and academic projects.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative flex items-center bg-gray-800 rounded-full px-2 py-1 w-[460px]">
            {/* Sliding highlight */}
            <motion.div
              className="absolute top-1 bottom-1 left-1 rounded-full 
             bg-gradient-to-r from-purple-400 to-pink-400 shadow-md"
              style={{ width: "calc(50% - 4px)" }}
              animate={{ x: activeCategory === "web" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            />

            {/* Text area */}
            <div className="relative z-10 flex w-full">
              <span
                onClick={() => setActiveCategory("web")}
                className="w-1/2 text-center py-2 text-sm md:text-base font-medium 
                   text-white cursor-pointer select-none"
              >
                Web Development
              </span>

              <span
                onClick={() => setActiveCategory("semester")}
                className="w-1/2 text-center py-2 text-sm md:text-base font-medium 
                   text-white cursor-pointer select-none"
              >
                Semester Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
