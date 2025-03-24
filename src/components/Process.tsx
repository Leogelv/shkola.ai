'use client'

import { motion } from 'framer-motion'
import type { ProcessProps } from '@/types'

const defaultSteps = [
  {
    id: 1,
    title: 'Анализ задач',
    description: 'Изучаем ваши бизнес-процессы и определяем, где AI может принести максимальную пользу',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Разработка решения',
    description: 'Создаем и обучаем AI-ассистента специально под ваши задачи и особенности бизнеса',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Внедрение',
    description: 'Интегрируем решение в ваши процессы, обучаем сотрудников и обеспечиваем поддержку',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export function Process({ steps = defaultSteps }: ProcessProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-500/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />
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
              Как мы работаем
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
            Процесс внедрения AI
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            От анализа задач до полноценного внедрения за несколько недель
          </motion.p>
        </div>

        {/* Шаги */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                       group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Декоративные элементы */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/30 to-secondary-500/30 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 
                           group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500
                           flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/20
                           group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all
                           relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/20 after:to-transparent 
                           after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300 after:rounded-2xl">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

              {/* Линия соединения */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary-500/30 to-secondary-500/30" />
              )}

              {/* Номер шага */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 
                           flex items-center justify-center text-white text-sm font-medium
                           shadow-lg shadow-primary-500/20 group-hover:shadow-xl group-hover:shadow-primary-500/30 
                           transition-all">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     text-gray-900 font-medium relative overflow-hidden group/btn
                     hover:from-primary-500 hover:to-secondary-500 hover:text-white
                     transition-all duration-300"
          >
            <span className="relative z-10">Начать внедрение</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
