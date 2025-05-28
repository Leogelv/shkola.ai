'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import logoImage from '../../public/logo.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Колонка с логотипом и информацией */}
          <div className="space-y-4 sm:space-y-6">
            <Link href="/old_lP_alma">
              <div className="w-24 h-24 sm:w-32 sm:h-32">
                <Image 
                  src="/logos/logo.svg" 
                  alt="AlmaTech" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Помогаем бизнесу внедрять искусственный интеллект для оптимизации процессов и роста эффективности.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/almatech" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.84.42z"></path>
                </svg>
              </a>
              <a href="https://wa.me/77718999999" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Колонка с навигацией */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">Навигация</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('challenges')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Вызовы бизнеса
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Наши решения
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Процесс внедрения
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('marketData')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Рынок AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Частые вопросы
                </button>
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
                  <a href="mailto:info@alma-tech.kz">info@alma-tech.kz</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  <a href="tel:+77718999999">+7 771 899 99 99</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400">
                  ул. Достык, 5-125, район Есиль, Астана, Z05H9M1, Казахстан
                </span>
              </li>
            </ul>
          </div>

          {/* Колонка с подпиской */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">Будьте в курсе</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Подпишитесь на рассылку о новостях и обновлениях в мире искусственного интеллекта
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 bg-gray-800 text-gray-200 rounded-lg sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 transition-colors text-white px-4 py-2 rounded-lg sm:rounded-l-none text-sm font-medium"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        {/* Разделитель */}
        <div className="h-px bg-gray-800 mb-6 sm:mb-8"></div>

        {/* Нижняя часть футера */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 order-2 sm:order-1">
            <p className="text-xs sm:text-sm text-gray-500">
              © {currentYear} AlmaTech. Все права защищены.
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-0 order-1 sm:order-2">
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 