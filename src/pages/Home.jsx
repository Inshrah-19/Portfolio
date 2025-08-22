"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Hero3D from "../components/Hero3D"
import CanvasWrapper from "../components/CanvasWrapper"
import Interactive3DModel from "../components/Interactive3DModel"

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText1, setDisplayedText1] = useState("")
  const [displayedText2, setDisplayedText2] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentLine, setCurrentLine] = useState(1)

  const roles = [
    { line1: "Inshrah", line2: "" },
    { line1: "a Web", line2: "Developer" },
    { line1: "a UX/UI", line2: "Designer" },
    { line1: "a Frontend", line2: "Expert" },
    { line1: "a Creative", line2: "Coder" },
  ]

  useEffect(() => {
    const currentText1 = roles[currentRole].line1
    const currentText2 = roles[currentRole].line2
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && currentLine === 1) {
        // Typing first line
        if (displayedText1 === currentText1) {
          if (currentText2) {
            setCurrentLine(2)
          } else {
            // No second line, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setDisplayedText1(currentText1.substring(0, displayedText1.length + 1))
        }
      } else if (!isDeleting && currentLine === 2) {
        // Typing second line
        if (displayedText2 === currentText2) {
          // Finished typing both lines, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else {
          setDisplayedText2(currentText2.substring(0, displayedText2.length + 1))
        }
      } else if (isDeleting) {
        // Deleting
        if (currentLine === 2 && displayedText2.length > 0) {
          setDisplayedText2(currentText2.substring(0, displayedText2.length - 1))
        } else if (displayedText1.length > 0) {
          if (currentLine === 2) setCurrentLine(1)
          setDisplayedText1(currentText1.substring(0, displayedText1.length - 1))
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentLine(1)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText1, displayedText2, isDeleting, currentRole, currentLine, roles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hidden md:block absolute inset-0 opacity-40">
        <CanvasWrapper>
          <Hero3D />
        </CanvasWrapper>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left lg:col-span-2"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Hello, I am
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.3]">
              <div className="flex items-start min-h-[1.3em]">
                <span>{displayedText1}</span>
                {currentLine === 1 && <span className="animate-pulse text-cyan-400 ml-1">|</span>}
              </div>
              {roles[currentRole].line2 && (
                <div className="flex items-start min-h-[1.3em]">
                  <span>{displayedText2}</span>
                  {currentLine === 2 && <span className="animate-pulse text-cyan-400 ml-1">|</span>}
                </div>
              )}
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed"
          >
            Crafting unique web experiences with passion for design and development. Explore my projects, skills, and
            testimonials, and let's create magic together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/resume.pdf"
                link.download = "Inshrah_Resume.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block h-screen w-full relative lg:col-span-3 translate-x-8 -mr-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
          <div className="w-full h-full scale-110">
            <Interactive3DModel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
