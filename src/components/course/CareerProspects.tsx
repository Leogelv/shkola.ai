'use client'
import { motion } from 'framer-motion'

const stats = [
  {
    value: "$80-120K*",
    label: "Зарплата Junior AI Engineer",
    color: "from-green-500 to-emerald-500"
  },
  {
    value: "3.2x",
    label: "Спрос превышает предложение",
    color: "from-blue-500 to-cyan-500"
  },
  {
    value: "$47.1 млрд",
    label: "Рынок AI-агентов к 2030",
    color: "from-purple-500 to-pink-500"
  },
  {
    value: "10-18M ₸",
    label: "Зарплата в Казахстане",
    color: "from-orange-500 to-red-500"
  }
]

const CareerProspects = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Ваши карьерные перспективы
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              После курса вы сможете претендовать на роли Junior AI Engineer или AI Application Developer с зарплатой $80-120K в США (10-18M тенге в Казахстане). Спрос на специалистов превышает предложение в 3.2 раза, а рынок AI-агентов вырастет с $5.1 млрд в 2024 до $47.1 млрд к 2030.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
              <p className="text-yellow-200 text-sm">
                <span className="font-semibold">*</span> $80-120K применительно к международному рынку для выпускников из Казахстана
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl p-6 border border-primary-500/30"
            >
              <p className="text-xl font-semibold text-white mb-2">
                Начните свою карьеру в AI с нами!
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Зарплата $80-120K*</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Рост рынка до $47.1 млрд к 2030</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CareerProspects