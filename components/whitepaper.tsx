"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
        "- T-Rex Card (TierX Card): Swipe-enabled debit card linked to your TierX vaults. Slogan: 'Swipe it. Live Free.'\n- HTGX Bridge: Pegged stable bridge for Haitian Gourde (HTG → HTGX → TierX → USDC → BTC).\n- TrustVaults: All vaults are backed by the Sceptre Dominion Private Trust and governed by divine trust law.\n- TierX Stipends: Tokenized real estate and vehicles offer monthly cash stipends to their original owners while the Trust uses the assets for yield.",
    },
    {
      title: "Vision Forward",
      content:
        "TierX is more than a token — it's a living treasury for sovereign nations. Starting with Ayiti, it will fund insurance, rebuild homes, purchase food, back schools, and create a new global economy for the underserved. Phase II will deploy to Jamaica, West Africa, and the Diaspora. The goal: to place $1 in every hand — backed by soul, not empire.",
    },
  ]

  const toggleSection = (index: number) => {
    if (expandedSection === index) {
      setExpandedSection(null)
    } else {
      setExpandedSection(index)
    }
  }

  return (
    <>
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #FFD700 #1F1F1F;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1F1F1F;
          border-radius: 6px;
          border: 1px solid rgba(255, 215, 0, 0.2);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #FFD700 0%, #FFD700CC 100%);
          border-radius: 6px;
          border: 2px solid #1F1F1F;
          background-clip: padding-box;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FFD700 0%, #FFD700 100%);
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #1F1F1F;
        }
      `}</style>

      <section id="whitepaper" className="py-20 relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-steel/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">Whitepaper</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              TIERX TOKEN WHITE PAPER: SOVEREIGN ECONOMIC ENGINE OF THE NEW ERA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-graphite/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 h-[600px] relative overflow-hidden"
            >
              {/* PDF Preview */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                {/* PDF Header */}
                <div className="bg-midnight p-4 border-b border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileText className="text-gold" size={20} />
                    <span className="font-medium">TIERX_Whitepaper.pdf</span>
                  </div>
                  <span className="text-xs text-white/50">8 pages</span>
                </div>

                {/* PDF Content Preview with Custom Scrollbar */}
                <div className="flex-1 overflow-auto p-6 bg-white/5 custom-scrollbar">
                  <div className="bg-midnight/80 p-8 rounded-lg border border-white/10 mb-6">
                    <div className="flex justify-center mb-6">
                      <div className="h-16 w-16 rounded-full bg-gold p-1 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={56}
                          height={56}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <h1 className="text-center text-2xl font-bold mb-2">TIERX TOKEN WHITE PAPER</h1>
                    <h2 className="text-center text-gold mb-4">SOVEREIGN ECONOMIC ENGINE OF THE NEW ERA</h2>
                    <p className="text-center text-sm text-white/70 mb-6">
                      Issued under the Authority of Sceptre Dominion Private Trust
                    </p>
                    <div className="border-t border-white/10 pt-4 mt-8">
                      <p className="text-sm text-white/70">
                        This document outlines the vision, tokenomics, and implementation of the TierX token
                        ecosystem...
                      </p>
                    </div>
                  </div>

                  <div className="bg-midnight/80 p-6 rounded-lg border border-white/10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 p-0.5 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold">1. Executive Summary</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-4">
                      TierX (TierX) is the upgraded sovereign token built to power a decentralized, trust-backed
                      economic system for sovereign nations starting with Ayiti (Haiti). Backed by a 100 billion supply,
                      TierX integrates real-world liquidity, digital identity, and financial restoration through
                      on-chain smart contract protocols.
                    </p>
                  </div>

                  <div className="bg-midnight/80 p-6 rounded-lg border border-white/10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 p-0.5 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold">2. Origin & Evolution</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-4">
                      Tier originated as a yield-generating asset token. TierX evolves this mission — scaling up its
                      liquidity base, integrating military-grade economic engines, and enabling real-time distribution
                      of funds via mobile and on-chain mechanisms.
                    </p>
                  </div>

                  <div className="bg-midnight/80 p-6 rounded-lg border border-white/10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 p-0.5 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold">3. Tokenomics</h3>
                    </div>
                    <div className="text-sm text-white/70 space-y-2">
                      <p>• Total Supply: 100,000,000,000 (100 Billion)</p>
                      <p>• Symbol: TIERX</p>
                      <p>• Decimals: 18</p>
                      <p>• Yield Rate: 3%/mo for 12 months, then scalable to 7%</p>
                      <p>• Vault Release: 100M every 30 days for 9 months</p>
                    </div>
                  </div>

                  <div className="bg-midnight/80 p-6 rounded-lg border border-white/10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 p-0.5 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold">4. 8 Engines of TierX</h3>
                    </div>
                    <div className="text-sm text-white/70 space-y-2">
                      <p>
                        1. <strong>Deplete the Reserve</strong> – Swap loop engine
                      </p>
                      <p>
                        2. <strong>Crypto University</strong> – Learn-and-earn mechanism
                      </p>
                      <p>
                        3. <strong>Tokenize Everything</strong> – Real estate & assets
                      </p>
                      <p>
                        4. <strong>Fracture</strong> – Time-lock reward engine
                      </p>
                      <p>
                        5. <strong>Lottery Vault</strong> – Randomized draws
                      </p>
                      <p>
                        6. <strong>Free Healthcare Engine</strong> – $12/year campaign
                      </p>
                      <p>
                        7. <strong>Stimulus Engine</strong> – Community airdrops
                      </p>
                      <p>
                        8. <strong>Infinity Engine</strong> – Auto-yield mechanism
                      </p>
                    </div>
                  </div>

                  <div className="bg-midnight/80 p-6 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 p-0.5 flex items-center justify-center">
                        <Image
                          src="/tierx-logo.png"
                          alt="TierX Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold">5. Vision Forward</h3>
                    </div>
                    <p className="text-sm text-white/70">
                      TierX is more than a token — it's a living treasury for sovereign nations. Starting with Ayiti, it
                      will fund insurance, rebuild homes, purchase food, back schools, and create a new global economy
                      for the underserved.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4 mb-8">
                <a
                  href="/TierX_White_Paper_Edition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gold hover:bg-gold/90 text-midnight font-bold py-3 px-6 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  Preview and Download Whitepaper
                </a>
              </div>

              <div className="space-y-4">
                {whitepaperSections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-graphite/30 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden"
                  >
                    <button
                      className="w-full p-4 flex justify-between items-center text-left"
                      onClick={() => toggleSection(index)}
                    >
                      <h3 className="font-medium text-gold">{section.title}</h3>
                      {expandedSection === index ? (
                        <ChevronUp size={20} className="text-gold" />
                      ) : (
                        <ChevronDown size={20} className="text-gold" />
                      )}
                    </button>

                    {expandedSection === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-white/70 whitespace-pre-line">{section.content}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-neon/10 border border-neon/20 rounded-xl">
                <p className="text-sm text-white/80">
                  <span className="font-bold text-neon">Issued by:</span> SCEPTRE DOMINION PRIVATE TRUST
                  <br />
                  Global Ecclesiastical Sovereign Asset Authority
                  <br />
                  "By Divine Right, Under Natural Law, For the Protection of Living Souls"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
