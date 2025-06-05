'use client'
import { motion } from 'framer-motion'

const AboutCourse = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            О курсе
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sharp">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Курс «GenAI Engineer — Начальный уровень» готовит Junior GenAI-инженеров, способных решать реальные бизнес-задачи через автоматизацию процессов и создание AI-агентов. Вы научитесь разрабатывать функциональные AI-приложения с LangChain, интегрировать системы и создавать рабочие MVP для практического применения.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">104</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">академических часа</h3>
                <p className="text-gray-600">обучения</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">31</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">академический час</h3>
                <p className="text-gray-600">лайв-сессии</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">практики</h3>
                <p className="text-gray-600">с AI-наставником</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCourse
