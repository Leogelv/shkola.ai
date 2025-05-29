'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const mentors = [
  {
    name: "Леонид Гельвих",
    role: "Ведущий инструктор",
    experience: "AI automation agency cofounder, Cognitive Architect, Lead AI PM, преподаватель с опытом работы с более чем 1000 студентов",
    avatar: "/leonid_photo.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Teaching Assistant",
    role: "Живой наставник",
    experience: "Еженедельные Office Hours и персональная поддержка студентов",
    avatar: "👨‍🏫",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "AI-наставник",
    role: "Персонализированный AI-ассистент",
    experience: "Доступный 24/7, адаптирующий обучение под ваши нужды",
    avatar: "🤖",
    color: "from-purple-500 to-pink-500"
  }
]

const Mentors = () => {
  return (
    <section id="mentors" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Наши менторы
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 shadow-sharp hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${mentor.color} flex items-center justify-center mx-auto mb-6 overflow-hidden`}>
                  {mentor.avatar.startsWith('/') ? (
                    <Image 
                      src={mentor.avatar} 
                      alt={mentor.name} 
                      width={80} 
                      height={80} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">{mentor.avatar}</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                <div className="text-primary-500 font-medium mb-4">{mentor.role}</div>
                <p className="text-gray-600 leading-relaxed">{mentor.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mentors