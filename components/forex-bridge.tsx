"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Repeat } from "lucide-react"
import Swap from "./swap"

export default function ForexBridge() {
  return (
    <section id="forex-bridge" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-steel/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-neon/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-graphite rounded-full border border-gold/30">
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-steel">
              HTGX → TierX Bridge
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Trade national currencies for crypto with our revolutionary forex bridge. Seamlessly convert Haitian Gourde
            to TierX.
          </p>
        </motion.div>

        {/* Bridge Teaser */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">National Currency Bridge</h3>
                <p className="text-white/70">
                  Convert Haitian Gourde (HTG) directly to HTGX tokens, then seamlessly bridge to TierX, USDC, or BTC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Repeat className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Instant Swaps</h3>
                <p className="text-white/70">
                  Enjoy fast, secure conversions with minimal fees. Perfect for remittances and cross-border
                  transactions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Launch Timeline</h3>
                <p className="text-white/70">
                  The HTGX Bridge is currently in final development. Join our community to be notified when it goes
                  live.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-graphite/30 backdrop-blur-md rounded-2xl p-6 border border-white/5 h-[500px]"
          >
            <Swap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
