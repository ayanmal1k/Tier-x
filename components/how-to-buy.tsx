"use client"

import { motion } from "framer-motion"
import { IconWallet, IconArrowsExchange, IconBasket, IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function HowToBuy() {
  const steps = [
    {
      step: "Step 1",
      title: "Create an Ethereum Wallet",
      description: "Set up an Ethereum wallet using MetaMask, WalletConnect, or your preferred provider.",
      icon: IconWallet,
    },
    {
      step: "Step 2",
      title: "Fund with Ethereum",
      description: "Purchase ETH from a centralized or decentralized exchange and transfer to your wallet.",
      icon: IconArrowsExchange,
    },
    {
      step: "Step 3",
      title: "Swap for TIERX",
      description: "Use Uniswap or your preferred DEX to swap ETH for TIERX tokens.",
      icon: IconBasket,
    },
  ]

  return (
    <section id="how-to-buy" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">Acquire TIERX</h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Get started in three simple steps. TIERX is available on Ethereum through decentralized exchanges.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((item, index) => {
            const Icon = item.icon
            const stepNumber = String(index + 1).padStart(2, "0")
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface-card p-7 min-h-[300px] flex flex-col"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
              >
                {/* ── Top row: number on left, icon on right ── */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  {/* ── Big faded number ── */}
                  <div className="select-none pointer-events-none -mt-3 -ml-3">
                    <span
                      className="block font-headline leading-none"
                      style={{
                        fontSize: "110px",
                        fontWeight: 700,
                        background: "linear-gradient(to top, rgba(0,82,255,0.12) 0%, rgba(0,82,255,0.04) 60%, transparent 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stepNumber}
                    </span>
                  </div>

                  {/* ── Icon on top right ── */}
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0"
                  >
                    <Icon size={28} className="text-primary" strokeWidth={1.75} />
                  </motion.div>
                </div>

                {/* ── Title (fixed position below top row) ── */}
                <h3 className="text-title-lg font-headline text-ink mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>

                {/* ── Description (flexible height at bottom) ── */}
                <p className="text-body-md text-muted leading-relaxed mt-auto">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-8 py-4 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active group"
            style={{ height: "56px" }}
          >
            Swap on Uniswap
            <div className="w-5 h-5 relative">
              <Image src="/uniswap-logo.webp" alt="Uniswap" fill className="object-contain" />
            </div>
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>

        {/* ── Disclaimer ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-caption text-muted max-w-lg mx-auto text-center mt-8"
        >
          Always verify the official contract address before transacting. TIERX is an
          ERC-20 token on the Ethereum network.
        </motion.p>
      </div>
    </section>
  )
}
