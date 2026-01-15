'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Check, Truck, Shield, ArrowLeft } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useToast } from './ToastProvider'
import ImageGallery from './ImageGallery'
import Breadcrumbs from './Breadcrumbs'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  description: string
  longDescription: string
  category: string
  images: string[]
  inStock: boolean
  stockCount: number
  features: string[]
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    })
    showToast(`${product.name} added to cart!`, 'success')
  }

  const savings = product.originalPrice
    ? ((product.originalPrice - product.price) / product.originalPrice) * 100
    : 0

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Shop', href: '/' },
            { label: product.category === 'cold-brew' ? 'Cold Brew' : 'Fresh Roasted', href: `/${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ImageGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-coffee-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-coffee-600">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
                      Save {savings.toFixed(0)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{product.longDescription}</p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check size={20} />
                  <span className="font-medium">
                    In Stock {product.stockCount < 20 && `(${product.stockCount} left)`}
                  </span>
                </div>
              ) : (
                <div className="text-red-600 font-medium">Out of Stock</div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <span className="text-lg">−</span>
                  </button>
                  <span className="px-4 py-2 min-w-[4rem] text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={!product.inStock}
                  >
                    <span className="text-lg">+</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-3 border-2 border-gray-300 rounded-lg hover:border-coffee-600 transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart
                    size={24}
                    className={isLiked ? 'fill-coffee-600 text-coffee-600' : 'text-gray-600'}
                  />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Truck className="mx-auto mb-2 text-coffee-600" size={24} />
                <p className="text-sm font-medium text-gray-700">Free Shipping</p>
                <p className="text-xs text-gray-500">Over $50</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="mx-auto mb-2 text-coffee-600" size={24} />
                <p className="text-sm font-medium text-gray-700">Secure Payment</p>
                <p className="text-xs text-gray-500">100% Safe</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Check className="mx-auto mb-2 text-coffee-600" size={24} />
                <p className="text-sm font-medium text-gray-700">30-Day Return</p>
                <p className="text-xs text-gray-500">Money Back</p>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-coffee-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-coffee-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
