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
    <section className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl border border-hairline bg-surface-card p-8 text-center"
        >
          <h3 className="text-title-lg font-display text-ink mb-4">Contract Address</h3>
          <p className="text-body-md text-muted mb-6">
            Add TierX to your wallet using the official contract address below
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 bg-surface-soft border border-hairline rounded-lg px-5 py-3 font-mono text-body-sm text-ink break-all">
              {contractAddress}
            </div>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active whitespace-nowrap"
              style={{ height: "44px" }}
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
