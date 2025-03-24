'use client'

import { motion } from 'framer-motion'
import type { SolutionsProps } from '@/types'

const defaultSolutions = [
  {
    id: 1,
    title: 'Закупочный ассистент',
    description: [
      'Анализ предложений',
      'Автоматизация переписки',
      'Мониторинг цен'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'gradient-blue'
  },
  {
    id: 2,
    title: 'HR-ассистент',
    description: [
      'Сортировка резюме',
      'Чат-бот для сотрудников',
      'Аналитика текучки'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'gradient-purple'
  },
  {
    id: 3,
    title: 'Ассистент контроля',
    description: [
      'Анализ записей',
      'Выявление отклонений',
      'Контроль качества'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    gradient: 'gradient-orange'
  },
  {
    id: 4,
    title: 'Диспетчерский ассистент',
    description: [
      'Работа с заявками',
      'Распределение задач',
      'Контроль исполнения'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'gradient-green'
  }
]

export function Solutions({ solutions = defaultSolutions }: SolutionsProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-500/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div 
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     border border-primary-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium">
              Готовые решения
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent 
                     tracking-tight max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-ассистенты для вашего бизнеса
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Готовые решения, которые можно внедрить за считанные недели
          </motion.p>
        </div>

        {/* Карточки решений */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                       group hover:scale-105 transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Декоративные элементы */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/30 to-secondary-500/30 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 
                           group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]" />

              <div className={`w-16 h-16 rounded-2xl ${solution.gradient}
                           flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/20
                           group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all
                           relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/20 after:to-transparent 
                           after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300 after:rounded-2xl`}>
                {solution.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {solution.title}
              </h3>

              <ul className="space-y-3 mb-6 flex-grow">
                {solution.description.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 font-light">
                    <svg className="w-5 h-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                         text-gray-900 font-medium relative overflow-hidden group/btn whitespace-nowrap
                         hover:from-primary-500 hover:to-secondary-500 hover:text-white
                         transition-all duration-300 mt-auto
                         flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Подробнее</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
