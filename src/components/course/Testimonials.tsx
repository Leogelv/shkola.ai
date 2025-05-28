'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Курс дал мне все, чтобы начать карьеру в AI. Мой MVP помог мне получить первую работу!",
    author: "Азамат",
    role: "Junior AI Engineer",
    avatar: "👨‍💼"
  },
  {
    text: "AI-наставник — это настоящая находка! Он помог мне разобраться в сложных темах и всегда был на связи.",
    author: "Айгерим", 
    role: "AI Application Developer",
    avatar: "👩‍💻"
  },
  {
    text: "Практический подход и поддержка менторов сделали обучение невероятно полезным.",
    author: "Ерлан",
    role: "Cognitive Architect", 
    avatar: "👨‍🎓"
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Что говорят наши выпускники
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sharp hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">— {testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials