'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Package as PackageIcon, Award } from 'lucide-react'
import Link from 'next/link'

const sustainabilityFeatures = [
  {
    icon: Recycle,
    title: 'Sustainable Packaging',
    description: 'Less space, less weight. Super Duper recyclable pouches have a smaller carbon footprint than both cans and bottles. They are made of less material overall, plus they take up less space and weight in transport and storage.',
    stat: 'Every box of pouches is the equivalent of a pallet of cans or bottles shipped.',
  },
  {
    icon: Leaf,
    title: '1% For The Planet',
    description: 'We are a proud member of 1% For The Planet, a member-based nonprofit organization where businesses all over the world commit to donating 1% of their annual sales — not profit… sales! — to environmental nonprofit organizations.',
    link: 'https://www.onepercentfortheplanet.org',
  },
  {
    icon: PackageIcon,
    title: 'Superior Quality Protection',
    description: 'Pouches are superior at protecting the quality of the coffee better, keeping oxygen and other bad stuff out while locking flavor and aroma in.',
  },
  {
    icon: Award,
    title: 'Fair Trade Sourced',
    description: 'Coffee sourced from small farmers paying above fair trade through respected importers. Our proprietary extraction method proves the cleanest cold brewed coffee experience you\'ll find in the wild.',
  },
]

export default function Sustainability() {
  return (
    <section className="py-20 lg:py-32 bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sustainable Coffee for{' '}
            <span className="text-coffee-300">Adventure</span>
          </h2>
          <p className="text-lg text-coffee-200 max-w-2xl mx-auto">
            We're committed to sustainability, quality, and making sure you never have to go without Super Duper good coffee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sustainabilityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-coffee-800/50 rounded-2xl p-8 backdrop-blur-sm border border-coffee-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-coffee-700 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-coffee-200" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-coffee-200 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    {feature.stat && (
                      <p className="text-coffee-300 font-medium text-sm">
                        {feature.stat}
                      </p>
                    )}
                    {feature.link && (
                      <Link
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-coffee-200 hover:text-white font-medium mt-4 transition-colors"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
