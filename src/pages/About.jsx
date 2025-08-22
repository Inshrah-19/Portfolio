"use client"
import { motion } from "framer-motion"

export default function About() {
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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hi! I'm Inshrah, a passionate web developer with 3+ years of experience creating digital experiences
                that users love. My journey started during college when I built my first website and fell in love with
                the process of turning ideas into interactive realities.
              </p>
              <p className="text-lg">
                I specialize in frontend development with React and modern JavaScript, but I also enjoy working with
                backend technologies. What drives me is the challenge of solving complex problems while maintaining
                clean, efficient code that performs beautifully across all devices.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                or experimenting with the latest web technologies. I believe in continuous learning and staying updated
                with the ever-evolving tech landscape.
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
              <div className="relative bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Inshrah - Web Developer"
                  className="w-full rounded-xl shadow-2xl"
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
                <h4 className="text-2xl font-bold text-purple-400">50+</h4>
                <p className="text-gray-300 text-sm">Projects Completed</p>
              </div>
              <div className="bg-pink-600/10 border border-pink-500/20 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-pink-400">3+</h4>
                <p className="text-gray-300 text-sm">Years Experience</p>
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
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Open Source</h4>
              <p className="text-gray-400 text-sm">Contributing to the developer community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
