'use client'

import { motion } from 'framer-motion'
import type { Challenge } from '@/types'

const defaultChallenges: Challenge[] = [
  {
    id: 1,
    title: 'Поиск и анализ данных',
    description: 'Автоматизация поиска и анализа больших объемов данных для принятия решений',
    gradient: 'from-primary-500 to-secondary-500',
    pattern: 'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Не знаете с чего начать',
    description: 'Предоставляем четкую дорожную карту внедрения AI в ваш бизнес',
    gradient: 'from-primary-500 to-secondary-500',
    pattern: 'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9 20L3 12L9 4M15 4L21 12L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Нет четкого плана внедрения',
    description: 'Структурированный подход к трансформации бизнес-процессов',
    gradient: 'from-primary-500 to-secondary-500',
    pattern: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
]

export function Challenges({ challenges = defaultChallenges }: { challenges?: Challenge[] }) {
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      {/* Блобный градиентный фон */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-tl from-secondary-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <motion.div 
            className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     border border-primary-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium text-sm sm:text-base">
              AI-трансформация
            </span>
          </motion.div>
          
          <motion.h2 
            className="pb-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6
                     tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Почему нужна AI-стратегия
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Структурированный подход к внедрению искусственного интеллекта в ваш бизнес
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 
                       border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Фоновый паттерн */}
              <div 
                className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundImage: challenge.pattern }}
              />
              
              {/* Иконка */}
              <div className={`relative mb-4 sm:mb-6 p-2 sm:p-3 rounded-xl bg-gradient-to-r ${challenge.gradient} 
                           text-white w-fit transition-transform duration-300 group-hover:scale-110`}>
                {challenge.icon}
              </div>

              {/* Контент */}
              <h3 className="relative text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                {challenge.title}
              </h3>
              <p className="relative text-sm sm:text-base text-gray-600 font-light">
                {challenge.description}
              </p>

              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-gray-900/[0.01] to-gray-900/[0.05] rounded-bl-[100px]" />
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-gray-900/[0.01] to-gray-900/[0.05] rounded-tr-[80px]" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            onClick={scrollToContact}
            className="group px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-sm sm:text-base md:text-lg font-medium 
                         text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 
                         transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Начать внедрение
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
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
