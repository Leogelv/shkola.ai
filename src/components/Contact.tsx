'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ContactProps } from '@/types'

export function Contact({ 
  email = 'info@almatech.ai',
  phone = '+7 (495) 123-45-67',
  address = 'Москва, ул. Тверская, 1'
}: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

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
              Связаться с нами
            </span>
          </motion.div>

          <motion.h2 
            className="pb-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent 
                     tracking-tight max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Готовы обсудить ваш проект
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Оставьте заявку или свяжитесь с нами любым удобным способом
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Контактная информация */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl gradient-blue flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${email}`} className="text-gray-600 hover:text-primary-500 transition-colors">
                  {email}
                </a>
              </div>
            </div>

            {/* Телефон */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl gradient-purple flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
                <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-gray-600 hover:text-primary-500 transition-colors">
                  {phone}
                </a>
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl gradient-orange flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Имя */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 
                         focus:ring-primary-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                placeholder="Иван Иванов"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 
                         focus:ring-primary-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                placeholder="ivan@example.com"
                required
              />
            </div>

            {/* Сообщение */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 
                         focus:ring-primary-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                placeholder="Расскажите о вашем проекте..."
                required
              />
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 
                       text-white font-medium shadow-lg shadow-primary-500/20 
                       hover:shadow-xl hover:shadow-primary-500/30 
                       active:shadow-md active:scale-[0.98]
                       transition-all duration-200
                       relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Отправить
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 
                           transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
