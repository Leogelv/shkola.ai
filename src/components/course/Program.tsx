'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const modules = [
  /*{
    title: "Starter Bootcamp",
    weeks: "Неделя 0",
    description: "Вводный модуль: настройка рабочего окружения, основы программирования и знакомство с AI-инструментами.",
    project: "Подготовка к основному курсу",
    color: "from-gray-500 to-slate-500"
  },*/
  {
    title: "AI-инженерия с современными инструментами",
    weeks: "Недели 1-4",
    description: "Введение в AI-инженерию, настройка AI-assisted workflow, основы Python и prompt engineering.",
    project: "AI-чат-бот с интеграцией",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Agents",
    weeks: "Недели 5-8", 
    description: "Основы AI-агентов, работа с CrewAI, создание мультиагентных систем.",
    project: "Система для автоматизации бизнес-процесса",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Production RAG и векторные базы данных",
    weeks: "Недели 9-12",
    description: "RAG-архитектуры, векторный поиск, hybrid search.",
    project: "Enterprise RAG-система с A/B тестированием",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Локальные модели с Ollama", 
    weeks: "Недели 13-16",
    description: "Работа с локальными моделями, интеграция и оптимизация.",
    project: "Локальный AI-ассистент",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Мониторинг и deployment",
    weeks: "Недели 17-20",
    description: "Мониторинг AI, deployment на Vercel, контейнеризация.",
    project: "Deployed AI-сервис с логированием",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Capstone MVP проект",
    weeks: "Недели 21-26", 
    description: "Создание полноценного AI-приложения с Supabase, CrewAI и React.",
    project: "Рабочий MVP (например, customer support bot)",
    color: "from-pink-500 to-rose-500"
  }
]

const Program = () => {
  const [activeModule, setActiveModule] = useState(0)

  return (
    <section id="program" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Программа обучения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Основная программа - 26 недель.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sharp hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveModule(index)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-2">{module.weeks}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Проект:</div>
                    <div className="text-sm text-gray-600">{module.project}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/Syllabus_ShkolaAI.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-glow-lg transition-all"
          >
            Посмотреть полную программу
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Program
