"use client"

import { motion } from "framer-motion"
import { Wallet, ArrowRightLeft, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function HowToBuy() {
  const steps = [
    {
      step: "Step 1",
      title: "Create an Ethereum Wallet",
      description: "Create an Ethereum based wallet in MetaMask or your choice of app.",
      icon: Wallet,
      color: "#FFD700",
    },
    {
      step: "Step 2",
      title: "Buy Ethereum",
      description: "Buy Ethereum from a trusted CEX or DEX and transfer to wallet.",
      icon: ArrowRightLeft,
      color: "#00FF87",
    },
    {
      step: "Step 3",
      title: "Swap for TierX",
      description: "Click on Buy now and swap it all for some TierX Coins.",
      icon: ShoppingCart,
      color: "#4682B4",
    },
  ]

  return (
    <section id="how-to-buy" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">How to Buy</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get started with TierX in just 3 simple steps. Join the sovereign economic revolution today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="relative bg-graphite/30 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all text-center"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-midnight font-bold text-sm"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${step.color}20` }}
              >
                <step.icon size={32} style={{ color: step.color }} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: step.color }}>
                {step.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>

              {/* Special logo for step 3 */}
              {index === 2 && (
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold p-1 flex items-center justify-center">
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

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold/90 text-midnight font-bold py-4 px-8 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:scale-105 text-lg inline-flex items-center gap-2"
          >
            Buy TierX Now
            <div className="w-6 h-6 relative">
              <Image src="/uniswap-logo.webp" alt="Uniswap" fill className="object-contain" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
