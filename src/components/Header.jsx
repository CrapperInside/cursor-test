import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 2L2 19h20L12 2z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">Vercel</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center space-x-1">
                <span>Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center space-x-1">
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center space-x-1">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Enterprise</button>
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Docs</button>
              <button className="text-white hover:text-gray-300 transition-colors text-sm font-medium">Pricing</button>
            </div>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
              Log In
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
              Contact
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-gray-100">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header