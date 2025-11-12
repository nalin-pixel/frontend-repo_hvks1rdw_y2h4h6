import React from 'react'
import { ShoppingCart, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-bold tracking-tight text-xl">
          NeoCommerce
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#categories" className="hover:text-white">Categories</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative text-white">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-fuchsia-500 text-white rounded-full px-1.5 py-0.5">2</span>
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
