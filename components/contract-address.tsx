"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

export default function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="py-12 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gold/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-graphite/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gold">Contract Address</h3>
          <p className="text-white/70 mb-6">Add TierX to your wallet using the official contract address below</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-white break-all">
              {contractAddress}
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-neon hover:bg-neon/90 text-midnight font-bold py-3 px-6 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(0,255,135,0.5)] flex items-center gap-2 whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
