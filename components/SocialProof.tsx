'use client'

import { useState, useEffect } from 'react'

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const [views] = useState(Math.floor(Math.random() * 20) + 15)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-8 left-8 z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-strong p-4 flex items-center gap-3 border border-gray-100">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-900">{views} people viewing</div>
          <div className="text-xs text-gray-600">Someone just booked a call</div>
        </div>
      </div>
    </div>
  )
}
