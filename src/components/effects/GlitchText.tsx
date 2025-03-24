'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const glitchInterval = setInterval(() => {
      const glitchText = text.split('').map(char => {
        if (Math.random() < 0.1) {
          return String.fromCharCode(33 + Math.floor(Math.random() * 94))
        }
        return char
      }).join('')

      container.setAttribute('data-text', glitchText)
    }, 50)

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-text={text}
    >
      {text}
    </motion.div>
  )
} 