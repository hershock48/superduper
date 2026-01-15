'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  onClose?: () => void
}

// Mock product database - in real app, this would come from an API
const allProducts = [
  { id: 1, name: 'Adventure Pouch - Single', category: 'cold-brew', price: 12.99 },
  { id: 2, name: 'Adventure Pouch - 4 Pack', category: 'cold-brew', price: 45.99 },
  { id: 3, name: 'Adventure Pouch - 12 Pack', category: 'cold-brew', price: 129.99 },
  { id: 4, name: 'Adventure Pouch - Subscription', category: 'cold-brew', price: 10.99 },
  { id: 5, name: 'Roaster\'s Choice - 12oz', category: 'fresh-roasted', price: 18.99 },
  { id: 6, name: 'Roaster\'s Choice - 2lb', category: 'fresh-roasted', price: 32.99 },
  { id: 7, name: 'Single Origin - 12oz', category: 'fresh-roasted', price: 22.99 },
  { id: 8, name: 'Fresh Roasted Subscription', category: 'fresh-roasted', price: 16.99 },
]

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof allProducts>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered.slice(0, 5)) // Limit to 5 results
  }, [query])

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      router.push(`/products/${results[0].id}`)
      onClose?.()
    }
  }

  const handleResultClick = (productId: number) => {
    router.push(`/products/${productId}`)
    onClose?.()
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search for coffee..."
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isFocused && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.map((product) => (
            <button
              key={product.id}
              onClick={() => handleResultClick(product.id)}
              className="w-full px-4 py-3 text-left hover:bg-coffee-50 transition-colors flex items-center justify-between border-b border-gray-100 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-500 capitalize">{product.category.replace('-', ' ')}</p>
              </div>
              <p className="text-coffee-600 font-semibold">${product.price}</p>
            </button>
          ))}
        </div>
      )}

      {isFocused && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4 text-center text-gray-500">
          No products found
        </div>
      )}
    </div>
  )
}
