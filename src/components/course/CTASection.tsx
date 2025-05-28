'use client'
import { motion } from 'framer-motion'

const CTASection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('section:last-child')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Готовы стать AI-инженером?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Запишитесь на курс и начните свой путь в AI!
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на курс
            </motion.button>
            
            <motion.button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться с нами
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection