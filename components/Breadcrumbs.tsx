'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-coffee-600 transition-colors">
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={16} className="text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-coffee-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-coffee-600 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
