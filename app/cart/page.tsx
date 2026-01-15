import { Metadata } from 'next'
import CartContent from '@/components/CartContent'

export const metadata: Metadata = {
  title: 'Shopping Cart | Super Duper Coffee',
  description: 'Review your cart and checkout with Super Duper Coffee.',
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-coffee-900 mb-8">Shopping Cart</h1>
        <CartContent />
      </div>
    </div>
  )
}
