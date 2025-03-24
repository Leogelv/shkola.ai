'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import type { MarketDataItem } from '@/types'
import Image from 'next/image'

const defaultData: MarketDataItem[] = [
  {
    id: 1,
    value: '85%',
    label: 'Рост эффективности бизнес-процессов',
    gradient: 'gradient-blue',
    icon: '/logos/1.svg'
  },
  {
    id: 2,
    value: '$4.4T',
    label: 'Вклад AI в мировую экономику к 2030 году составит $2.6-4.4 трлн ежегодно',
    gradient: 'gradient-green',
    icon: '/logos/2.svg'
  },
  {
    id: 3,
    value: '6x',
    label: 'Рост инвестиций в AI вырос в 6 раз за 2024 год',
    gradient: 'gradient-orange',
    icon: '/logos/3.svg'
  }
]

function AnimatedValue({ value }: { value: string }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true)
    }
  }, [inView, isAnimated])

  return (
    <span ref={ref} className="relative inline-block">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    </span>
  )
}

export function MarketData() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary-500/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     border border-primary-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium">
              Рыночные данные
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8
                     tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI: время действовать
          </motion.h2>
        </div>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ключевые показатели развития искусственного интеллекта
        </motion.p>

        <motion.div style={{ y }} className="grid md:grid-cols-3 gap-8">
          {defaultData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                       group hover:scale-105 transition-all duration-300 animate-float"
              style={{ '--animation-delay': `${index * 0.2}s` } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Декоративные элементы */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/30 to-secondary-500/30 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 
                           group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]" />

              <div className="relative mb-6 w-16 h-16">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <motion.div 
                className={`text-6xl lg:text-7xl font-bold ${item.gradient} bg-clip-text text-transparent mb-4
                         relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/20 after:to-transparent 
                         after:animate-pulse`}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.value}
              </motion.div>

              <p className="text-gray-700 font-light leading-relaxed text-lg">
                {item.label}
              </p>

              <div className={`absolute -bottom-1 left-0 right-0 h-1 ${item.gradient}
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-lg font-medium 
                         text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 
                         transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 mx-auto">
            <span className="relative z-10 whitespace-nowrap">Начать внедрение</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 
                       transition-opacity duration-300 group-hover:opacity-100"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketData
