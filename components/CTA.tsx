'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mountain } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-coffee-600 to-coffee-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Mountain size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Never hit the trail without{' '}
            <span className="text-coffee-200">Super Duper Coffee</span>
          </h2>
          <p className="text-lg sm:text-xl text-coffee-100 mb-8 max-w-2xl mx-auto">
            Pouches are the superior vessel for ready-to-drink coffee for longer freshness, quality, and adventure. Super Duper pouches fit in your pocket, seal back up leak free, and roll up tiny to be packed in and packed out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cold-brew"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-coffee-700 font-semibold rounded-full hover:bg-coffee-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Grab Some Adventure Pouches!
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/subscriptions"
              className="inline-flex items-center justify-center px-8 py-4 bg-coffee-700/50 text-white font-semibold rounded-full border-2 border-white/50 hover:bg-coffee-700/70 backdrop-blur-sm transition-all duration-300"
            >
              Subscribe & Save
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
