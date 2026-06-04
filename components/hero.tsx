"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-steel/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon/5 blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f10_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block mb-4 px-4 py-1 bg-graphite rounded-full border border-gold/30">
              <span className="text-gold text-sm font-medium">Backed by Sceptre Dominion Private Trust</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-2xl">
              <span className="text-white">The Sovereign Economic Engine of the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-neon block mt-2">
                New Era
              </span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              TierX integrates real-world liquidity, digital identity, and financial restoration through on-chain smart
              contract protocols.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold/90 text-midnight font-bold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:scale-105 flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Buy TierX
                  <div className="w-5 h-5 relative">
                    <Image src="/uniswap-logo.webp" alt="Uniswap" fill className="object-contain" />
                  </div>
                </span>
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Token 3D effect with actual logo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-gold/80 to-gold/50 blur-sm animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gold p-4 flex items-center justify-center">
                <Image
                  src="/tierx-logo.png"
                  alt="TierX Logo"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-gold animate-spin-slow"></div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-neon/20 backdrop-blur-sm p-3 rounded-lg border border-neon/30 animate-float">
                <div className="text-neon font-bold">100B</div>
                <div className="text-xs text-white/70">Total Supply</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-steel/20 backdrop-blur-sm p-3 rounded-lg border border-steel/30 animate-float-delay">
                <div className="text-steel font-bold">3%</div>
                <div className="text-xs text-white/70">Monthly Yield</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-graphite/50 backdrop-blur-md rounded-2xl p-6 border border-white/5"
        >
          {[
            { label: "Total Supply", value: "100B" },
            { label: "Yield Rate", value: "3%/mo" },
            { label: "Engines", value: "8" },
            { label: "Backed By", value: "Trust" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-gold text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
