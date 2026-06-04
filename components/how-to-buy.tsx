"use client"

import { motion } from "framer-motion"
import { Wallet, ArrowRightLeft, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function HowToBuy() {
  const steps = [
    { step: "Step 1", title: "Create an Ethereum Wallet", description: "Create an Ethereum based wallet in MetaMask or your choice of app.", icon: Wallet },
    { step: "Step 2", title: "Buy Ethereum", description: "Buy Ethereum from a trusted CEX or DEX and transfer to wallet.", icon: ArrowRightLeft },
    { step: "Step 3", title: "Swap for TierX", description: "Click on Buy now and swap it all for some TierX Coins.", icon: ShoppingCart },
  ]

  return (
    <section id="how-to-buy" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-display text-ink mb-4">How to Buy</h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Get started with TierX in just 3 simple steps. Join the sovereign economic revolution today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-hairline bg-surface-card p-8 text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-title-sm font-bold">
                {index + 1}
              </div>

              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 mt-2">
                <step.icon size={28} className="text-primary" />
              </div>

              <span className="text-caption-strong text-muted uppercase tracking-wider">{step.step}</span>
              <h3 className="text-title-md font-semibold text-ink mt-2 mb-3">{step.title}</h3>
              <p className="text-body-md text-muted">{step.description}</p>

              {index === 2 && (
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary p-1 flex items-center justify-center">
                    <Image
                      src="/tierx-logo.png"
                      alt="TierX Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-hairline" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-8 py-4 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            style={{ height: "56px" }}
          >
            Buy TierX Now
            <div className="w-5 h-5 relative">
              <Image src="/uniswap-logo.webp" alt="Uniswap" fill className="object-contain" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
