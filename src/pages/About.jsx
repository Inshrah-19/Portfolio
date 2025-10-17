"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 30,
            rotate: mousePosition.x * 10,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * 40,
            rotate: mousePosition.y * -15,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 25 }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * -20,
            rotate: mousePosition.x * 20,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 35 }}
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-md"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg text-justify">
                Hi! I'm Inshrah, a creative web developer who transforms ideas into stunning digital realities. With
                over 3 years of experience, I've mastered the art of blending functionality with beautiful design to
                create web experiences that not only look amazing but perform flawlessly.
              </p>
              <p className="text-lg text-justify">
                My expertise spans across modern frontend technologies like React, Next.js, and TypeScript, combined
                with a keen eye for UI/UX design. I believe that great code should be as elegant as the interfaces it
                powers, which is why I focus on writing clean, maintainable, and scalable solutions.
              </p>
              <p className="text-lg text-justify">
                Beyond coding, I’m passionate about staying at the forefront of web technology trends, continuously learning, 
                and maintaining consistency in every project I take on. I believe steady improvement and attention to detail 
                lead to extraordinary results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 overflow-hidden">
                <div className="space-y-4 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-purple-400"
                  >
                    <span className="text-gray-500">const</span> <span className="text-cyan-400">developer</span> ={" "}
                    {"{"}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pl-4 text-gray-300"
                  >
                    name: <span className="text-green-400">"Inshrah"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="pl-4 text-gray-300"
                  >
                    skills: [<span className="text-yellow-400">"React"</span>,{" "}
                    <span className="text-yellow-400">"Tailwind CSS"</span>,{" "}
                    <span className="text-yellow-400">"JavaScript"</span>],
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="pl-4 text-gray-300"
                  >
                    passion: <span className="text-green-400">"Creating Amazing UX"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="pl-4 text-gray-300"
                  >
                    strong tea: <span className="text-orange-400">true</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="text-purple-400"
                  >
                    {"}"}
                  </motion.div>
                </div>

                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-400/50 rounded-lg"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-purple-400">10+</h4>
                <p className="text-gray-300 text-sm">Projects Completed</p>
              </div>
              <div className="bg-pink-600/10 border border-pink-500/20 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-400">2+</h4>
                <p className="text-gray-300 text-sm">Years of Coding</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Beyond Coding</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Design</h4>
              <p className="text-gray-400 text-sm">Exploring UI/UX trends and creating beautiful interfaces</p>
            </div>
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Learning</h4>
              <p className="text-gray-400 text-sm">Always curious about new technologies and frameworks</p>
            </div>
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Consistency</h4>
              <p className="text-gray-400 text-sm">Staying focused on improvement and attention to detail in every project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
