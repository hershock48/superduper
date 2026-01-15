'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-coffee-200 border-t-coffee-600 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
