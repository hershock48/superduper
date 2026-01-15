'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { useToast } from './ToastProvider'

interface ProductCardProps {
  id: number
  name: string
  price: string
  description: string
  image?: string
  href?: string
}

export default function ProductCard({ id, name, price, description, image, href }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { addItem } = useCart()
  const { showToast } = useToast()

  // Extract numeric price from string like "$12.99"
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''))

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id,
      name,
      price: numericPrice,
      category: href?.includes('cold-brew') ? 'cold-brew' : 'fresh-roasted',
    })
    showToast(`${name} added to cart!`, 'success')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link href={href || '#'} className="block">
        <div className="aspect-square bg-gradient-to-br from-coffee-200 to-coffee-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-coffee-600/10 group-hover:bg-coffee-600/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-coffee-300/50 rounded-full group-hover:scale-110 transition-transform duration-300" />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
            aria-label="Add to favorites"
          >
            <Heart
              size={20}
              className={isLiked ? 'fill-coffee-600 text-coffee-600' : 'text-gray-600'}
            />
          </button>
        </div>
      </Link>
      <div className="p-6">
        <Link href={href || '#'}>
          <h3 className="text-lg font-semibold text-coffee-900 mb-2 group-hover:text-coffee-600 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-coffee-600 mb-3">{price}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-colors"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
          {href && (
            <Link
              href={href}
              className="px-4 py-3 border-2 border-coffee-600 text-coffee-600 font-semibold rounded-lg hover:bg-coffee-50 transition-colors"
            >
              View
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
