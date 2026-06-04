"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TradingPlatforms() {
  const platforms = [
    {
      name: "Uniswap",
      logo: "/uniswap-logo.webp",
      url: "https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97",
    },
    {
      name: "DexTools",
      logo: "/dexscreener-logo.png",
      url: "https://www.dextools.io/app/en/ether/pair-explorer/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d?t=1749675584651",
    },
    {
      name: "DexScreener",
      logo: "/dextools-logo.webp",
      url: "https://dexscreener.com/ethereum/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d",
    },
  ]

  return (
    <section className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display-sm font-display text-ink mb-4">
            Trade TierX on
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="flex flex-col items-center gap-4 rounded-xl border border-hairline bg-surface-card p-8 transition-all hover:shadow-card"
              >
                <div className="w-12 h-12 relative">
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-title-md font-semibold text-ink">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
