"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import {
  IconShieldCheck, IconLockSquare, IconActivity, IconAlertTriangle,
  IconCheck, IconCopy, IconExternalLink, IconWallet, IconKey,
  IconDeviceMobile, IconAlertOctagon, IconInfoCircle, IconArrowRight,
  IconShield, IconFileCheck, IconUsers, IconFileDescription,
  IconEye, IconFingerprint, IconClock, IconServer,
} from "@tabler/icons-react"

/* ─── animation presets ─────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const itemSlideRight = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

const itemSlideLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

/* ─── animated counter ─────────────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 1.4, ease: "easeOut" })
      return () => controls.stop()
    }
  }, [inView, value, motionValue])

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

/* ─── data ──────────────────────────────────────────────── */
const quickStats = [
  { icon: IconShieldCheck,    label: "Contract Status",  value: "Verified",        color: "#05b169" },
  { icon: IconFingerprint,    label: "Admin Controls",   value: "Multi-Sig",       color: "#0052ff" },
  { icon: IconActivity,       label: "On-Chain Audit",   value: "Live",            color: "#d4a853" },
  { icon: IconClock,          label: "Audit Status",     value: "In Progress",     color: "#cf202f" },
]

const features = [
  {
    icon: IconFileCheck,
    title: "Verified Smart Contract",
    description: "TierX is deployed on Ethereum mainnet with source code verified on Etherscan for full transparency and independent review.",
    bullets: ["Etherscan verified", "Open-source code", "Publicly auditable"],
  },
  {
    icon: IconUsers,
    title: "Multi-Role Governance",
    description: "Role-based access control with separate admin, minter, and pauser roles enforces separation of duties and operational security.",
    bullets: ["Admin role", "Minter role", "Pauser role"],
  },
  {
    icon: IconFileDescription,
    title: "Transparent Operations",
    description: "Every treasury operation is executed on-chain with publicly verifiable transactions, balance tracking, and immutable history.",
    bullets: ["On-chain records", "Public transactions", "Immutable history"],
  },
  {
    icon: IconEye,
    title: "Continuous Monitoring",
    description: "24/7 on-chain monitoring tracks all contract activity, liquidity changes, and governance actions in real time.",
    bullets: ["Live activity", "Anomaly detection", "Public dashboards"],
  },
]

const disclosures = [
  { label: "Audit Status",      value: "In Progress",        icon: IconClock,        status: "pending"  },
  { label: "Smart Contract",    value: "Verified",           icon: IconFileCheck,    status: "verified" },
  { label: "Admin Wallet",      value: "Multi-Sig",          icon: IconKey,          status: "verified" },
  { label: "Treasury Wallet",   value: "On-Chain",           icon: IconServer,       status: "verified" },
  { label: "Liquidity Pools",   value: "Publicly Listed",    icon: IconLockSquare,   status: "verified" },
]

const riskItems = [
  {
    title: "Market Volatility",
    description: "Cryptocurrency markets are inherently volatile. Token value may fluctuate significantly based on market conditions, adoption, and broader ecosystem development.",
    icon: IconAlertOctagon,
  },
  {
    title: "No Guaranteed Returns",
    description: "TierX does not guarantee any fixed returns, yields, or profits. All participation is subject to market risks and independent research is required.",
    icon: IconAlertTriangle,
  },
  {
    title: "Smart Contract Risk",
    description: "Despite best development and review practices, smart contracts may contain vulnerabilities. Audit status is in progress and will be published upon completion.",
    icon: IconShield,
  },
  {
    title: "Liquidity Risk",
    description: "Token liquidity depends on market participation and exchange availability. Secondary market depth may be limited during certain conditions.",
    icon: IconActivity,
  },
  {
    title: "Regulatory Risk",
    description: "The regulatory landscape for digital assets continues to evolve. Jurisdictional rules may change and affect token utility or trading availability.",
    icon: IconInfoCircle,
  },
  {
    title: "Counterparty Risk",
    description: "Third-party services including exchanges, custodians, and bridges carry their own operational and security risks independent of TierX.",
    icon: IconAlertOctagon,
  },
]

const walletSteps = [
  {
    icon: IconCheck,
    title: "Verify the Contract",
    description: "Always confirm the official contract address from tierx.com or trusted channels before transacting.",
  },
  {
    icon: IconKey,
    title: "Protect Your Keys",
    description: "Never share your private keys or seed phrases with anyone. No legitimate service will ever ask for them.",
  },
  {
    icon: IconDeviceMobile,
    title: "Use Secure Wallets",
    description: "Use hardware wallets or reputable software wallets to store TIERX. Enable all available security features.",
  },
  {
    icon: IconShield,
    title: "Watch for Impersonators",
    description: "Be cautious of fake accounts, phishing sites, and unofficial channels claiming to represent TierX.",
  },
]

/* ─── helpers ───────────────────────────────────────────── */
const statusColor = (status: string) => {
  if (status === "verified") return { bg: "bg-semantic-up/10", text: "text-semantic-up", border: "border-semantic-up/20" }
  if (status === "pending")  return { bg: "bg-accent-yellow/10", text: "text-accent-yellow", border: "border-accent-yellow/20" }
  return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" }
}

