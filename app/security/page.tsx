"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Shield, Copy, Check, Eye, FileCheck, Users, ScrollText,
  AlertTriangle, ExternalLink, ArrowLeft, Lock, Wallet,
  ChevronDown, ChevronUp
} from "lucide-react"
import Footer from "@/components/footer"
/* ─── animation presets ─────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
/* ─── data ───────────────────────────────────────────────── */
const features = [
  {
    icon: FileCheck,
    title: "Verified Contract",
    badge: "On-Chain",
    badgeColor: "#05b169",
    description: "Smart contract deployed on Ethereum mainnet. Source code is fully verified on Etherscan for independent public review — no hidden logic.",
  },
  {
    icon: Users,
    title: "Multi-Role Governance",
    badge: "Active",
    badgeColor: "#0052ff",
    description: "Role-based access control with segregated admin, minter, and pauser roles — preventing single points of failure across operational security.",
  },
  {
    icon: ScrollText,
    title: "Transparent Operations",
    badge: "Live",
    badgeColor: "#d4a853",
    description: "All treasury operations are executed on-chain with publicly verifiable transactions and real-time balance tracking. Nothing is hidden.",
  },
  {
    icon: Eye,
    title: "Audit Status",
    badge: "In Progress",
    badgeColor: "#7c828a",
    description: "A comprehensive third-party smart contract audit is currently underway. Results will be published in full upon completion — no exceptions.",
  },
]
const disclosures = [
  { label: "Audit Status", value: "In Progress", icon: Eye },
  { label: "Smart Contract", value: "Verified on Etherscan", icon: FileCheck },
  { label: "Admin Wallet", value: "Multi-sig enabled", icon: Lock },
  { label: "Treasury Wallet", value: "On-chain transparent", icon: Wallet },
  { label: "Liquidity Pools", value: "Publicly listed", icon: ScrollText },
]
const riskItems = [
  {
    title: "Market Risk",
    body: "Cryptocurrency investments carry inherent market risk. Past performance does not guarantee future results.",
  },
  {
    title: "Token Volatility",
    body: "TIERX token value may fluctuate based on market conditions, adoption, and ecosystem development.",
  },
  {
    title: "No Guaranteed Returns",
    body: "No guaranteed profit or fixed returns are promised or implied by any TierX documentation or communications.",
  },
  {
    title: "Smart Contract Risk",
    body: "Despite best efforts in development and review, smart contracts may contain unforeseen vulnerabilities.",
  },
  {
    title: "Liquidity Risk",
    body: "Token liquidity depends on market participation and exchange availability at any given time.",
  },
  {
    title: "Regulatory Risk",
    body: "The regulatory landscape for digital assets continues to evolve across jurisdictions worldwide.",
  },
]
const walletSafety = [
  "Always verify the contract address from official TierX sources before transacting.",
  "Never share your private keys or seed phrases with anyone under any circumstances.",
  "Use hardware wallets or secure software wallets for storing TIERX tokens.",
  "Be cautious of impersonation accounts and unofficial social channels.",
]
/* ─── component ──────────────────────────────────────────── */
export default function SecurityPage() {
  const [copied, setCopied] = useState(false)
  const [openRisk, setOpenRisk] = useState<number | null>(null)
  const contractAddress = "0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* silent */ }
  }
  return (
    <div className="min-h-screen bg-canvas">
      {/* ── Sticky mini header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-hairline">
        <div className="mx-auto px-6 flex items-center justify-between" style={{ height: "64px", maxWidth: "1200px" }}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8">
              <Image src="/tierx-logo.png" alt="TierX" width={32} height={32} className="rounded-full" />
            </div>
            <span className="text-lg font-semibold text-ink">TierX</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </header>
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-surface-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,82,255,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,83,0.06),transparent_50%)] pointer-events-none" />
        {/* animated rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          {[160, 240, 320, 400].map((r, i) => (
            <motion.div
              key={r}
              className="absolute rounded-full border border-white/[0.04]"
              style={{ width: r * 2, height: r * 2, left: -r, top: -r }}
              animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: "800px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8 mx-auto"
          >
            <Shield size={30} className="text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
            className="text-caption-strong uppercase tracking-widest text-primary mb-4 font-semibold"
          >
            Security & Transparency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-display-sm font-headline text-on-dark mb-6"
          >
            Built to Be Trusted
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="text-body-md text-on-dark-soft max-w-lg mx-auto leading-relaxed"
          >
            TierX prioritises security, radical transparency, and institutional-grade standards.
            Everything is on-chain and publicly verifiable — always.
          </motion.p>
        </div>
      </section>
      {/* ── Main content ── */}
      <div className="mx-auto px-6 py-20" style={{ maxWidth: "1200px" }}>
        {/* Security pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-caption-strong uppercase tracking-widest text-primary mb-3 font-semibold">Core Pillars</p>
            <h2 className="text-title-lg font-headline text-ink">Security Framework</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.09)", transition: { duration: 0.25, ease: "easeOut" } }}
                  className="rounded-2xl border border-hairline bg-surface-card p-7 cursor-default"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <Icon size={20} className="text-primary" strokeWidth={1.75} />
                    </div>
                    <span
                      className="text-caption-strong px-2.5 py-1 rounded-full font-semibold"
                      style={{ backgroundColor: `${feature.badgeColor}15`, color: feature.badgeColor }}
                    >
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-title-md font-semibold text-ink mb-2">{feature.title}</h3>
                  <p className="text-body-md text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="rounded-2xl border border-hairline bg-surface-card p-8 mb-20"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="text-primary" size={18} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-title-md font-semibold text-ink">Official Contract Address</h3>
                <p className="text-body-sm text-muted">TIERX token on Ethereum mainnet</p>
              </div>
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={copyToClipboard}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
                style={{ height: "40px" }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span key="check" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                      <Check size={14} /> Copied
                    </motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                      <Copy size={14} /> Copy
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-pill border border-hairline px-4 text-sm font-medium text-ink hover:bg-surface-soft transition-colors"
                style={{ height: "40px" }}
              >
                <ExternalLink size={14} /> Etherscan
              </a>
            </div>
          </div>
          <div className="bg-surface-soft rounded-xl px-5 py-3.5 border border-hairline">
            <p className="font-mono text-body-sm text-ink break-all">{contractAddress}</p>
          </div>
        </motion.div>
        {/* Security Status */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <p className="text-caption-strong uppercase tracking-widest text-primary mb-3 font-semibold">Status</p>
            <h2 className="text-title-lg font-headline text-ink">Security Status</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {disclosures.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-hairline bg-surface-card p-5 text-center cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
                    <Icon size={16} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="text-caption text-muted mb-1">{item.label}</p>
                  <p className="text-body-sm font-semibold text-ink">{item.value}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
        {/* Risk Disclosures — accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <p className="text-caption-strong uppercase tracking-widest text-primary mb-3 font-semibold">Legal</p>
            <h2 className="text-title-lg font-headline text-ink">Risk Disclosures</h2>
            <p className="text-body-md text-muted mt-2 max-w-lg mx-auto">
              Please review the following risk factors before participating in the TierX ecosystem.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto rounded-2xl border border-hairline overflow-hidden divide-y divide-hairline bg-surface-card">
            {riskItems.map((item, index) => (
              <motion.div key={index} layout>
                <button
                  onClick={() => setOpenRisk(openRisk === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-soft transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-semantic-down/60 flex-shrink-0" />
                    <span className="text-body-md font-medium text-ink">{item.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openRisk === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ChevronDown size={16} className="text-muted flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openRisk === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-body-sm text-muted leading-relaxed pl-[calc(24px+20px)]">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Wallet Safety */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wallet size={18} className="text-primary" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-title-md font-semibold text-ink">Wallet Safety Guide</h3>
              <p className="text-body-sm text-muted">Essential tips to protect your assets</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {walletSafety.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <p className="text-body-sm text-muted leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center py-8 border-t border-hairline"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle size={14} className="text-muted" />
            <span className="text-caption-strong text-muted font-semibold uppercase tracking-wider">No Guaranteed Profit Statement</span>
          </div>
          <p className="text-body-sm text-muted max-w-2xl mx-auto leading-relaxed">
            TierX does not guarantee any fixed returns, yields, or profits. All participation is subject
            to market risks and should be undertaken based on your own independent research and risk assessment.
          </p>

        </motion.div>

      </div>
      <Footer />
    </div>

  )
}
