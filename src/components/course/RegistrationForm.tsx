'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

interface RegistrationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Здесь будет отправка данных на сервер
      await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация отправки
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', email: '' })
      }, 2000)
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!mounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            zIndex: 99999
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 100000 }}
          >
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Записаться на курс
                  </h3>
                  <p className="text-gray-600">
                    Оставьте свои контакты и мы свяжемся с вами
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Отмена
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Отправка...' : 'Записаться'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
} 