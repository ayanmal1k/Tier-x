"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TradingPlatforms() {
  const platforms = [
    {
      name: "Uniswap",
      logo: "/uniswap-logo.webp",
      url: "https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97",
      invertLogo: true,
    },
    {
      name: "DexTools",
      logo: "/dexscreener-logo.png",
      url: "https://www.dextools.io/app/en/ether/pair-explorer/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d?t=1749675584651",
      invertLogo: false,
    },
    {
      name: "DexScreener",
      logo: "/dextools-logo.webp",
      url: "https://dexscreener.com/ethereum/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d",
      invertLogo: false,
    },
  ]

  return (
    <section className="py-16 relative">
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
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Trade TierX on</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(255, 215, 0, 0.3)",
                  transition: { duration: 0.2 },
                }}
                className="bg-gold hover:bg-gold/90 text-midnight font-bold py-6 px-8 rounded-2xl transition-all hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 flex flex-col items-center gap-4 min-h-[140px] justify-center"
              >
                <div className={`w-12 h-12 relative ${platform.invertLogo ? "invert-logo" : ""}`}>
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .invert-logo {
          filter: invert(1) brightness(0);
        }
      `}</style>
    </section>
  )
}
