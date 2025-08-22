"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    rating: 5,
    quote:
      "Exceptional work! The portfolio website exceeded all expectations with stunning animations and flawless responsive design.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    rating: 5,
    quote:
      "Outstanding developer with incredible attention to detail. The 3D animations and smooth transitions are absolutely phenomenal.",
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    rating: 5,
    quote:
      "Perfect blend of creativity and technical expertise. The lavender theme and modern animations create a truly memorable experience.",
    avatar: "/creative-woman-avatar.png",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "WebSolutions",
    rating: 5,
    quote:
      "Clean, efficient code with beautiful UI/UX. The mobile responsiveness and performance optimization are top-notch.",
    avatar: "/developer-man-avatar.png",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Manager",
    company: "Digital Innovations",
    rating: 5,
    quote:
      "Incredible portfolio that perfectly showcases technical skills. The testimonials section itself is a work of art!",
    avatar: "/marketing-woman-avatar.png",
  },
  {
    name: "Alex Rivera",
    role: "Freelance Client",
    company: "E-commerce Store",
    rating: 5,
    quote:
      "Transformed our vision into reality with stunning results. Professional, creative, and delivers beyond expectations every time.",
    avatar: "/business-person-avatar.png",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.3 }}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      }}
      className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300"
    >
      <StarRating rating={testimonial.rating} />

      <blockquote className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</blockquote>

      <div className="flex items-center gap-4">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-purple-400"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-purple-300 text-sm">{testimonial.role}</p>
          <p className="text-gray-400 text-xs">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
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
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients and collaborators say about working with me.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
