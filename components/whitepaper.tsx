"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  IconFileText, IconDownload, IconChevronDown, IconArrowRight,
  IconBookmark, IconClock, IconFile, IconCircleCheck,
  IconBook2, IconStack2, IconChartPie, IconBuildingBank,
  IconRocket,
} from "@tabler/icons-react"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const sectionIcons = [
  IconBook2,
  IconStack2,
  IconChartPie,
  IconBuildingBank,
  IconRocket,
]

const sectionColors = [
  "#0052ff",
  "#05b169",
  "#d4a853",
  "#7c828a",
  "#cf202f",
]

export default function Whitepaper() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  const whitepaperSections = [
    {
      title: "Executive Summary",
      content:
        "TierX (TIERX) is a private digital wealth infrastructure token designed to power a decentralized, trust-backed economic system. With a 100 billion supply, TierX integrates real-world liquidity, digital identity, and financial restoration through on-chain smart contract protocols.",
      bullets: [
        "Private digital wealth infrastructure",
        "100B fixed supply on Ethereum",
        "Institutional-grade governance",
      ],
    },
    {
      title: "Origin & Evolution",
      content:
        "TierX evolved from a yield-generating asset token into a full-spectrum digital wealth infrastructure platform. The protocol scales liquidity operations, integrates automated economic engines, and enables real-time distribution of funds via mobile and on-chain mechanisms.",
      bullets: [
        "Phase 1: Asset token",
        "Phase 2: Liquidity engine",
        "Phase 3: Full infrastructure",
      ],
    },
    {
      title: "Tokenomics",
      content:
        "Total Supply: 100,000,000,000 (100B)\nSymbol: TIERX\nDecimals: 18\nContract: 0xed500EF5e2cdF642ce715675a67A31bDe09a7a97\nVault Release: 100M every 30 days\nGovernance: Admin, Minter, Pauser roles",
      bullets: [
        "Fixed supply of 100 billion",
        "Ethereum ERC-20 standard",
        "Multi-role governance",
      ],
    },
    {
      title: "Ecosystem Integration",
      content:
        "TierX Asset Management: Portfolio tracking and treasury management dashboard.\nCross-Chain Bridge: Seamless asset transfers across blockchain networks.\nSmart Vaults: Automated treasury operations with timelock and yield mechanisms.\nMulti-Role Governance: Role-based access control for operational security.",
      bullets: [
        "Asset management",
        "Cross-chain bridge",
        "Smart vaults",
      ],
    },
    {
      title: "Vision & Roadmap",
      content:
        "TierX is building a comprehensive digital wealth infrastructure ecosystem. Initial focus on core protocol development and liquidity operations, expanding into real-world asset tokenization, cross-border payment infrastructure, and community economic development programs.",
      bullets: [
        "Core protocol development",
        "Real-world asset tokenization",
        "Community economic programs",
      ],
    },
  ]

  const docStats = [
    { icon: IconFile, label: "Pages", value: "8" },
    { icon: IconClock, label: "Version", value: "v1.0" },
    { icon: IconBookmark, label: "Format", value: "PDF" },
  ]

  return (
    <section id="whitepaper" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Technical Documentation
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Comprehensive technical overview of the TierX protocol, tokenomics,
            ecosystem architecture, and roadmap.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Document preview card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-2 lg:sticky lg:top-24"
          >
            <div className="group relative">
              {/* background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* main card */}
              <div
                className="relative rounded-2xl border border-hairline bg-surface-card overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)" }}
              >
                {/* gradient bar at top */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-primary/40" />

                {/* document browser bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-hairline bg-surface-soft">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-semantic-down/70" />
                    <div className="w-3 h-3 rounded-full bg-accent-yellow/70" />
                    <div className="w-3 h-3 rounded-full bg-semantic-up/70" />
                  </div>
                  <div className="flex-1 ml-2 flex items-center gap-2 bg-canvas border border-hairline rounded-md px-3 py-1.5">
                    <IconFileText size={14} className="text-muted flex-shrink-0" />
                    <span className="text-caption text-muted font-mono truncate">
                      TIERX_White_Paper_Edition.pdf
                    </span>
                  </div>
                </div>

                {/* document content */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-canvas to-surface-soft">
                  {/* logo */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-20 h-20 rounded-2xl bg-primary p-2 flex items-center justify-center mx-auto mb-6"
                    style={{ boxShadow: "0 8px 24px rgba(0,82,255,0.25)" }}
                  >
                    <Image
                      src="/tierx-logo.png"
                      alt="TierX"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  <h3 className="text-center text-title-lg font-headline text-ink mb-2">
                    TIERX WHITE PAPER
                  </h3>
                  <p className="text-center text-caption-strong text-primary font-semibold uppercase tracking-widest mb-1">
                    Edition 1.0
                  </p>
                  <p className="text-center text-body-sm text-muted mb-8">
                    Private Digital Wealth Infrastructure
                  </p>

                  {/* doc stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {docStats.map((stat, i) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ y: -2 }}
                          className="text-center rounded-xl bg-canvas border border-hairline p-3"
                        >
                          <Icon size={16} className="text-primary mx-auto mb-1" />
                          <p className="text-caption-strong text-muted uppercase tracking-wider mb-0.5">
                            {stat.label}
                          </p>
                          <p className="text-title-sm font-semibold text-ink">{stat.value}</p>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* download button */}
                  <motion.a
                    href="/TierX_White_Paper_Edition.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3.5 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active w-full group/btn"
                  >
                    <IconDownload size={18} />
                    Download Whitepaper
                    <IconArrowRight size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </motion.a>
                </div>
              </div>

              {/* floating accent card behind */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-hairline bg-surface-card" />
            </div>
          </motion.div>

          {/* ── Sections accordion ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="lg:col-span-3 space-y-3"
          >
            {whitepaperSections.map((section, index) => {
              const Icon = sectionIcons[index]
              const color = sectionColors[index]
              const isOpen = expandedSection === index
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-surface-card"
                      : "border-hairline bg-surface-card hover:border-hairline-soft"
                  }`}
                  style={isOpen ? { boxShadow: "0 8px 32px rgba(0,82,255,0.08)" } : {}}
                >
                  <button
                    onClick={() => setExpandedSection(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left group"
                  >
                    {/* icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{
                        backgroundColor: isOpen ? `${color}20` : `${color}10`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={22} style={{ color }} strokeWidth={1.75} />
                    </motion.div>

                    {/* title + number */}
                    <div className="flex-1 min-w-0">
                      <p className="text-caption-strong text-muted uppercase tracking-widest font-mono mb-1">
                        0{index + 1}
                      </p>
                      <h3
                        className={`text-title-md font-headline transition-colors ${
                          isOpen ? "text-primary" : "text-ink group-hover:text-primary"
                        }`}
                      >
                        {section.title}
                      </h3>
                    </div>

                    {/* chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? "bg-primary text-on-primary" : "bg-surface-soft text-muted"
                      }`}
                    >
                      <IconChevronDown size={16} strokeWidth={2.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: ease }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="pl-16 space-y-4">
                            <p className="text-body-md text-muted leading-relaxed whitespace-pre-line">
                              {section.content}
                            </p>

                            {/* bullet points */}
                            <ul className="space-y-2 pt-2 border-t border-hairline-soft">
                              {section.bullets.map((bullet, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease }}
                                  className="flex items-start gap-2.5 text-body-sm text-ink"
                                >
                                  <IconCircleCheck size={16} className="text-primary flex-shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
