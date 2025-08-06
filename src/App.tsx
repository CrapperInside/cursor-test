import { Button } from "@/components/ui/button"
import { ArrowRight, Play, GitBranch, Zap, BarChart3, Shield, Globe, Users, BookOpen, Github, Twitter, Linkedin, Youtube } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Vercel</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Log in
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Contact
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Build and deploy on the AI Cloud.
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Vercel provides the developer tools and cloud infrastructure 
            to build, scale, and secure a faster, more personalized web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Deploying
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Get a Demo
            </Button>
          </div>
          
          {/* Hero Gradient Triangle */}
          <div className="relative mx-auto w-full max-w-4xl h-80 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 vercel-hero-gradient opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[100px] border-r-[100px] border-b-[173px] border-l-transparent border-r-transparent border-b-black/60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Develop with your favorite tools →
            </h2>
            <p className="text-xl text-gray-400">
              Launch globally, instantly ⚡ Keep pushing ↗
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Git-connected Deploys */}
            <div>
              <div className="flex items-center mb-4">
                <GitBranch className="w-6 h-6 mr-3 text-blue-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Git-connected Deploys</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                From localhost to https, in seconds.
              </h3>
              <p className="text-gray-400 mb-6">
                Deploy from Git or our CLI. 
                Every deploy gets a unique URL and automatic 
                HTTPS — no setup required.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400">$ vercel</div>
                <div className="text-gray-500">
                  <span className="text-blue-400">✓</span> Linked to vercel-app (created .vercel)
                </div>
                <div className="text-gray-500">
                  <span className="text-blue-400">✓</span> Production: https://my-app.vercel.app [1s]
                </div>
                <div className="text-gray-500">📝 Deployed to production. Run <span className="text-white">`vercel --prod`</span> to override.</div>
              </div>
            </div>

            {/* Collaborative Pre-production */}
            <div>
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Collaborative Pre-production</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Every deploy is remarkable.
              </h3>
              <p className="text-gray-400 mb-6">
                Chat with your team on real, production-grade UI, not just designs.
              </p>
              
              {/* Mock Chat Interface */}
              <div className="bg-gray-900 rounded-lg p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    J
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm">
                    How about this instead?
                  </div>
                </div>
                <div className="text-center text-xs text-gray-500">
                  I like it! Does this work with the latest mobile experience?
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                    This looks great! 🚀
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  The team joined ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Observability Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Observability</span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">
            Route-aware observability.
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Monitor and analyze the performance 
            and traffic of your projects.
          </p>

          {/* Mock Analytics Chart */}
          <div className="bg-black rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-2xl font-bold">90,342</div>
                <div className="text-sm text-gray-400">Requests</div>
              </div>
              <div>
                <div className="text-2xl font-bold">29,800</div>
                <div className="text-sm text-gray-400">Visitors</div>
              </div>
            </div>
            
            <div className="relative h-40 bg-gray-800 rounded-lg overflow-hidden">
              {/* Simulated Chart Lines */}
              <svg className="w-full h-full" viewBox="0 0 400 160">
                <path 
                  d="M0,140 Q100,120 200,100 T400,80" 
                  stroke="#3b82f6" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.8"
                />
                <path 
                  d="M0,120 Q100,100 200,80 T400,60" 
                  stroke="#10b981" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.8"
                />
                <path 
                  d="M0,100 Q100,80 200,60 T400,40" 
                  stroke="#f59e0b" 
                  strokeWidth="2" 
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
            
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <span>Function Invocations</span>
              <span>Project</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Deployment Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Gateway */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-3 text-green-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Vercel AI Gateway</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Deploy AI in seconds.
              </h3>
              <p className="text-gray-400 mb-6">
                Access all major models through a single, unified 
                interface and shared AI credit wallet.
              </p>
              
              {/* AI Model Interface */}
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Connected</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>GPT-4</span>
                    <span className="text-green-400">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Claude</span>
                    <span className="text-green-400">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Llama</span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Rollbacks */}
            <div>
              <div className="flex items-center mb-4">
                <ArrowRight className="w-6 h-6 mr-3 text-red-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Instant Rollbacks</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Go ahead, deploy on Friday.
              </h3>
              <p className="text-gray-400 mb-6">
                Safely manage releases with automated 
                deployments and instant rollbacks.
              </p>
              
              {/* Deployment Timeline */}
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm">vercel-app.vercel.app</span>
                    <span className="text-xs text-gray-400">Just now</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">feature-branch</span>
                    <span className="text-xs text-gray-400">2m ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm">hotfix</span>
                    <span className="text-xs text-gray-400">5m ago - ROLLED BACK</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <div className="flex items-center space-x-2 text-sm text-green-400">
                    <ArrowRight className="w-4 h-4" />
                    <span>Rollback: Deploy to production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Scale your <Globe className="inline w-8 h-8 mx-2" /> without compromising <Shield className="inline w-8 h-8 mx-2" />
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to deploy? Start building with a free account. 
            Speak to an expert for your Pro or Enterprise needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
              Start Deploying
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Explore Vercel Enterprise with comprehensive product tour, 
            best practices, and more.
          </p>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            Explore Enterprise
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Previews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Edge Config</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Next.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Turbo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Functions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Storage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Speed Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">v0</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Experts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CLI & API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solution Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OSS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Github className="w-4 h-4 mr-2" />GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Twitter className="w-4 h-4 mr-2" />X</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Youtube className="w-4 h-4 mr-2" />YouTube</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Subscribe</h3>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated on new releases and features, guides, and case studies.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="you@domain.com" 
                  className="bg-gray-800 border border-gray-700 rounded-l-md px-3 py-2 text-sm flex-1 focus:outline-none focus:border-gray-600"
                />
                <Button className="bg-white text-black hover:bg-gray-200 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <span className="font-bold">Vercel</span>
              </div>
              <div className="text-sm text-gray-400">
                Copyright © 2024 Vercel Inc. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
