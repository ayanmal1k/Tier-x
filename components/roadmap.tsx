"use client"

import { motion } from "framer-motion"

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Foundation",
      items: ["Token Smart Contract Development", "Whitepaper Release", "Team Formation", "Initial Private Sale"],
    },
    {
      quarter: "Q2 2025",
      title: "Launch Phase",
      items: ["Public Token Launch", "Exchange Listings", "Community Building", "First Engine Activation"],
    },
    {
      quarter: "Q3 2026",
      title: "Expansion",
      items: ["T-Rex Card Development", "HTGX Bridge Implementation", "Partnerships with Local Businesses", "Mobile App Beta"],
    },
    {
      quarter: "Q4 2026",
      title: "Ecosystem Growth",
      items: ["All 8 Engines Fully Operational", "International Expansion Planning", "Governance System Implementation", "Real Estate Tokenization Platform"],
    },
    {
      quarter: "Q1 2027",
      title: "Global Impact",
      items: ["Expansion to Jamaica & West Africa", "Other Caribbean Islands Integration", "Worldwide Deployment", "Enhanced Yield Mechanisms", "Decentralized Governance Launch", "Humanitarian Project Funding"],
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
          <h2 className="text-display-sm font-display text-ink mb-4">Roadmap</h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Our strategic plan to build and expand the TierX ecosystem globally.
          </p>
        </motion.div>

        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2"></div>

          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-1/2"
                >
                  <div className={`${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <div className={`inline-block px-3 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-2 uppercase tracking-wider ${index % 2 === 0 ? "" : ""}`}>
                      {item.quarter}
                    </div>
                    <h3 className="text-title-lg font-display text-ink mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className={`flex items-start gap-2 text-body-md text-muted ${index % 2 === 0 ? "justify-end" : ""}`}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-hairline"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-4 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white"></div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-3 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-2 uppercase tracking-wider">
                    {item.quarter}
                  </div>
                  <h3 className="text-title-lg font-display text-ink mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-body-md text-muted">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
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
