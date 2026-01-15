import { Metadata } from 'next'
import { Coffee, Mountain, Heart, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Super Duper Coffee',
  description: 'Learn about Super Duper Coffee - our mission, values, and commitment to quality, sustainability, and adventure.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest coffee beans and use our proprietary cold brew extraction method to deliver the cleanest, most flavorful coffee experience.',
    },
    {
      icon: Mountain,
      title: 'Adventure Ready',
      description: 'Our products are designed for people who live life on the go. Whether you\'re hiking, camping, or just commuting, Super Duper Coffee goes with you.',
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'We work directly with small farmers, paying above fair trade prices to ensure sustainable livelihoods and exceptional coffee quality.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We\'re committed to environmental responsibility, from our recyclable pouches to our 1% For The Planet membership.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-50 via-white to-coffee-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-coffee-900 mb-6">
              About Super Duper Coffee
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe everyone deserves access to Super Duper good coffee, no matter where their adventures take them.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Super Duper Coffee was born from a simple frustration: why is it so hard to get great coffee when you're on the go? Whether you're hitting the trail, commuting to work, or exploring new places, you shouldn't have to compromise on quality.
                </p>
                <p>
                  We set out to create the perfect solution - premium cold brew coffee in sustainable, adventure-ready pouches. Our proprietary extraction method ensures you get the cleanest, most flavorful cold brew experience, while our innovative packaging makes it easy to take Super Duper good coffee anywhere.
                </p>
                <p>
                  But we didn't stop there. We're committed to doing right by our farmers, our planet, and our community. That's why we source from small farmers paying above fair trade prices, use sustainable packaging, and donate 1% of our sales to environmental causes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coffee-200 to-coffee-400 rounded-2xl aspect-square flex items-center justify-center">
              <Coffee className="w-32 h-32 text-coffee-600/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-coffee-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-coffee-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-coffee-200 leading-relaxed mb-8">
              To make sure everybody has access to Super Duper good coffee at all times, especially on rad adventures. We're committed to quality, sustainability, and making coffee that goes wherever life takes you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/cold-brew"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-coffee-700 font-semibold rounded-full hover:bg-coffee-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Try Our Coffee
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-coffee-700/50 text-white font-semibold rounded-full border-2 border-white/50 hover:bg-coffee-700/70 backdrop-blur-sm transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
