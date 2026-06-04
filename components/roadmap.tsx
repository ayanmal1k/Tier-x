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
      items: [
        "T-Rex Card Development",
        "HTGX Bridge Implementation",
        "Partnerships with Local Businesses",
        "Mobile App Beta",
      ],
    },
    {
      quarter: "Q4 2026",
      title: "Ecosystem Growth",
      items: [
        "All 8 Engines Fully Operational",
        "International Expansion Planning",
        "Governance System Implementation",
        "Real Estate Tokenization Platform",
      ],
    },
    {
      quarter: "Q1 2027",
      title: "Global Impact",
      items: [
        "Expansion to Jamaica & West Africa",
        "Other Caribbean Islands Integration",
        "Worldwide Deployment",
        "Enhanced Yield Mechanisms",
        "Decentralized Governance Launch",
        "Humanitarian Project Funding",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 relative bg-graphite/20">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-steel/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">Roadmap</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our strategic plan to build and expand the TierX ecosystem globally.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2"></div>

          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-midnight"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-1/2"
                >
                  <div className={`${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-2">
                      {item.quarter}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <ul className="space-y-2 text-white/70">
                      {item.items.map((listItem, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
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

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-4 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-4 border-midnight"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-2">
                    {item.quarter}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-white/70">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
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
