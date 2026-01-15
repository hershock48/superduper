'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

interface ProductGridProps {
  category: 'cold-brew' | 'fresh-roasted'
}

// Mock product data - in a real app, this would come from a CMS or API
const mockProducts = {
  'cold-brew': [
    {
      id: 1,
      name: 'Adventure Pouch - Single',
      price: '$12.99',
      description: 'Single cold brew coffee pouch, perfect for one adventure.',
    },
    {
      id: 2,
      name: 'Adventure Pouch - 4 Pack',
      price: '$45.99',
      description: 'Four cold brew coffee pouches, ready for your next adventure.',
    },
    {
      id: 3,
      name: 'Adventure Pouch - 12 Pack',
      price: '$129.99',
      description: 'Twelve cold brew coffee pouches, never run out of adventure fuel.',
    },
    {
      id: 4,
      name: 'Adventure Pouch - Subscription',
      price: 'From $10.99/month',
      description: 'Subscribe and save! Get fresh cold brew pouches delivered monthly.',
    },
  ],
  'fresh-roasted': [
    {
      id: 5,
      name: 'Roaster\'s Choice - 12oz',
      price: '$18.99',
      description: 'Fresh roasted coffee beans, 12oz bag. Our roaster picks the best.',
    },
    {
      id: 6,
      name: 'Roaster\'s Choice - 2lb',
      price: '$32.99',
      description: 'Fresh roasted coffee beans, 2lb bag. Perfect for coffee lovers.',
    },
    {
      id: 7,
      name: 'Single Origin - 12oz',
      price: '$22.99',
      description: 'Premium single origin coffee beans, 12oz bag.',
    },
    {
      id: 8,
      name: 'Fresh Roasted Subscription',
      price: 'From $16.99/month',
      description: 'Subscribe and save! Get fresh roasted coffee delivered monthly.',
    },
  ],
}

export default function ProductGrid({ category }: ProductGridProps) {
  const products = mockProducts[category]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-4">
            Shop {category === 'cold-brew' ? 'Cold Brew' : 'Fresh Roasted'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of premium coffee products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              href={`/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
