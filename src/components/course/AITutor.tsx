'use client'
import { motion } from 'framer-motion'

const features = [
  "Отслеживает ваш прогресс и выявляет слабые места",
  "Адаптирует материалы и задания под ваш уровень",
  "Отвечает на вопросы 24/7 с учетом контекста курса",
  "Напоминает о дедлайнах и помогает планировать учебу"
]

const AITutor = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Ваш персональный AI-наставник
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Каждый студент получает доступ к персонализированному AI-ассистенту, который:
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20"
            >
              <p className="text-lg font-medium text-gray-800 mb-2">
                С AI-наставником вы всегда будете на шаг впереди!
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-glow-lg transition-all">
                Узнать больше
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sharp">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Наставник</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Онлайн</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-gray-700">Привет! Я вижу, что ты изучаешь RAG-архитектуры. Хочешь, разберем на практическом примере?</p>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-4 ml-8">
                  <p className="text-white">Да, было бы здорово! У меня есть вопрос по векторным базам данных.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-gray-700">Отлично! Давай создадим мини-проект с Chroma DB. Это поможет тебе лучше понять концепцию.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AITutor