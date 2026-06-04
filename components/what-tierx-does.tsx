"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
  {
    image: "/cards/treasury.png",
    title: "Treasury",
    description: "Digital asset reserve, liquidity coordination, and ecosystem funding through structured vault mechanisms.",
    imageHeight: "240px",
  },
  {
    image: "/cards/payments.png",
    title: "Payments",
    description: "Future wallet infrastructure, token swaps, merchant access, and cross-border utility for global transactions.",
    imageHeight: "240px",
  },
  {
    image: "/cards/community.png",
    title: "Community Infrastructure",
    description: "Education programs, asset onboarding, healthcare pool, housing support, and local economic development tools.",
    imageHeight: "240px",
  },
]

export default function WhatTierXDoes() {
  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.75px] sm:text-display-sm font-headline text-ink mb-4">
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#ffffff", border: "1px solid #dee1e6" }}
            >
              <div className="p-8">
                <h3
                  className="font-headline text-ink mb-3"
                  style={{ fontSize: "24px", lineHeight: "29px", fontWeight: 600 }}
                >
                  {pillar.title}
                </h3>
                <p className="text-body-md text-muted leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="relative w-full rounded-lg overflow-hidden" style={{ height: pillar.imageHeight }}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
