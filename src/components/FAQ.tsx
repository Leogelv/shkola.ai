'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FAQProps } from '@/types'

const defaultItems = [
  {
    id: 1,
    question: 'Как быстро можно внедрить AI-ассистента?',
    answer: 'Внедрение занимает от 2 до 6 недель в зависимости от сложности задач и готовности инфраструктуры. Мы предоставляем пошаговый план и поддержку на всех этапах.'
  },
  {
    id: 2,
    question: 'Какие технические требования для внедрения?',
    answer: 'Минимальные требования включают доступ к интернету и современный браузер. Для более сложных решений может потребоваться API-интеграция с вашими системами.'
  },
  {
    id: 3,
    question: 'Как обеспечивается безопасность данных?',
    answer: 'Мы используем шифрование, безопасные протоколы передачи данных и изолированные среды для каждого клиента. Все данные хранятся на серверах в РФ.'
  },
  {
    id: 4,
    question: 'Можно ли настроить ассистента под наши процессы?',
    answer: 'Да, каждое решение адаптируется под ваши бизнес-процессы, терминологию и особенности работы. Мы проводим обучение на ваших данных.'
  },
  {
    id: 5,
    question: 'Какая поддержка предоставляется после внедрения?',
    answer: 'Мы обеспечиваем техническую поддержку 24/7, регулярные обновления и дообучение системы. При необходимости проводим дополнительные тренинги.'
  }
]

export function FAQ({ items = defaultItems }: FAQProps) {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
              Часто задаваемые вопросы
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
            Ответы на популярные вопросы
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Всё что нужно знать о внедрении AI-ассистентов
          </motion.p>
        </div>

        {/* Аккордеон с вопросами */}
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full p-6 sm:p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                         text-left transition-all duration-300 relative
                         group hover:scale-[1.02]"
              >
                {/* Декоративные элементы */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/30 to-secondary-500/30 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 
                             group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]" />

                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-500 transition-transform duration-300 flex-shrink-0
                            ${activeId === item.id ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-base sm:text-lg">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
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
            <span className="relative z-10">Задать свой вопрос</span>
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
