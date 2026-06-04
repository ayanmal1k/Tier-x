"use client"

import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Repeat,
  GraduationCapIcon as Graduation,
  Building,
  Clock,
  Ticket,
  Heart,
  Banknote,
  Infinity,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

export default function Engines() {
  const [activeEngine, setActiveEngine] = useState(0)

  const engines = [
    {
      title: "Deplete the Reserve",
      icon: Repeat,
      description: "Swap loop engine to create rapid activity and double return cycles.",
      color: "#FFD700",
    },
    {
      title: "Crypto University",
      icon: Graduation,
      description: "Learn-and-earn mechanism rewarding educational completion with TIERX.",
      color: "#00FF87",
    },
    {
      title: "Tokenize Everything",
      icon: Building,
      description: "Real estate, vehicles, and physical assets placed under smart contracts.",
      color: "#4682B4",
    },
    {
      title: "Fracture",
      icon: Clock,
      description: "Time-lock reward engine rewarding long-term holding and anti-dump discipline.",
      color: "#00E7FF",
    },
    {
      title: "Lottery Vault",
      icon: Ticket,
      description: "Micro-entry vault with randomized draws and passive prize sharing.",
      color: "#9370DB",
    },
    {
      title: "Free Healthcare Engine",
      icon: Heart,
      description: "$12/year onboarding campaign to pool healthcare treasury.",
      color: "#FF6B6B",
    },
    {
      title: "Stimulus Engine",
      icon: Banknote,
      description: "Community-based airdrop stimulus from pooled liquidity.",
      color: "#FFD700",
    },
    {
      title: "Infinity Engine",
      icon: Infinity,
      description: "The final vault: auto-yield mechanism offering compounding liquidity with 15-day cycles.",
      color: "#00FF87",
    },
  ]

  const nextEngine = () => {
    setActiveEngine((prev) => (prev + 1) % engines.length)
  }

  const prevEngine = () => {
    setActiveEngine((prev) => (prev - 1 + engines.length) % engines.length)
  }

  return (
    <section id="engines" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">
              8 Engines of TierX
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            TierX is powered by 8 innovative economic engines that drive value, utility, and real-world impact.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative px-10">
            <button
              onClick={prevEngine}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-graphite/50 border border-white/10"
            >
              <ChevronLeft size={18} />
            </button>

            <motion.div
              key={activeEngine}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-graphite/30 backdrop-blur-sm p-6 rounded-xl border border-white/5"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${engines[activeEngine].color}20` }}
              >
                {React.createElement(engines[activeEngine].icon, {
                  size: 24,
                  style: { color: engines[activeEngine].color },
                })}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: engines[activeEngine].color }}>
                {engines[activeEngine].title}
              </h3>
              <p className="text-white/70">{engines[activeEngine].description}</p>
            </motion.div>

            <button
              onClick={nextEngine}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-graphite/50 border border-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-1">
            {engines.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveEngine(index)}
                className={`w-2 h-2 rounded-full ${index === activeEngine ? "bg-gold" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: `0 10px 25px -5px ${engine.color}20`,
                transition: { duration: 0.2 },
              }}
              className="bg-graphite/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${engine.color}20` }}
              >
                {engine.icon &&
                  React.createElement(engine.icon, {
                    size: 24,
                    style: { color: engine.color },
                  })}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: engine.color }}>
                {engine.title}
              </h3>
              <p className="text-white/70">{engine.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
