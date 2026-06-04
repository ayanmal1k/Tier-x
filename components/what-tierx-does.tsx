"use client"

import { motion } from "framer-motion"
import { Building2, Wallet, Users } from "lucide-react"

const pillars = [
  {
    icon: Building2,
    title: "Treasury",
    description: "Digital asset reserve, liquidity coordination, and ecosystem funding through structured vault mechanisms.",
  },
  {
    icon: Wallet,
    title: "Payments",
    description: "Future wallet infrastructure, token swaps, merchant access, and cross-border utility for global transactions.",
  },
  {
    icon: Users,
    title: "Community Infrastructure",
    description: "Education programs, asset onboarding, healthcare pool, housing support, and local economic development tools.",
  },
]

export default function WhatTierXDoes() {
  return (
    <section className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">
            What TierX Does
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            A unified digital wealth infrastructure connecting treasury management,
            payment systems, and community economic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-all hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-title-lg font-headline text-ink mb-3">{pillar.title}</h3>
              <p className="text-body-md text-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
