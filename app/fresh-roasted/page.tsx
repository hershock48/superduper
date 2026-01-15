import { Metadata } from 'next'
import ProductHero from '@/components/ProductHero'
import ProductFeatures from '@/components/ProductFeatures'
import ProductGrid from '@/components/ProductGrid'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Fresh Roasted Coffee Beans | Super Duper Coffee',
  description: 'Premium coffee beans, fresh roasted and shipped to order. Experience the difference quality makes with our current roasts.',
}

export default function FreshRoastedPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Shop', href: '/' },
          { label: 'Fresh Roasted Coffee' },
        ]} />
      </div>
      <ProductHero
        title="Fresh Roasted Coffee Beans"
        subtitle="Shipped to Order"
        description="Fresh roasted coffee goes here. Check out our current roasts and experience the difference quality makes. Coffee sourced from small farmers paying above fair trade through respected importers."
        image="/images/fresh-roasted-hero.jpg"
      />
      <ProductFeatures
        features={[
          {
            title: 'Fresh Roasted',
            description: 'Every batch is roasted fresh and shipped directly to your door. Experience coffee at its peak flavor.',
          },
          {
            title: 'Fair Trade Sourced',
            description: 'Coffee sourced from small farmers paying above fair trade through respected importers.',
          },
          {
            title: 'Premium Quality',
            description: 'We select only the finest beans to ensure every cup is Super Duper good.',
          },
          {
            title: 'Subscription Available',
            description: 'Never run out with our subscription service. Get fresh roasted coffee delivered on your schedule.',
          },
        ]}
      />
      <ProductGrid category="fresh-roasted" />
    </>
  )
}
