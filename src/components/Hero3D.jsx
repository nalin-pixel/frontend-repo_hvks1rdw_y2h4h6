import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero3D = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0e1230] to-[#0b1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(59,130,246,0.25),transparent),radial-gradient(40%_30%_at_60%_70%,rgba(168,85,247,0.25),transparent)]" />

      {/* Headline */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          NeoCommerce
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl"
        >
          Future-forward marketplace for premium, design-led tech accessories and gear.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex gap-4"
        >
          <a href="#products" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/30 transition">Shop Now</a>
          <a href="#categories" className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white hover:bg-white/20 transition border border-white/20">Explore</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D
