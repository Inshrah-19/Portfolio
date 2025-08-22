"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full"
      />
    </div>
  )
}

export default function CanvasWrapper({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </div>
  )
}
