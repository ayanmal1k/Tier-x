"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

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

  const totalDuration = 5
  const fillWindow = 0.6
  const staggerStep = 0.7
  const resetDuration = 0.5

  return (
    <section id="roadmap" className="bg-canvas py-16 md:py-section overflow-hidden">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.75px] sm:text-display-sm font-headline text-ink mb-4">
            Strategic Development Plan
          </h2>
          <p className="text-base md:text-body-md text-muted max-w-2xl mx-auto">
            Our strategic roadmap for building and expanding the TierX ecosystem across global markets.
          </p>
        </motion.div>

        {/* Mobile: vertical timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="lg:hidden relative pl-10"
        >
          <div className="absolute top-3 bottom-3 left-[10px] w-px bg-hairline" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute top-3 bottom-3 left-[10px] w-px bg-gradient-to-b from-primary/40 via-primary to-primary/40 origin-top"
          />

          {roadmapItems.map((item, index) => {
            const t0 = 0
            const tFillStart = (index * staggerStep) / totalDuration
            const tFillEnd = (index * staggerStep + fillWindow) / totalDuration
            const tResetStart = 1 - resetDuration / totalDuration

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex items-start gap-4 mb-6 last:mb-0"
              >
                <div className="absolute -left-10 top-2 z-10 w-[22px] h-[22px] rounded-full bg-canvas border-[3px] border-primary flex-shrink-0">
                  <motion.div
                    animate={{ scale: [0, 0, 1, 1, 0] }}
                    transition={{
                      duration: totalDuration,
                      times: [t0, tFillStart, tFillEnd, tResetStart, 1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                    className="absolute inset-[3px] rounded-full bg-primary"
                  />
                </div>

                <motion.div
                  animate={{ y: [0, 0, -4, 0, 0] }}
                  transition={{
                    duration: totalDuration,
                    times: [t0, tFillStart, (tFillStart + tFillEnd) / 2, tFillEnd, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.2,
                  }}
                  className="group w-full rounded-2xl border border-hairline bg-surface-card p-5"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
                >
                  <div className="inline-block px-2.5 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-3 uppercase tracking-wider group-hover:bg-primary/15 transition-colors">
                    {item.quarter}
                  </div>
                  <h3 className="text-title-sm font-semibold text-ink mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-body-sm text-muted">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="leading-snug">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[42px] left-0 right-0 h-px bg-hairline" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40 origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="relative grid grid-cols-5 gap-4"
          >
            {roadmapItems.map((item, index) => {
              const t0 = 0
              const tFillStart = (index * staggerStep) / totalDuration
              const tFillEnd = (index * staggerStep + fillWindow) / totalDuration
              const tResetStart = 1 - resetDuration / totalDuration

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative flex flex-col items-center"
                >
                  <div className="relative z-10 w-[22px] h-[22px] rounded-full bg-canvas border-[3px] border-primary mb-6">
                    <motion.div
                      animate={{ scale: [0, 0, 1, 1, 0] }}
                      transition={{
                        duration: totalDuration,
                        times: [t0, tFillStart, tFillEnd, tResetStart, 1],
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0.2,
                      }}
                      className="absolute inset-[3px] rounded-full bg-primary"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, 0, -6, 0, 0] }}
                    transition={{
                      duration: totalDuration,
                      times: [t0, tFillStart, (tFillStart + tFillEnd) / 2, tFillEnd, 1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                    className="group w-full rounded-2xl border border-hairline bg-surface-card p-5 flex-1 flex flex-col"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
                  >
                    <div className="inline-block self-start px-2.5 py-1 rounded-pill bg-primary/10 text-primary text-caption-strong font-semibold mb-3 uppercase tracking-wider group-hover:bg-primary/15 transition-colors">
                      {item.quarter}
                    </div>
                    <h3 className="text-title-sm font-semibold text-ink mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ul className="space-y-1.5 mt-auto">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-2 text-body-sm text-muted">
                          <span className="inline-block w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="leading-snug">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
