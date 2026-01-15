import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { CartProvider } from '@/contexts/CartContext'
import { ToastProvider } from '@/components/ToastProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Super Duper Coffee | Premium Cold Brew Coffee Pouches',
  description: 'Super Duper good coffee that you can take anywhere. Fair trade, fresh roasted, cold brewed coffee in sustainable adventure-ready pouches.',
  keywords: 'cold brew coffee, coffee pouches, fresh roasted coffee, fair trade coffee, sustainable coffee',
  openGraph: {
    title: 'Super Duper Coffee | Premium Cold Brew Coffee',
    description: 'Super Duper good coffee that you can take anywhere. Fair trade, fresh roasted, cold brewed coffee.',
    type: 'website',
    url: 'https://superduperdrinks.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <ToastProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
