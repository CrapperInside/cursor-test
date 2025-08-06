import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build and deploy on the{' '}
          <span className="text-gradient">AI Cloud</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Vercel provides the developer tools and cloud infrastructure
          <br />
          to build, scale, and secure a faster, more personalized web.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 19h20L12 2z" />
              </svg>
              <span>Start Deploying</span>
            </span>
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-3 text-lg font-medium">
            Get a Demo
          </Button>
        </div>
      </div>
      
      {/* Gradient Triangle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
          {/* Outer gradient background */}
          <div className="absolute inset-0 rounded-full gradient-bg opacity-60 blur-3xl"></div>
          
          {/* Triangle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                style={{
                  filter: 'drop-shadow(0 0 50px rgba(255, 255, 255, 0.3))'
                }}
              >
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="25%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="75%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="triangleFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Triangle shape */}
                <path
                  d="M200 50 L350 320 L50 320 Z"
                  fill="url(#triangleFill)"
                  stroke="url(#triangleGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero