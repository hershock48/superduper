'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Cold Brew Coffee Pouches',
    description: 'Super Duper good coffee that you can take anywhere. Ready-to-drink cold brew in sustainable, adventure-ready pouches.',
    href: '/cold-brew',
    image: '/images/cold-brew-pouches.jpg',
    cta: 'Shop Cold Brew',
  },
  {
    title: 'Fresh Roasted Coffee Beans',
    description: 'Premium coffee beans, fresh roasted and shipped to order. Experience the difference quality makes with our current roasts.',
    href: '/fresh-roasted',
    image: '/images/fresh-roasted.jpg',
    cta: 'Shop Fresh Roasted',
  },
]

export default function Products() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-900 mb-4">
            Explore Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium coffee products, from ready-to-drink cold brew to fresh roasted beans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-coffee-200 to-coffee-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-coffee-600/10 group-hover:bg-coffee-600/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CoffeeIcon className="w-32 h-32 text-coffee-300/50" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center text-coffee-600 font-semibold hover:text-coffee-700 group-hover:gap-2 gap-1 transition-all"
                >
                  {product.cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
