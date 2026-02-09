"use client"
import { motion } from "framer-motion"

const certifications = [
  {
    id: 1,
    title: "Full Stack MERN Bootcamp",
    issuer: "GDGoC Bahria University, Lahore Campus",
    date: "Apr 2025",
    credentialId: "UC-e8458733-818f-4e45-8f5c-175dc340dad5",
    credentialUrl: "#",
    skills: ["MERN Stack", "Web Development", "React", "Node.js", "MongoDB", "Express"],
    image: "/webcamp.jpg",
  },
  {
    id: 2,
    title: "CSS, Bootstrap, JavaScript, and PHP Stack Complete Course",
    issuer: "Udemy",
    date: "Jan 2025",
    credentialId: "UC-bdc13b13-f8cc-451a-a80d-48d2491a860d",
    credentialUrl: "https://www.udemy.com/certificate/UC-bdc13b13-f8cc-451a-a80d-48d2491a860d/",
    skills: ["Web Development", "Front-End Development", "CSS", "Bootstrap", "JavaScript", "PHP"],
    image: "/udemy2.jpg",
  },
  {
    id: 3,
    title: "NextGen AI Bootcamp",
    issuer: "GDGoC Bahria University, Lahore Campus",
    date: "Sep 2025",
    credentialId: "UC-u678733-818f-4e45-8f5c-175dc340dad5",
    credentialUrl: "#",
    skills: ["Artificial Intelligence", "Machine Learning, Modern AI Tools", "LLMs", "Model training"],
    image: "/NextGenAI.jpg",
  },
  {
    id: 4,
    title: "Mastering HTML5 and CSS3 (Intermediate level)",
    issuer: "Udemy",
    date: "Jan 2025",
    credentialId: "UC-111d6698-2230-45c1-a3d6-405df2899266",
    credentialUrl: "https://www.udemy.com/certificate/UC-111d6698-2230-45c1-a3d6-405df28992b6/",
    skills: ["HTML5", "CSS Flexbox", "Responsive Design", "Web Development", "Animations"],
    image: "/htmlndcss.jpg",
  },
  {
    id: 5,
    title: "Professional Diploma in Business English and Communications",
    issuer: "Udemy",
    date: "Feb 2025",
    credentialId: "UC-c8398733-818f-4e45-8f5c-175dc340dad5",
    credentialUrl: "https://www.udemy.com/certificate/UC-c8398733-818f-4e45-8f5c-175dc340dad5/",
    skills: ["English Teaching", "Business English", "Professional Writing", "Communication"],
    image: "/english.jpg",
  },
  {
    id: 6,
    title: "Introduction to HTML",
    issuer: "Simplilearn",
    date: "Jul 2022",
    credentialId: "UC-7c8c00f2-7c8c-4c8c-8c8c-7c8c00f27c8c",
    credentialUrl: "#",
    skills: ["HTML", "HTML5", "Web Fundamentals", "Basic Web Development", "Structure of Web Pages"],
    image: "/html.jpg",
  },
  
]

function CertificationCard({ certification, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      }}
      className="group bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-400/40"
    >
      {/* Certificate Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-900">
        <img
          src={certification.image || "/placeholder.svg"}
          alt={certification.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {certification.title}
        </h3>

        {/* Issuer and Date */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-purple-300 font-medium text-sm">{certification.issuer}</p>
          <p className="text-gray-400 text-xs">{certification.date}</p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {certification.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Credential ID and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
          <p className="text-xs text-gray-500">ID: {certification.credentialId}</p>
          <motion.a
            href={certification.credentialUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            View Credential
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
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
            Certifications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials that demonstrate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
