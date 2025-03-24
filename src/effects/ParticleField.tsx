'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, Point } from '@react-three/drei'
import { Color } from 'three'

export function ParticleField() {
  const ref = useRef<any>()
  
  const count = 1000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05
      ref.current.rotation.y += delta * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <pointsMaterial
        size={0.05}
        color={new Color('#6366f1')}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </Points>
  )
} 