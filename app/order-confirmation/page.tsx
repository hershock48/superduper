import { Metadata } from 'next'
import { CheckCircle, Package, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Confirmation | Super Duper Coffee',
  description: 'Your order has been confirmed!',
}

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          
          <h1 className="text-3xl font-bold text-coffee-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order. We've received your order and will begin processing it right away.
          </p>

          <div className="bg-coffee-50 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Package className="text-coffee-600" size={24} />
              <h2 className="font-semibold text-coffee-900">Order #12345</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              You will receive an email confirmation shortly with your order details and tracking information.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
              <Mail size={16} />
              <span>Check your email for order updates</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cold-brew"
              className="inline-flex items-center justify-center px-8 py-4 bg-coffee-600 text-white font-semibold rounded-full hover:bg-coffee-700 transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-coffee-600 text-coffee-600 font-semibold rounded-full hover:bg-coffee-50 transition-all duration-300"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
