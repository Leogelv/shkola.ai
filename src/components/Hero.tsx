'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import { Canvas } from '@react-three/fiber'
// import { ParticleField } from './effects/ParticleField'
// import AIBrain from './3d/AIBrain'
import type { HeroProps } from '@/types'

const Hero = ({ 
  title = "Получи AI-стратегию за 5 минут", 
  subtitle = "Наш сервис анализирует данные вашей компании и подсказывает, какие задачи можно автоматизировать с помощью AI уже сейчас.", 
  ctaText = "Провести диагностику" 
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const scrollToContact = () => {
    const contactSection = document.querySelector('section:last-child')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[90svh] sm:min-h-[100svh] flex items-center bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 px-4 sm:px-6 overflow-hidden pt-16 sm:pt-20"
    >
      
      {/* Фоновые элементы */}
      {/* <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      <div className="absolute inset-0 lg:block hidden">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80" />

      {/* Основной контент */}
      <div className="relative w-full max-w-7xl mx-auto">
      <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-max mx-auto -mt-4 sm:mt-0 lg:hidden px-4 py-2 rounded-full bg-primary-500/5 border border-primary-500/10 shadow-sharp"
            >
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium text-sm sm:text-base">
                Будущее уже здесь
              </span>
            </motion.div>
        <div className="pb-6 sm:pb-12 flex flex-col-reverse gap-6 sm:gap-4 lg:flex-row items-center justify-between lg:gap-12">
          {/* Левая колонка */}
          <motion.div className="w-full lg:w-[45%] space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left" style={{ y }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:inline-block px-4 py-2 rounded-full bg-primary-500/5 border border-primary-500/10 shadow-sharp mb-8"
            >
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium">
                Будущее уже здесь
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="!mt-0 pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl font-light leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            <motion.div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 pt-4">
              <motion.button 
                onClick={scrollToContact}
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-sm sm:text-base md:text-lg font-medium 
                         text-white hover:shadow-glow-lg transition-all relative overflow-hidden group whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{ctaText}</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.div 
                className="text-xs sm:text-sm text-gray-500 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Бесплатно • Без регистрации
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Правая колонка с 3D */}
          <div className="w-full lg:w-[55%] aspect-square max-h-[400px] sm:max-h-[500px] md:max-h-[600px] min-h-[200px] sm:min-h-[300px]">
            <motion.div 
              className="w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image src="/AlmaTechMan.svg" alt="AI Tech" width={600} height={600} className='h-full w-auto object-contain' />
              {/* <AIBrain /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
