"use client"

import { motion } from "framer-motion"
import { Shield, Lock, BarChart3, RefreshCw, ArrowRight } from "lucide-react"

export default function Treasury() {
  const features = [
    {
      icon: Lock,
      title: "Timelock Vaults",
      description: "Structured release schedules ensure predictable liquidity and prevent market manipulation through time-locked vesting contracts.",
    },
    {
      icon: BarChart3,
      title: "Liquidity Coordination",
      description: "Automated liquidity management through smart contract-based treasury operations with transparent on-chain execution.",
    },
    {
      icon: RefreshCw,
      title: "Ecosystem Funding",
      description: "Sustainable capital allocation for ecosystem development, community programs, and infrastructure expansion.",
    },
    {
      icon: Shield,
      title: "Reserve Management",
      description: "Institutional-grade asset custody and reserve management under a structured framework with multi-role governance controls.",
    },
  ]

  return (
    <section id="treasury" className="relative bg-surface-dark overflow-hidden py-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,82,255,0.06),transparent_50%)]" />
      <div className="mx-auto px-6 relative" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-caption-strong text-primary font-semibold uppercase tracking-wider">
              Treasury
            </span>
          </div>
          <h2 className="text-display-sm font-headline text-on-dark mb-4">
            Treasury Infrastructure
          </h2>
          <p className="text-body-md text-on-dark-soft max-w-2xl mx-auto">
            Institutional-grade treasury systems with structured vaults, automated operations,
            and transparent on-chain governance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-surface-dark-elevated border border-white/[0.06] p-8 transition-all hover:border-white/[0.12]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-title-md font-semibold text-on-dark mb-2">{feature.title}</h3>
              <p className="text-body-md text-on-dark-soft">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Vault Release", value: "100M / 30 days", desc: "Structured liquidity distribution" },
            { label: "Treasury Reserve", value: "20%", desc: "Allocated for long-term stability" },
            { label: "Framework", value: "Institutional", desc: "Multi-role governance structure" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center rounded-xl bg-white/5 border border-white/5 p-6"
            >
              <div className="text-display-sm text-on-dark font-headline mb-1">{stat.value}</div>
              <div className="text-body-sm text-on-dark-soft">{stat.label}</div>
              <div className="text-caption text-on-dark-soft mt-1">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
