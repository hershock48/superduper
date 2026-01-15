import { Metadata } from 'next'
import ProductHero from '@/components/ProductHero'
import ProductFeatures from '@/components/ProductFeatures'
import ProductGrid from '@/components/ProductGrid'
import ImageGallery from '@/components/ImageGallery'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cold Brew Coffee Pouches | Super Duper Coffee',
  description: 'Super Duper good cold brew coffee in sustainable, adventure-ready pouches. Ready to drink, fits in your pocket, perfect for any adventure.',
}

export default function ColdBrewPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Shop', href: '/' },
          { label: 'Cold Brew Coffee' },
        ]} />
      </div>
      <ProductHero
        title="Cold Brew Coffee Pouches"
        subtitle="Super Duper good coffee that you can take anywhere"
        description="In your pocket, in your pack, these cold brew coffee adventure pouches are made to go anywhere. Our mission is for everybody to have access to Super Duper good coffee at all times."
        image="/images/cold-brew-hero.jpg"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImageGallery images={['/images/cold-brew-1.jpg', '/images/cold-brew-2.jpg', '/images/cold-brew-3.jpg']} />
            <div>
              <h2 className="text-3xl font-bold text-coffee-900 mb-6">Premium Cold Brew, Anywhere</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our cold brew coffee pouches are the perfect solution for coffee lovers on the go. Made with our proprietary extraction method, each pouch delivers the cleanest, most flavorful cold brew experience you'll find.
                </p>
                <p>
                  The pouches are designed to protect the quality of the coffee, keeping oxygen out while locking in flavor and aroma. They're lightweight, recyclable, and take up minimal space - perfect for packing in and packing out on your adventures.
                </p>
                <p>
                  Whether you're hitting the trail, commuting to work, or exploring new places, Super Duper cold brew pouches ensure you never have to go without great coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductFeatures
        features={[
          {
            title: 'Ready to Drink',
            description: 'No brewing required. Just open and enjoy premium cold brew coffee anywhere, anytime.',
          },
          {
            title: 'Adventure Ready',
            description: 'Fits in your pocket, seals leak-free, and rolls up tiny to be packed in and packed out.',
          },
          {
            title: 'Superior Quality',
            description: 'Our proprietary extraction method provides the cleanest cold brewed coffee experience you'll find in the wild.',
          },
          {
            title: 'Sustainable Packaging',
            description: 'Recyclable pouches with a smaller carbon footprint than cans or bottles. Less space, less weight, more adventure.',
          },
        ]}
      />
      <ProductGrid category="cold-brew" />
    </>
  )
}
