import React, { useEffect, useState } from 'react'

const ProductCard = ({ p }) => {
  return (
    <div className="group rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition overflow-hidden">
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-cyan-900/30 to-fuchsia-900/20">
        {p.image && <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />}
      </div>
      <div className="mt-4">
        <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
        <p className="text-white/60 text-sm line-clamp-2">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-cyan-300 font-bold">${p.price.toFixed(2)}</span>
          <button className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium">Add</button>
        </div>
      </div>
    </div>
  )
}

const ProductGrid = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <section id="products" className="py-24 bg-[#0b1020]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-2xl font-semibold">Loading products…</h2>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-24 bg-[#0b1020]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Products</h2>
          <a href="#" className="text-cyan-300 hover:text-white">View all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
