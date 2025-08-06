import React from 'react'

const Features = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Develop with your favorite tools ↗
            <br />
            <span className="text-gradient">Launch globally, instantly ⚡ Keep pushing 🚀</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Git-connected Deploys */}
          <div className="feature-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Git-connected Deploys</h3>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              From localhost to https, in seconds.
            </h4>
            <p className="text-gray-400 mb-6">
              Deploy from Git or your CLI.
            </p>

            {/* Terminal mockup */}
            <div className="terminal-bg rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-green-400">$ npx create-next-app@latest</div>
                <div className="text-green-400">$ cd my-app</div>
                <div className="text-green-400">$ git init && git add .</div>
                <div className="text-green-400">$ git commit -m "Initial commit"</div>
                <div className="text-gray-400">
                  Writing objects: 100% (11/11), 1.35 KiB | 1.35 MiB/s, done.
                </div>
                <div className="text-gray-400">
                  Total 11 (delta 0), reused 0 (delta 0), pack-reused 0
                </div>
                <div className="text-blue-400 flex items-center">
                  <span className="animate-pulse mr-2">●</span>
                  <span>vercel.com</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <span className="text-green-400">✓</span> Working with your GitHub
            </div>
          </div>

          {/* Collaborative Pre-production */}
          <div className="feature-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Collaborative Pre-production</h3>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              Every deploy is remarkable. Chat
              <br />
              with your team on real, production-
              <br />
              grade UI, not just designs.
            </h4>

            {/* Comment mockup */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  J
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium text-sm">jaredpalmer</span>
                    <span className="text-gray-400 text-xs">for work across all versions</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    I like it. Does this work with
                    <br />
                    the latest React architecture?
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <button className="flex items-center space-x-1 hover:text-white">
                      <span>💬</span>
                      <span>How does this interact?</span>
                    </button>
                    <span>👍</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-400">
                This looks great! 🎉
              </div>
            </div>
          </div>
        </div>

        {/* Observability Section */}
        <div className="feature-card rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">Observability</h3>
          </div>

          <h4 className="text-3xl font-bold text-white mb-4">
            Route-aware observability.
          </h4>
          <p className="text-xl text-gray-300 mb-8">
            Monitor and analyze the performance
            <br />
            and traffic of your projects.
          </p>

          {/* Chart mockup */}
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Invocations</span>
                <span className="text-green-400 text-2xl font-bold">90,342</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Duration</span>
                <span className="text-blue-400 text-2xl font-bold">30.8ms</span>
              </div>
            </div>
            
            {/* Chart visualization */}
            <div className="h-32 flex items-end space-x-1">
              {Array.from({ length: 50 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-blue-500 to-green-400 flex-1 rounded-t"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    opacity: 0.7 + Math.random() * 0.3
                  }}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <span>Function Invocations</span>
              <span>Project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features