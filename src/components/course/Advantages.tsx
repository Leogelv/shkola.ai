'use client'
import { motion } from 'framer-motion'

const advantages = [
  {
    title: "Персональный AI-наставник 24/7",
    description: "Поддержка, адаптация материалов и помощь в любое время.",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Живой Teaching Assistant",
    description: "Еженедельные Office Hours с опытным TA для разбора сложных тем.",
    icon: "👨‍🏫",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "70% практики",
    description: "Большая часть курса — это реальные проекты под руководством AI-наставника.",
    icon: "⚡",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Современные инструменты",
    description: "LangChain, CrewAI, Supabase, Ollama и другие технологии, востребованные на рынке.",
    icon: "🛠️",
    gradient: "from-orange-500 to-red-500"
  }
]

const Advantages = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Почему выбирают наш курс
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 shadow-sharp hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{advantage.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages