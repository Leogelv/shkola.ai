'use client'

import { motion } from 'framer-motion'
import type { AdvantagesProps, Advantage } from '@/types'

const defaultAdvantages: Advantage[] = [
  {
    id: 1,
    title: 'Отделяем реальную пользу от хайпа',
    description: 'В сфере искусственного интеллекта много шума и завышенных ожиданий. Мы помогаем сосредоточиться на реальных бизнес-задачах, отделяя подлинную ценность от хайпа, и используем data-driven подход.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Уникальная методология',
    description: 'Наша методика опирается на анализ должностей и типовых обязанностей: более 12 000 профессий и 150 000 задач. Это позволяет быстро определить, какие именно процессы в компании принесут максимальный эффект при внедрении.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
]

const stats = [
  { id: 1, value: '12000+', label: 'профессий в базе' },
  { id: 2, value: '150000+', label: 'типовых задач' },
  { id: 3, value: '300%', label: 'средний рост эффективности' }
]

export function Advantages({ advantages = defaultAdvantages }: AdvantagesProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-500/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Преимущества */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 
                               flex items-center justify-center text-white shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Статистика */}
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto opacity-30 blur-lg filter"
                   style={{
                     background: 'radial-gradient(circle at 50% 50%, var(--tw-gradient-from), transparent 70%)'
                   }} />
            </div>

            <div className="relative grid grid-cols-2 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className={`${index === 2 ? 'col-span-2' : ''} p-6 sm:p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 
                           border border-gray-100 text-center group hover:scale-105 transition-transform duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 
                               bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
