'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Colorado',
    rating: 5,
    text: 'These pouches are a game-changer for my hiking trips! The coffee tastes amazing and they\'re so convenient. Never going back to instant coffee.',
    adventure: 'Mountain Hiker',
  },
  {
    name: 'Mike T.',
    location: 'California',
    rating: 5,
    text: 'Best cold brew I\'ve ever had. The pouches are perfect for my morning commute and camping trips. Super Duper lives up to the name!',
    adventure: 'Daily Commuter',
  },
  {
    name: 'Emma L.',
    location: 'Oregon',
    rating: 5,
    text: 'As someone who travels constantly, having quality coffee that fits in my bag is essential. Super Duper delivers every time.',
    adventure: 'Digital Nomad',
  },
  {
    name: 'Jake R.',
    location: 'Utah',
    rating: 5,
    text: 'The sustainability aspect sold me, but the taste kept me coming back. These pouches are perfect for my van life adventures.',
    adventure: 'Van Life Enthusiast',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-900 mb-4">
            Loved by{' '}
            <span className="text-coffee-600">Adventurers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our community of coffee lovers and adventure seekers are saying
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-coffee-50 to-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-coffee-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-coffee-500 text-coffee-500"
                  />
                ))}
              </div>
              <Quote className="text-coffee-300 mb-4" size={24} />
              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-coffee-200">
                <p className="font-semibold text-coffee-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs text-coffee-600 mt-1 font-medium">
                  {testimonial.adventure}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
