'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
// import logoImage from '../../public/logo.svg'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    setIsMobileMenuOpen(false)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/old_lP_alma" className="flex items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden">
                <Image 
                  src="/logos/logo.svg" 
                  alt="AlmaTech" 
                  width={96} 
                  height={96} 
                  className="w-full h-[120%] object-contain -mt-[10%]"
                />
              </div>
            </Link>
          </div>

          {/* Десктоп навигация */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('challenges')}
              className="text-gray-600 hover:text-primary-500 transition-colors text-sm lg:text-base font-medium"
            >
              Вызовы
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-primary-500 transition-colors text-sm lg:text-base font-medium"
            >
              Решения
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-600 hover:text-primary-500 transition-colors text-sm lg:text-base font-medium"
            >
              Процесс
            </button>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary-500 transition-colors text-sm lg:text-base font-medium"
            >
              Курс AI Engineer
            </Link>
          </div>

          {/* Кнопка связи */}
          <div className="hidden sm:block">
            <button
              onClick={scrollToContact}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 
                     text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/30 
                     transition-all duration-300 text-sm sm:text-base"
            >
              Связаться
            </button>
          </div>

          {/* Мобильное меню кнопка */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={scrollToContact}
              className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 
                     text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/30 
                     transition-all duration-300 sm:hidden"
            >
              Связаться
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 space-y-1">
              <button
                onClick={() => scrollToSection('challenges')}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary-500 transition-colors font-medium"
              >
                Вызовы
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary-500 transition-colors font-medium"
              >
                Решения
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary-500 transition-colors font-medium"
              >
                Процесс
              </button>
              <Link
                href="/"
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-primary-500 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Курс AI Engineer
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left px-3 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                         text-gray-900 rounded-lg font-medium"
                >
                  Связаться
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 