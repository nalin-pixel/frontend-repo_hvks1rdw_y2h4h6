import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import ProductGrid from './components/ProductGrid'

function App() {
  useEffect(() => {
    // Try seeding demo products on first load (safe if already seeded)
    const seed = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        await fetch(`${base}/api/seed`, { method: 'POST' })
      } catch (e) {
        // ignore
      }
    }
    seed()
  }, [])

  return (
    <div className="min-h-screen bg-[#0b1020]">
      <Navbar />
      <main>
        <Hero3D />
        <ProductGrid />
        <section id="about" className="py-24 bg-gradient-to-b from-[#0b1020] to-[#0b1020]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white">Designed for the future</h3>
            <p className="mt-4 text-white/70">Premium UI, interactive 3D, and pro-level motion crafted for a modern shopping experience.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60 bg-[#0b1020]">
        © {new Date().getFullYear()} NeoCommerce. All rights reserved.
      </footer>
    </div>
  )
}

export default App
