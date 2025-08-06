import React from 'react'
import { Button } from './ui/button'

const AISection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - AI Gateway */}
          <div className="feature-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Vercel AI Gateway</h3>
            </div>
            
            <h4 className="text-3xl font-bold text-white mb-4">
              Deploy AI in seconds.
            </h4>
            <p className="text-xl text-gray-300 mb-8">
              Access all major models through a single, unified 
              interface and shared AI credit wallet.
            </p>

            {/* AI Model Interface Mockup */}
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 19h20L12 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">AI Models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      G
                    </div>
                    <span className="text-white text-sm">GPT-4</span>
                  </div>
                  <span className="text-green-400 text-xs">Active</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      C
                    </div>
                    <span className="text-white text-sm">Claude</span>
                  </div>
                  <span className="text-gray-400 text-xs">Available</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      L
                    </div>
                    <span className="text-white text-sm">Llama</span>
                  </div>
                  <span className="text-gray-400 text-xs">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Instant Rollbacks */}
          <div className="feature-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Instant Rollbacks</h3>
            </div>
            
            <h4 className="text-3xl font-bold text-white mb-4">
              Go ahead, deploy on Friday.
            </h4>
            <p className="text-xl text-gray-300 mb-8">
              Safely manage releases with automated 
              deployments and instant rollbacks.
            </p>

            {/* Deployment Flow Mockup */}
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-4">
                {/* Deployment 1 */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-medium">deployment.production</div>
                      <div className="text-gray-400 text-xs">→ feat/new-landing-design</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-xs">Ready</div>
                    <div className="text-gray-400 text-xs">2m 34s</div>
                  </div>
                </div>

                {/* Deployment 2 */}
                <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-white text-sm font-medium">vercel.app/dashboard</div>
                      <div className="text-gray-400 text-xs">→ fix/auth-error-on-safari</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 text-xs">Error</div>
                    <div className="text-gray-400 text-xs">30s ago</div>
                  </div>
                </div>

                {/* Rollback Action */}
                <div className="flex items-center justify-center pt-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Instant Rollback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection