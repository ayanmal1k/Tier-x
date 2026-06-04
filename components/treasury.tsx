"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { IconLock, IconChartBar, IconRefresh, IconShield, IconArrowRight } from "@tabler/icons-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const pillars = [
  { icon: IconLock,      label: "Timelock Vaults"         },
  { icon: IconChartBar,  label: "Liquidity Coordination"  },
  { icon: IconRefresh,   label: "Ecosystem Funding"       },
  { icon: IconShield,    label: "Reserve Management"      },
]

const stats = [
  { value: "100M",          label: "Vault Release / 30 days" },
  { value: "20%",           label: "Treasury Reserve"        },
  { value: "Institutional", label: "Governance Framework"    },
]

export default function Treasury() {
  return (
    <section id="treasury" className="relative bg-surface-dark overflow-hidden py-16 md:py-section">
      {/* background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,82,255,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1200px" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-caption-strong uppercase tracking-widest text-primary mb-3 font-semibold">
            Infrastructure
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.75px] sm:text-display-sm font-headline text-on-dark mb-4">
            Treasury Infrastructure
          </h2>
          <p className="text-base md:text-body-md text-on-dark-soft max-w-xl mx-auto leading-relaxed px-2 md:px-0">
            Institutional-grade treasury systems with structured vaults, automated operations,
            and transparent on-chain governance.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center rounded-xl bg-white/[0.04] border border-white/[0.06] py-5 md:py-6 px-4"
            >
              <div className="text-[28px] sm:text-display-sm font-headline text-on-dark mb-1">{stat.value}</div>
              <div className="text-caption sm:text-body-sm text-on-dark-soft">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Pillars strip (trust-bar style) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14, ease }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-y-4 sm:gap-y-6 gap-x-2 border border-white/[0.06] rounded-2xl px-5 sm:px-8 py-5 sm:py-7 bg-white/[0.02] mb-10 md:mb-12"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 sm:border-r sm:border-white/[0.06] sm:last:border-0 sm:px-4 first:pl-0 last:pr-0"
              >
                <Icon size={18} className="text-primary flex-shrink-0" strokeWidth={1.75} />
                <span className="text-caption sm:text-body-sm font-medium text-on-dark-soft">{p.label}</span>
              </div>
            )
          })}
        </motion.div>

        {/* ── CTA to Security ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="rounded-2xl border border-primary/25 bg-primary/[0.06] px-5 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <IconShield size={20} className="text-primary" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-title-sm sm:text-title-md font-semibold text-on-dark mb-0.5">
                Security &amp; Transparency
              </h3>
              <p className="text-caption sm:text-body-sm text-on-dark-soft">
                Verified contract · Multi-sig governance · On-chain disclosures · Risk documentation
              </p>
            </div>
          </div>
          <Link
            href="/security"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-active transition-colors flex-shrink-0 group w-full sm:w-auto"
          >
            Security
            <IconArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
