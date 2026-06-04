"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-surface-dark overflow-hidden">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-screen pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-display-mega font-display text-on-dark mb-6"
              style={{ fontWeight: 400 }}
            >
              The Sovereign Economic Engine of the{" "}
              <span className="text-primary">New Era</span>
            </h1>
            <p className="text-body-md text-on-dark-soft mb-8 max-w-md">
              TierX integrates real-world liquidity, digital identity, and financial
              restoration through on-chain smart contract protocols. Backed by Sceptre
              Dominion Private Trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
                style={{ height: "56px", padding: "16px 32px" }}
              >
                Buy TierX
                <ArrowRight size={18} />
              </a>
              <a
                href="#tokenomics"
                className="inline-flex items-center justify-center rounded-pill bg-transparent px-5 py-2 text-base font-semibold text-on-dark transition-colors hover:bg-surface-dark-elevated"
                style={{ height: "56px", padding: "15px 31px", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                View Tokenomics
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/tierx-logo.png"
                alt="TierX"
                width={320}
                height={320}
                className="brightness-0 invert opacity-80"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16"
        >
          {[
            { label: "Total Supply", value: "100B" },
            { label: "Yield Rate", value: "3%/mo" },
            { label: "Engines", value: "8" },
            { label: "Backed By", value: "Sceptre Trust" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center rounded-xl bg-white/5 p-6 border border-white/5"
            >
              <div className="text-display-sm text-on-dark font-display mb-1">
                {stat.value}
              </div>
              <div className="text-body-sm text-on-dark-soft">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
