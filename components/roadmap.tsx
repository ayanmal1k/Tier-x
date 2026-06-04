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

  /* ── timeline tuning ──────────────────────────────── */
  const totalDuration = 6      // seconds for one full cycle
  const fillWindow = 0.7       // how long each circle takes to fill
  const holdWindow = 1.2       // how long all stay filled before reset
  const staggerStep = 0.9      // gap between each circle starting to fill

  return (
    <section id="roadmap" className="bg-canvas py-section overflow-hidden">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-20"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Strategic Development Plan
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Our strategic roadmap for building and expanding the TierX ecosystem across global markets.
          </p>
        </motion.div>
      </div>

      {/* ── Horizontal scroll container ── */}
      <div className="px-6">
        <div
          className="mx-auto overflow-x-auto pb-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="relative min-w-[1000px] lg:min-w-0">

            {/* ── Static connecting line ── */}
            <div className="absolute top-[42px] left-0 right-0 h-px bg-hairline" />

            {/* ── Animated connecting line (left to right) ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40 origin-left"
            />

            {/* ── Phase cards ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative grid grid-cols-5 gap-4"
            >
              {roadmapItems.map((item, index) => {
                const fillStart = index * staggerStep
                const fillEnd = fillStart + fillWindow
                const resetStart = totalDuration - holdWindow
                const isLastPhase = index === roadmapItems.length - 1

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="relative flex flex-col items-center"
                  >
                    {/* ── Marker ── */}
                    <div className="relative z-10 w-[22px] h-[22px] rounded-full bg-canvas border-[3px] border-primary mb-6 cursor-pointer">
                      {/* pulsing fill animation — left to right sequence */}
                      <motion.div
                        animate={{
                          scale: [0, 0, 1, 1, 0],
                        }}
                        transition={{
                          duration: totalDuration,
                          times: [
                            0,
                            fillStart / totalDuration,
                            fillEnd / totalDuration,
                            resetStart / totalDuration,
                            1,
                          ],
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 0.3,
                        }}
                        className="absolute inset-[3px] rounded-full bg-primary origin-center"
                      />

                      {/* expanding ring on its turn */}
                      {!isLastPhase && (
                        <motion.div
                          animate={{
                            scale: [0.8, 2.4],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: totalDuration,
                            times: [
                              0,
                              fillEnd / totalDuration,
                              (fillEnd + 0.4) / totalDuration,
                            ],
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.3,
                          }}
                          className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none"
                        />
                      )}

                      <span className="absolute inset-0 flex items-center justify-center text-caption-strong font-bold text-primary z-10 mix-blend-difference">
                        {index + 1}
                      </span>
                    </div>

                    {/* ── Card ── */}
                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: totalDuration,
                        times: [
                          0,
                          ((fillStart + fillEnd) / 2) / totalDuration,
                          fillEnd / totalDuration,
                        ],
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0.3,
                        delay: index * 0.05,
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
      </div>

      {/* ── Mobile hint ── */}
      <p className="md:hidden text-center text-caption text-muted mt-2">
        Scroll horizontally to view all phases
      </p>
    </section>
  )
}
