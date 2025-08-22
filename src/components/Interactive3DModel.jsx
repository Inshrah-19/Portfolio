"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"

function GeometricRobot({ mousePosition }) {
  const robotRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + mousePosition.x * 2
      robotRef.current.position.x = mousePosition.x * 3
      robotRef.current.position.y = mousePosition.y * 2

      // Gentle floating animation
      robotRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.5
    }
  })

  return (
    <group ref={robotRef} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      {/* Robot Head */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color={hovered ? "#00ffff" : "#4a90e2"}
          emissive={hovered ? "#00ffff" : "#4a90e2"}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Robot Eyes */}
      <mesh position={[-0.3, 2.2, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[0.3, 2.2, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1.5} />
      </mesh>

      {/* Robot Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.8, 2, 1]} />
        <meshStandardMaterial
          color="#5a6c7d"
          emissive="#5a6c7d"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Chest Panel */}
      <mesh position={[0, 0.8, 0.51]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.4} metalness={0.7} />
      </mesh>

      {/* Robot Arms */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-1.2, 0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5]} />
          <meshStandardMaterial color="#7b8794" emissive="#7b8794" emissiveIntensity={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[1.2, 0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5]} />
          <meshStandardMaterial color="#7b8794" emissive="#7b8794" emissiveIntensity={0.2} metalness={0.8} />
        </mesh>
      </Float>

      {/* Robot Hands */}
      <mesh position={[-1.2, -0.3, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[1.2, -0.3, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.3} metalness={0.7} />
      </mesh>

      {/* Robot Legs */}
      <mesh position={[-0.4, -1.2, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1.5]} />
        <meshStandardMaterial color="#5a6c7d" emissive="#5a6c7d" emissiveIntensity={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0.4, -1.2, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1.5]} />
        <meshStandardMaterial color="#5a6c7d" emissive="#5a6c7d" emissiveIntensity={0.2} metalness={0.9} />
      </mesh>

      {/* Robot Feet */}
      <mesh position={[-0.4, -2.1, 0.2]}>
        <boxGeometry args={[0.4, 0.2, 0.8]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0.4, -2.1, 0.2]}>
        <boxGeometry args={[0.4, 0.2, 0.8]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.3} metalness={0.7} />
      </mesh>
    </group>
  )
}

function FloatingShapes({ mousePosition }) {
  const shapesRef = useRef()

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.rotation.y = state.clock.elapsedTime * 0.2
      shapesRef.current.position.x = mousePosition.x * 1.5
      shapesRef.current.position.y = mousePosition.y * 1.5
    }
  })

  return (
    <group ref={shapesRef}>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-4, 2, 1]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.2}>
        <mesh position={[4, -1, -1]}>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#ff6b35"
            emissive="#ff6b35"
            emissiveIntensity={0.4}
            metalness={0.7}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={3} floatIntensity={0.8}>
        <mesh position={[3, 3, 2]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#4a90e2" emissive="#4a90e2" emissiveIntensity={0.6} metalness={0.9} wireframe />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-3, -2, 0]}>
          <icosahedronGeometry args={[0.5]} />
          <MeshDistortMaterial
            color="#ff6b35"
            emissive="#ff6b35"
            emissiveIntensity={0.3}
            distort={0.3}
            speed={2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  )
}

function GlowingParticles({ mousePosition }) {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        const time = state.clock.elapsedTime
        child.position.x += Math.sin(time * 0.5 + i) * 0.02
        child.position.y += Math.cos(time * 0.3 + i) * 0.02
        child.position.z += Math.sin(time * 0.7 + i) * 0.02

        if (child.position.length() > 8) {
          child.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6)
        }
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }, (_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff6b35" : "#4a90e2"}
            emissive={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff6b35" : "#4a90e2"}
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Interactive3DModel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="w-full h-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1.5} />
        <pointLight position={[0, 10, 0]} color="#ff6b35" intensity={1.2} />

        <GeometricRobot mousePosition={mousePosition} />
        <FloatingShapes mousePosition={mousePosition} />
        <GlowingParticles mousePosition={mousePosition} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
