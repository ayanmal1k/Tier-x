"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Whitepaper() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  const whitepaperSections = [
    {
      title: "Executive Summary",
      content:
        "TierX (TIERX) is a private digital wealth infrastructure token designed to power a decentralized, trust-backed economic system. With a 100 billion supply, TierX integrates real-world liquidity, digital identity, and financial restoration through on-chain smart contract protocols.",
    },
    {
      title: "Origin & Evolution",
      content:
        "TierX evolved from a yield-generating asset token into a full-spectrum digital wealth infrastructure platform. The protocol scales liquidity operations, integrates automated economic engines, and enables real-time distribution of funds via mobile and on-chain mechanisms.",
    },
    {
      title: "Tokenomics",
      content:
        "- Total Supply: 100,000,000,000 (100 Billion)\n- Symbol: TIERX\n- Decimals: 18\n- Contract: 0xed500EF5e2cdF642ce715675a67A31bDe09a7a97\n- Vault Release: 100M every 30 days\n- Governance Ready: Roles for Admin, Minter, Pauser",
    },
    {
      title: "Ecosystem Integration",
      content:
        "- TierX Asset Management: Portfolio tracking and treasury management dashboard.\n- Cross-Chain Bridge: Seamless asset transfers across blockchain networks.\n- Smart Vaults: Automated treasury operations with timelock and yield mechanisms.\n- Multi-Role Governance: Role-based access control for operational security.",
    },
    {
      title: "Vision & Roadmap",
      content:
        "TierX is building a comprehensive digital wealth infrastructure ecosystem. Initial focus on core protocol development and liquidity operations, expanding into real-world asset tokenization, cross-border payment infrastructure, and community economic development programs.",
    },
  ]

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  return (
    <section id="whitepaper" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-display text-ink mb-4">
            Technical Documentation
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Comprehensive technical overview of the TierX protocol, tokenomics, ecosystem architecture, and roadmap.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-hairline bg-surface-card p-6 h-[600px] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
              <div className="bg-surface-soft p-4 border-b border-hairline flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  <span className="text-title-sm font-semibold text-ink">TIERX_Technical_Overview.pdf</span>
                </div>
                <span className="text-body-sm text-muted">8 pages</span>
              </div>

              <div className="flex-1 overflow-auto p-6 bg-surface-soft/50">
                <div className="bg-surface-card p-8 rounded-lg border border-hairline mb-6">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary p-1 flex items-center justify-center">
                      <Image
                        src="/tierx-logo.png"
                        alt="TierX Logo"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-center text-title-lg font-display text-ink mb-2">
                    TIERX TECHNICAL OVERVIEW
                  </h1>
                  <p className="text-center text-primary font-medium mb-4">
                    Private Digital Wealth Infrastructure
                  </p>
                  <p className="text-center text-body-sm text-muted mb-6">
                    Protocol Documentation v1.0
                  </p>
                  <div className="border-t border-hairline pt-4 mt-8">
                    <p className="text-body-sm text-muted">
                      This document outlines the vision, tokenomics, architecture, and implementation
                      of the TierX ecosystem...
                    </p>
                  </div>
                </div>

                {whitepaperSections.slice(0, 3).map((section, i) => (
                  <div key={i} className="bg-surface-card p-6 rounded-lg border border-hairline mb-6">
                    <h3 className="text-title-md font-semibold text-primary mb-3">
                      {i + 1}. {section.title}
                    </h3>
                    <p className="text-body-md text-body">{section.content.substring(0, 120)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="/TierX_White_Paper_Edition.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active w-full mb-8"
              style={{ height: "56px" }}
            >
              <Download size={20} />
              Download Full Document
            </a>

            <div className="space-y-3">
              {whitepaperSections.map((section, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-hairline bg-surface-card overflow-hidden"
                >
                  <button
                    className="w-full p-5 flex justify-between items-center text-left"
                    onClick={() => toggleSection(index)}
                  >
                    <h3 className="text-title-md font-semibold text-ink">
                      {index + 1}. {section.title}
                    </h3>
                    {expandedSection === index ? (
                      <ChevronUp size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-muted flex-shrink-0" />
                    )}
                  </button>

                  {expandedSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-body-md text-body whitespace-pre-line">{section.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
