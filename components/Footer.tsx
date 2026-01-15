import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const productLinks = [
    { name: 'Super Duper Pouch Subscriptions', href: '/subscriptions' },
    { name: 'Fresh Roasted Coffee Subscription', href: '/subscriptions' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Cold Brew Coffee', href: '/cold-brew' },
    { name: 'Fresh Roasted Coffee', href: '/fresh-roasted' },
  ]

  const pageLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Cart', href: '/cart' },
    { name: 'Checkout', href: '/checkout' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'My Account', href: '/account' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Shipping and Refund Policy', href: '/shipping' },
    { name: 'Wholesale', href: '/wholesale' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:info@superduperdrinks.com' },
  ]

  return (
    <footer className="bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Super Duper Coffee</h3>
            <p className="text-coffee-300 text-sm mb-6">
              Super Duper good coffee that you can take anywhere. Fair trade, fresh roasted, cold brewed coffee in sustainable adventure-ready pouches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-coffee-800 hover:bg-coffee-700 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-coffee-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Pages</h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-coffee-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Mission</h4>
            <p className="text-coffee-300 text-sm mb-4">
              We are a proud member of{' '}
              <a
                href="https://www.onepercentfortheplanet.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-semibold"
              >
                1% For The Planet
              </a>
              , committing 1% of our annual sales to environmental nonprofit organizations.
            </p>
            <Link
              href="/sustainability"
              className="text-coffee-300 hover:text-white text-sm font-medium transition-colors inline-block"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-12 pt-8">
          <p className="text-coffee-400 text-sm text-center">
            © {new Date().getFullYear()} Super Duper Company LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
