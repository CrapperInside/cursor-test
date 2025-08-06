import React from 'react'
import { Button } from './ui/button'

const ScaleSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Scale your{' '}
            <span className="inline-flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-gradient">Enterprise</span>
            </span>{' '}
            <span className="text-gradient">without compromising</span>{' '}
            <span className="inline-flex items-center space-x-2">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gradient">Security</span>
            </span>
          </h2>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to deploy?{' '}
            <span className="text-white font-semibold">Start building with a free account.</span>
            <br />
            Speak to an expert for your{' '}
            <span className="text-blue-400 font-semibold">Pro</span> or{' '}
            <span className="text-purple-400 font-semibold">Enterprise</span> needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Start Deploying
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-3 text-lg font-medium">
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore Vercel Enterprise
            </h3>
            <p className="text-gray-300 mb-6">
              with comprehensive product tour,
              <br />
              best practices, and more.
            </p>
            <Button variant="secondary" className="w-full max-w-xs">
              Explore Enterprise
            </Button>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to deploy?
            </h3>
            <p className="text-gray-300 mb-6">
              Start building with a free account.
              <br />
              Speak to an expert for your Pro or
              <br />
              Enterprise needs.
            </p>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Security */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Security</h4>
            <p className="text-gray-400 text-sm">
              Enterprise-grade security with SOC 2 compliance
            </p>
          </div>

          {/* Performance */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Performance</h4>
            <p className="text-gray-400 text-sm">
              Global edge network for maximum speed
            </p>
          </div>

          {/* Scalability */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Scalability</h4>
            <p className="text-gray-400 text-sm">
              Auto-scaling infrastructure that grows with you
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScaleSection