import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function CourseFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Колонка с логотипом и информацией */}
          <div className="space-y-4 sm:space-y-6">
            <Link href="/">
              <div className="w-24 h-24 sm:w-32 sm:h-32">
                <Image 
                  src="/logos/logo.svg" 
                  alt="shkola.ai" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Профессиональное обучение AI-инженерии с персональным наставником и практическими проектами.
            </p>
          </div>

          {/* Колонка с навигацией по курсу */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">О курсе</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/ai_gen_course#about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  О курсе
                </Link>
              </li>
              <li>
                <Link href="/ai_gen_course#program" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Программа
                </Link>
              </li>
              <li>
                <Link href="/ai_gen_course#mentors" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Менторы
                </Link>
              </li>
              <li>
                <Link href="/ai_gen_course#testimonials" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка с контактами */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">Контакты</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  <a href="mailto:info@shkola.ai">info@shkola.ai</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  <a href="tel:+77771234567">+7 (777) 123-45-67</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Колонка с дополнительными ссылками */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">Дополнительно</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/old_lP_alma" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  AlmaTech (AI для бизнеса)
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Условия обучения
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="h-px bg-gray-800 mb-6 sm:mb-8"></div>

        {/* Нижняя часть футера */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 order-2 sm:order-1">
            <p className="text-xs sm:text-sm text-gray-500">
              © {currentYear} shkola.ai. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}