'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ContactProps } from '@/types'

export function Contact({ 
  email = 'info@alma-tech.kz',
  phone = '+7 771 899 99 99',
  address = 'ул. Достык, 5-125, район Есиль\nАстана, Z05H9M1\nКазахстан'
}: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('https://n8n2.supashkola.ru/webhook/almatech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Спасибо! Ваше сообщение отправлено.' })
        setFormState({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ success: false, message: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.' })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-500/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <motion.div 
            className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     border border-primary-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium text-sm sm:text-base">
              Связаться с нами
            </span>
          </motion.div>

          <motion.h2 
            className="pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent 
                     tracking-tight max-w-2xl mx-auto mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Готовы обсудить ваш проект
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Оставьте заявку или свяжитесь с нами любым удобным способом
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Контактная информация */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl gradient-modern flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
                <a href={`mailto:${email}`} className="text-sm sm:text-base text-gray-600 hover:text-primary-500 transition-colors">
                  {email}
                </a>
              </div>
            </div>

            {/* Телефон */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl gradient-modern flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Телефон</h3>
                <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-sm sm:text-base text-gray-600 hover:text-primary-500 transition-colors">
                  {phone}
                </a>
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl gradient-modern flex items-center justify-center text-white 
                           shadow-lg shadow-primary-500/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Адрес</h3>
                <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{address}</p>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            className="relative z-10 rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/80 shadow-2xl shadow-primary-500/10 border border-white/50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Декоративные элементы */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-transparent -z-10" />
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-full blur-2xl" />

            {submitStatus && (
              <div className={`mb-6 rounded-xl p-4 ${submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Имя */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Ваше имя
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 
                          focus:ring-primary-500/20 transition-all duration-200 bg-white text-gray-900 shadow-sm font-medium placeholder:text-gray-400"
                    placeholder="Абай Кунаев"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center pointer-events-none">
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 
                          focus:ring-primary-500/20 transition-all duration-200 bg-white text-gray-900 shadow-sm font-medium placeholder:text-gray-400"
                    placeholder="abay@example.com"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center pointer-events-none">
                  </div>
                </div>
              </div>

              {/* Сообщение */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Сообщение
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 
                          focus:ring-primary-500/20 transition-all duration-200 bg-white text-gray-900 shadow-sm font-medium placeholder:text-gray-400 resize-none"
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3.5 flex items-start pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-12 flex items-start pt-3.5 justify-center pointer-events-none">
                  </div>
                </div>
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 
                        text-white font-medium shadow-lg shadow-primary-500/20 
                        hover:shadow-xl hover:shadow-primary-500/30 
                        active:shadow-md active:scale-[0.98]
                        transition-all duration-200
                        relative overflow-hidden group
                        disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить
                      <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 
                             transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
