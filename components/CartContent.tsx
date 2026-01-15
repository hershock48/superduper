'use client'

import Link from 'next/link'
import { Trash2, ArrowRight, Plus, Minus } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'

export default function CartContent() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart()
  const isEmpty = items.length === 0
  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <div className="w-24 h-24 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-12 h-12 bg-coffee-300 rounded-full" />
        </div>
        <h2 className="text-2xl font-semibold text-coffee-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Start adding some Super Duper good coffee to your cart!</p>
        <Link
          href="/cold-brew"
          className="inline-flex items-center px-8 py-4 bg-coffee-600 text-white font-semibold rounded-full hover:bg-coffee-700 transition-all duration-300"
        >
          Shop Cold Brew
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-coffee-900">Cart Items ({items.length})</h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-coffee-300 transition-colors"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-coffee-200 to-coffee-400 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-coffee-300/50 rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-coffee-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 capitalize mb-2">{item.category.replace('-', ' ')}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 min-w-[3rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-coffee-600 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
        <h2 className="text-xl font-semibold text-coffee-900 mb-6">Order Summary</h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? (
                <span className="text-green-600 font-medium">Free</span>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </span>
          </div>
          {subtotal < 50 && (
            <p className="text-sm text-coffee-600">
              Add ${(50 - subtotal).toFixed(2)} more for free shipping!
            </p>
          )}
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between text-lg font-bold text-coffee-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Link
          href="/checkout"
          className="block w-full text-center px-6 py-3 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-colors"
        >
          Proceed to Checkout
        </Link>
        <Link
          href="/cold-brew"
          className="block w-full text-center px-6 py-3 mt-3 border-2 border-coffee-600 text-coffee-600 font-semibold rounded-lg hover:bg-coffee-50 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
