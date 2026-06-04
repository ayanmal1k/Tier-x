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
    { title: "Deplete the Reserve", icon: Repeat, description: "Swap loop engine to create rapid activity and double return cycles." },
    { title: "Crypto University", icon: Graduation, description: "Learn-and-earn mechanism rewarding educational completion with TIERX." },
    { title: "Tokenize Everything", icon: Building, description: "Real estate, vehicles, and physical assets placed under smart contracts." },
    { title: "Fracture", icon: Clock, description: "Time-lock reward engine rewarding long-term holding and anti-dump discipline." },
    { title: "Lottery Vault", icon: Ticket, description: "Micro-entry vault with randomized draws and passive prize sharing." },
    { title: "Free Healthcare Engine", icon: Heart, description: "$12/year onboarding campaign to pool healthcare treasury." },
    { title: "Stimulus Engine", icon: Banknote, description: "Community-based airdrop stimulus from pooled liquidity." },
    { title: "Infinity Engine", icon: Infinity, description: "Auto-yield mechanism offering compounding liquidity with 15-day cycles." },
  ]

  const nextEngine = () => setActiveEngine((prev) => (prev + 1) % engines.length)
  const prevEngine = () => setActiveEngine((prev) => (prev - 1 + engines.length) % engines.length)

  return (
    <section id="engines" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-display text-ink mb-4">
            8 Engines of TierX
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            TierX is powered by 8 innovative economic engines that drive value, utility, and real-world impact.
          </p>
        </motion.div>

        <div className="md:hidden">
          <div className="relative px-10">
            <button
              onClick={prevEngine}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border border-hairline bg-surface-card"
            >
              <ChevronLeft size={18} className="text-ink" />
            </button>

            <motion.div
              key={activeEngine}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-hairline bg-surface-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {React.createElement(engines[activeEngine].icon, {
                  size: 24,
                  className: "text-primary",
                })}
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-2">
                {engines[activeEngine].title}
              </h3>
              <p className="text-body-md text-muted">{engines[activeEngine].description}</p>
            </motion.div>

            <button
              onClick={nextEngine}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border border-hairline bg-surface-card"
            >
              <ChevronRight size={18} className="text-ink" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-1">
            {engines.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveEngine(index)}
                className={`w-2 h-2 rounded-full ${index === activeEngine ? "bg-primary" : "bg-hairline"}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-all hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {engine.icon &&
                  React.createElement(engine.icon, {
                    size: 24,
                    className: "text-primary",
                  })}
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-2">{engine.title}</h3>
              <p className="text-body-md text-muted">{engine.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