/* ─── main component ────────────────────────────────────── */
export default function Security() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silent
    }
  }

  return (
    <main className="min-h-screen bg-canvas">

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-surface-dark overflow-hidden pt-32 pb-20">
        {/* background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,83,0.05),transparent_50%)] pointer-events-none" />
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-pill bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
              <span className="text-caption-strong text-primary font-semibold uppercase tracking-widest">
                Security & Transparency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-display-lg font-headline text-on-dark mb-5"
              style={{ fontWeight: 700 }}
            >
              Institutional-grade security,
              <br />
              <span className="text-primary">on-chain transparency.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body-md text-on-dark-soft max-w-2xl mx-auto leading-relaxed"
            >
              TierX is built on verified smart contracts, multi-role governance, and
              continuous on-chain monitoring — designed for institutional standards.
            </motion.p>
          </motion.div>

          {/* ── Quick stats integrated into hero ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {quickStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: `${stat.color}66` }}
                  className="group relative flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-4 overflow-hidden"
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${stat.color}1a, transparent 70%)` }}
                  />

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${stat.color}20`, border: `1px solid ${stat.color}33` }}
                  >
                    <Icon size={22} style={{ color: stat.color }} strokeWidth={1.75} />
                  </motion.div>

                  <div className="relative min-w-0">
                    <p className="text-caption-strong uppercase tracking-wider text-on-dark-soft mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-title-sm font-semibold text-on-dark truncate">{stat.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SECURITY FEATURES GRID ══════════════ */}
      <section className="bg-surface-soft py-section">
        <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-display-sm font-headline text-ink mb-4">
              Built on Trust &amp; Transparency
            </motion.h2>
            <motion.p variants={itemVariants} className="text-body-md text-muted max-w-2xl mx-auto">
              Every layer of the TierX protocol is designed with security, transparency,
              and institutional governance as foundational principles.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-hairline bg-surface-card p-8 overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300"
                      >
                        <Icon size={28} className="text-primary" strokeWidth={1.75} />
                      </motion.div>
                      <span className="text-caption-strong text-muted font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-title-lg font-headline text-ink mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body-md text-muted leading-relaxed mb-5">
                      {feature.description}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-hairline">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-body-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CONTRACT ADDRESS ══════════════ */}
      <section id="contract" className="bg-canvas py-section">
        <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative max-w-3xl mx-auto rounded-3xl border border-hairline bg-surface-card overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}
          >
            {/* gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"
                >
                  <IconShield className="text-primary" size={24} strokeWidth={1.75} />
                </motion.div>
                <div>
                  <h3 className="text-title-lg font-headline text-ink">Contract Address</h3>
                  <p className="text-body-sm text-muted">Official TIERX token contract on Ethereum</p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-soft border border-hairline p-5 mb-5">
                <p className="text-caption-strong text-muted uppercase tracking-wider mb-2">
                  ERC-20 Address
                </p>
                <p className="font-mono text-body-md text-ink break-all leading-relaxed">
                  {contractAddress}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
                >
                  {copied ? (
                    <>
                      <IconCheck size={16} />
                      Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <IconCopy size={16} />
                      Copy Address
                    </>
                  )}
                </motion.button>
                <motion.a
                  href={`https://etherscan.io/address/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-surface-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-hairline"
                >
                  <IconExternalLink size={16} />
                  View on Etherscan
                </motion.a>
              </div>

              <p className="text-caption text-muted text-center mt-5">
                Always verify the contract address from official TierX channels before transacting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ LIQUIDITY POOL LINKS ══════════════ */}
      <section className="bg-canvas py-16 border-t border-hairline">
        <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-title-lg font-headline text-ink mb-2">Liquidity Pools</h2>
              <p className="text-body-sm text-muted">
                Trade and verify TIERX liquidity on the following decentralized platforms.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  name: "Uniswap",
                  description: "Primary DEX",
                  url: "https://app.uniswap.org/explore/tokens/ethereum/0xed500EF5e2cdF642ce715675a67A31bDe09a7a97",
                },
                {
                  name: "DexTools",
                  description: "Live Chart & Pairs",
                  url: "https://www.dextools.io/app/en/ether/pair-explorer/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d",
                },
                {
                  name: "DexScreener",
                  description: "Market Analytics",
                  url: "https://dexscreener.com/ethereum/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d",
                },
              ].map((pool, i) => (
                <motion.a
                  key={i}
                  href={pool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  className="group flex items-center justify-between rounded-xl border border-hairline bg-surface-card p-5 transition-shadow duration-300"
                >
                  <div>
                    <p className="text-title-sm font-semibold text-ink group-hover:text-primary transition-colors">
                      {pool.name}
                    </p>
                    <p className="text-caption text-muted">{pool.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors"
                  >
                    <IconExternalLink size={18} className="text-primary" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SECURITY STATUS GRID ══════════════ */}
      <section className="bg-surface-soft py-section">
        <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-display-sm font-headline text-ink">
              Security Status Overview
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {disclosures.map((item, index) => {
              const Icon = item.icon
              const colors = statusColor(item.status)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  className={`group rounded-2xl border ${colors.border} bg-surface-card p-5 text-center transition-shadow duration-300`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`w-11 h-11 mx-auto rounded-xl ${colors.bg} flex items-center justify-center mb-3`}
                  >
                    <Icon size={22} className={colors.text} strokeWidth={1.75} />
                  </motion.div>
                  <p className="text-caption-strong text-muted uppercase tracking-wider mb-1.5">
                    {item.label}
                  </p>
                  <p className={`text-title-sm font-semibold ${colors.text}`}>
                    {item.value}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ WALLET SAFETY GUIDE ══════════════ */}
      <section className="bg-surface-soft py-section">
        <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-display-sm font-headline text-ink mb-4">
              Wallet Safety Guide
            </motion.h2>
            <motion.p variants={itemVariants} className="text-body-md text-muted max-w-2xl mx-auto">
              Follow these essential practices to keep your TIERX tokens secure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-5"
          >
            {walletSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                  className="group relative flex items-start gap-4 rounded-2xl border border-hairline bg-surface-card p-6 transition-shadow duration-300"
                >
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors"
                    >
                      <Icon size={24} className="text-primary" strokeWidth={1.75} />
                    </motion.div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-on-primary text-caption-strong font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-title-md font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
