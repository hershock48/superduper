import { Metadata } from 'next'
import ProductDetail from '@/components/ProductDetail'
import { notFound } from 'next/navigation'

// Mock product database
const products = {
  1: {
    id: 1,
    name: 'Adventure Pouch - Single',
    price: 12.99,
    originalPrice: 14.99,
    description: 'Single cold brew coffee pouch, perfect for one adventure. Our proprietary extraction method delivers the cleanest, most flavorful cold brew experience you\'ll find in the wild.',
    longDescription: 'Perfect for solo adventures or when you just need one perfect cup. Each pouch contains our premium cold brew coffee, ready to drink anywhere, anytime. No brewing required, no mess, just Super Duper good coffee.',
    category: 'cold-brew',
    images: ['/images/cold-brew-1.jpg', '/images/cold-brew-2.jpg'],
    inStock: true,
    stockCount: 50,
    features: [
      'Ready to drink',
      'No brewing required',
      'Fits in your pocket',
      'Leak-proof seal',
      'Recyclable packaging',
    ],
  },
  2: {
    id: 2,
    name: 'Adventure Pouch - 4 Pack',
    price: 45.99,
    originalPrice: 59.96,
    description: 'Four cold brew coffee pouches, ready for your next adventure. Perfect for weekend trips or sharing with friends.',
    longDescription: 'The perfect pack for weekend adventures or sharing with friends. Four pouches of our premium cold brew coffee, each one ready to energize your Super Duper adventures.',
    category: 'cold-brew',
    images: ['/images/cold-brew-1.jpg', '/images/cold-brew-2.jpg'],
    inStock: true,
    stockCount: 30,
    features: [
      '4 pouches included',
      'Save 23% vs single pouches',
      'Perfect for weekend trips',
      'Share with friends',
      'Recyclable packaging',
    ],
  },
  3: {
    id: 3,
    name: 'Adventure Pouch - 12 Pack',
    price: 129.99,
    originalPrice: 179.88,
    description: 'Twelve cold brew coffee pouches, never run out of adventure fuel. Best value for regular adventurers.',
    longDescription: 'Never run out of adventure fuel with our 12-pack. The best value for regular adventurers, coffee enthusiasts, or anyone who wants to ensure they always have Super Duper good coffee on hand.',
    category: 'cold-brew',
    images: ['/images/cold-brew-1.jpg', '/images/cold-brew-2.jpg'],
    inStock: true,
    stockCount: 20,
    features: [
      '12 pouches included',
      'Save 28% vs single pouches',
      'Best value option',
      'Perfect for regular use',
      'Recyclable packaging',
    ],
  },
  4: {
    id: 4,
    name: 'Adventure Pouch - Subscription',
    price: 10.99,
    description: 'Subscribe and save! Get fresh cold brew pouches delivered monthly. Cancel anytime.',
    longDescription: 'Never run out with our subscription service. Get fresh cold brew pouches delivered to your door monthly. Save money, save time, and always have Super Duper good coffee ready for your next adventure.',
    category: 'cold-brew',
    images: ['/images/cold-brew-1.jpg', '/images/cold-brew-2.jpg'],
    inStock: true,
    stockCount: 999,
    features: [
      'Monthly delivery',
      'Save 15% vs one-time purchase',
      'Cancel anytime',
      'Skip or modify anytime',
      'Free shipping',
    ],
  },
  5: {
    id: 5,
    name: 'Roaster\'s Choice - 12oz',
    price: 18.99,
    description: 'Fresh roasted coffee beans, 12oz bag. Our roaster picks the best beans for each batch.',
    longDescription: 'Our roaster carefully selects the finest beans for each batch, ensuring exceptional quality and flavor. Fresh roasted and shipped directly to your door, these beans deliver the perfect cup every time.',
    category: 'fresh-roasted',
    images: ['/images/fresh-roasted-1.jpg', '/images/fresh-roasted-2.jpg'],
    inStock: true,
    stockCount: 40,
    features: [
      'Fresh roasted',
      '12oz bag',
      'Roaster selected',
      'Fair trade sourced',
      'Shipped fresh',
    ],
  },
  6: {
    id: 6,
    name: 'Roaster\'s Choice - 2lb',
    price: 32.99,
    description: 'Fresh roasted coffee beans, 2lb bag. Perfect for coffee lovers who go through beans quickly.',
    longDescription: 'For the serious coffee enthusiast. Our 2lb bag ensures you never run out of fresh roasted coffee. Same exceptional quality, more coffee to enjoy.',
    category: 'fresh-roasted',
    images: ['/images/fresh-roasted-1.jpg', '/images/fresh-roasted-2.jpg'],
    inStock: true,
    stockCount: 25,
    features: [
      'Fresh roasted',
      '2lb bag',
      'Best value',
      'Fair trade sourced',
      'Shipped fresh',
    ],
  },
  7: {
    id: 7,
    name: 'Single Origin - 12oz',
    price: 22.99,
    description: 'Premium single origin coffee beans, 12oz bag. Experience the unique flavors of a specific region.',
    longDescription: 'Experience the unique character of single origin coffee. Each bag features beans from a specific region, allowing you to taste the distinct flavors and characteristics of that terroir.',
    category: 'fresh-roasted',
    images: ['/images/fresh-roasted-1.jpg', '/images/fresh-roasted-2.jpg'],
    inStock: true,
    stockCount: 15,
    features: [
      'Single origin',
      '12oz bag',
      'Premium quality',
      'Fair trade sourced',
      'Unique flavor profile',
    ],
  },
  8: {
    id: 8,
    name: 'Fresh Roasted Subscription',
    price: 16.99,
    description: 'Subscribe and save! Get fresh roasted coffee delivered monthly. Cancel anytime.',
    longDescription: 'Never run out of fresh roasted coffee with our subscription service. Get premium beans delivered monthly, roasted fresh and shipped directly to your door.',
    category: 'fresh-roasted',
    images: ['/images/fresh-roasted-1.jpg', '/images/fresh-roasted-2.jpg'],
    inStock: true,
    stockCount: 999,
    features: [
      'Monthly delivery',
      'Save 10% vs one-time purchase',
      'Cancel anytime',
      'Skip or modify anytime',
      'Always fresh roasted',
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products[params.id as keyof typeof products]
  
  if (!product) {
    return {
      title: 'Product Not Found | Super Duper Coffee',
    }
  }

  return {
    title: `${product.name} | Super Duper Coffee`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
