import React from 'react'

const Footer = () => {
  const footerLinks = {
    Products: [
      'Next.js',
      'Analytics',
      'Enterprise',
      'Turbo',
      'Next.js',
      'Frameworks',
      'Functions',
      'Security'
    ],
    Resources: [
      'Docs',
      'Learn',
      'Showcase',
      'Blog',
      'Analytics',
      'Next.js Conf',
      'Integrations',
      'Templates'
    ],
    Company: [
      'About',
      'Blog',
      'Careers',
      'Partners',
      'Security',
      'Next.js Conf',
      'Contact Us',
      'Resource Library'
    ],
    Social: [
      'Twitter',
      'GitHub',
      'LinkedIn',
      'YouTube'
    ]
  }

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          {/* Logo and copyright */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 2L2 19h20L12 2z" />
                </svg>
              </div>
              <span className="text-white font-semibold">Vercel</span>
            </div>
            <span className="text-gray-400 text-sm">
              © 2024 Vercel Inc.
            </span>
          </div>

          {/* Legal links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>

        {/* Bottom dots indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer