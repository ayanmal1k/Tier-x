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
        "TierX (TierX) is the upgraded sovereign token built to power a decentralized, trust-backed economic system for sovereign nations starting with Ayiti (Haiti). Backed by a 100 billion supply, TierX integrates real-world liquidity, digital identity, and financial restoration through on-chain smart contract protocols.",
    },
    {
      title: "Origin & Evolution",
      content:
        "Tier originated as a yield-generating asset token. TierX evolves this mission — scaling up its liquidity base, integrating military-grade economic engines, and enabling real-time distribution of funds via mobile and on-chain mechanisms. TierX is the first 'DeFi stimulus-grade' token to fund insurance, food, housing, and land control in a live economic crisis zone.",
    },
    {
      title: "Tokenomics",
      content:
        "- Total Supply: 100,000,000,000 (100 Billion)\n- Symbol: TIERX\n- Decimals: 18\n- Contract Owner: 0xbB80467caE0cFf80ec742860B813599BE97E9fBf\n- Yield Rate: 3%/mo for 12 months, then scalable to 7%\n- Vault Release: 100M every 30 days for 9 months\n- Governance Ready: Roles for Admin, Minter, Pauser",
    },
    {
      title: "Real-World Integrations",
      content:
        "- T-Rex Card (TierX Card): Swipe-enabled debit card linked to your TierX vaults.\n- HTGX Bridge: Pegged stable bridge for Haitian Gourde (HTG → HTGX → TierX → USDC → BTC).\n- TrustVaults: All vaults are backed by the Sceptre Dominion Private Trust and governed by divine trust law.\n- TierX Stipends: Tokenized real estate and vehicles offer monthly cash stipends.",
    },
    {
      title: "Vision Forward",
      content:
        "TierX is more than a token — it's a living treasury for sovereign nations. Starting with Ayiti, it will fund insurance, rebuild homes, purchase food, back schools, and create a new global economy for the underserved. Phase II will deploy to Jamaica, West Africa, and the Diaspora.",
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
            Whitepaper
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            TIERX TOKEN WHITE PAPER: SOVEREIGN ECONOMIC ENGINE OF THE NEW ERA
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
                  <span className="text-title-sm font-semibold text-ink">TIERX_Whitepaper.pdf</span>
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
                    TIERX TOKEN WHITE PAPER
                  </h1>
                  <p className="text-center text-primary font-medium mb-4">
                    SOVEREIGN ECONOMIC ENGINE OF THE NEW ERA
                  </p>
                  <p className="text-center text-body-sm text-muted mb-6">
                    Issued under the Authority of Sceptre Dominion Private Trust
                  </p>
                  <div className="border-t border-hairline pt-4 mt-8">
                    <p className="text-body-sm text-muted">
                      This document outlines the vision, tokenomics, and implementation of the TierX token ecosystem...
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
              Preview and Download Whitepaper
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

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-body-md text-ink">
                <span className="font-semibold text-primary">Issued by:</span> SCEPTRE DOMINION PRIVATE TRUST
                <br />
                Global Ecclesiastical Sovereign Asset Authority
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
