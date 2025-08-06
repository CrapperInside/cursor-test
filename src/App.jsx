import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import AISection from './components/AISection'
import ScaleSection from './components/ScaleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <AISection />
      <ScaleSection />
      <Footer />
    </div>
  )
}

export default App
