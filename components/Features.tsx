'use client'

import { motion } from 'framer-motion'
import { Package, Coffee, Mountain } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'In Your Pocket, In Your Pack',
    description: 'These cold brew coffee adventure pouches are made to go anywhere. Our mission is for everybody to have access to Super Duper good coffee at all times.',
  },
  {
    icon: Coffee,
    title: 'Fresh Roasted, Shipped to Order',
    description: 'Fresh roasted coffee beans shipped directly to your door. Check out our current roasts and experience the difference quality makes.',
  },
  {
    icon: Mountain,
    title: 'No Bulk. No Brewing. No Mess.',
    description: 'All Adventure. Super Duper Good Cold Brew Coffee. Never hit the trail without Super Duper Coffee.',
  },
]

export default function Features() {
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
            What makes Super Duper Coffee so...{' '}
            <span className="text-coffee-600">Super Duper?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-6">
                  <Icon className="text-coffee-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
