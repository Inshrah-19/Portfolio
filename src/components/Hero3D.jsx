"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Box, Torus } from "@react-three/drei"
import { motion } from "framer-motion"
import { useRef } from "react"

function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.3} speed={1.5} roughness={0} />
      </Sphere>
    </Float>
  )
}

function RotatingShapes() {
  const boxRef = useRef()
  const torusRef = useRef()
  const sphereRef = useRef()

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.02
      boxRef.current.rotation.y += 0.02
      boxRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01
      torusRef.current.rotation.z += 0.02
      torusRef.current.position.x = 4 + Math.sin(state.clock.elapsedTime * 0.3) * 0.5
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.8
      sphereRef.current.rotation.y += 0.03
      sphereRef.current.position.x = -3 + Math.cos(state.clock.elapsedTime * 0.4) * 0.4
    }
  })

  return (
    <>
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[-4, 2, -2]}>
        <meshStandardMaterial color="#ec4899" wireframe />
      </Box>

      <Torus ref={torusRef} args={[0.5, 0.2, 16, 100]} position={[4, -1, -1]}>
        <meshStandardMaterial color="#06b6d4" />
      </Torus>

      <Sphere ref={sphereRef} args={[0.4, 32, 32]} position={[-3, -2, 1]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
    </>
  )
}

function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <Float key={i} speed={0.5 + Math.random()} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        args={[0.02, 8, 8]}
        position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}
      >
        <meshStandardMaterial color="#a855f7" />
      </Sphere>
    </Float>
  ))
  return <>{particles}</>
}

export default function Hero3D() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 -z-10"
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <AnimatedSphere />
        <RotatingShapes />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </motion.div>
  )
}
