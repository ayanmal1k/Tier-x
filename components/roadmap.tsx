"use client"

import { motion } from "framer-motion"

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Phase I",
      title: "Foundation",
      items: ["Token Smart Contract Deployment", "Technical Documentation Release", "Core Team Formation", "Initial Liquidity Provision"],
    },
    {
      quarter: "Phase II",
      title: "Ecosystem Launch",
      items: ["Public Token Launch", "DEX Listing and Liquidity Pools", "Community Development Program", "First Engine Deployment"],
    },
    {
      quarter: "Phase III",
      title: "Infrastructure Expansion",
      items: ["Asset Management Platform", "Cross-Chain Bridge Integration", "Mobile Application Beta", "Strategic Partnership Network"],
    },
    {
      quarter: "Phase IV",
      title: "Full Ecosystem",
      items: ["All 8 Economic Pillars Operational", "Real-World Asset Tokenization", "Governance Implementation", "International Expansion"],
    },
    {
      quarter: "Phase V",
      title: "Global Network",
      items: ["Multi-Region Deployment", "Institutional Partnership Program", "Decentralized Governance Launch", "Humanitarian Development Funding"],
    },
  ]

  return (
    <section id="roadmap" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">Strategic Development Plan</h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Our strategic roadmap for building and expanding the TierX ecosystem across global markets.
          </p>
        </motion.div>

        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2" />

          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white" />

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-1/2"
                >
                  <div className={`${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <div className="inline-block px-3 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-2 uppercase tracking-wider">
                      {item.quarter}
                    </div>
                    <h3 className="text-title-lg font-headline text-ink mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className={`flex items-start gap-2 text-body-md text-muted ${index % 2 === 0 ? "justify-end" : ""}`}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-hairline" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-4 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white" />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-3 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-2 uppercase tracking-wider">
                    {item.quarter}
                  </div>
                  <h3 className="text-title-lg font-headline text-ink mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-body-md text-muted">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
