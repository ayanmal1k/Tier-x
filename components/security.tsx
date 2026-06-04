"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Copy, Check, Eye, FileCheck, Users, ScrollText, AlertTriangle, ExternalLink, Wallet } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Verified Contract",
    description: "Smart contract deployed on Ethereum. Source code verified on Etherscan for independent review.",
  },
  {
    icon: Users,
    title: "Multi-Role Governance",
    description: "Role-based access control with separate admin, minter, and pauser roles for operational security.",
  },
  {
    icon: ScrollText,
    title: "Transparent Operations",
    description: "All treasury operations executed on-chain with publicly verifiable transactions and balance tracking.",
  },
  {
    icon: Eye,
    title: "Audit Status",
    description: "Smart contract audit is currently in progress. Updates will be published upon completion.",
  },
]

const disclosures = [
  { label: "Audit Status", value: "In Progress" },
  { label: "Smart Contract", value: "Verified on Etherscan" },
  { label: "Admin Wallet", value: "Multi-sig enabled" },
  { label: "Treasury Wallet", value: "On-chain transparent" },
  { label: "Liquidity Pools", value: "Publicly listed" },
]

const riskItems = [
  "Cryptocurrency investments carry inherent market risk. Past performance does not guarantee future results.",
  "TIERX token value may fluctuate based on market conditions, adoption, and ecosystem development.",
  "No guaranteed profit or fixed returns are promised or implied by any TierX documentation or communications.",
  "Smart contract risk: despite best efforts in development and review, smart contracts may contain vulnerabilities.",
  "Liquidity risk: token liquidity depends on market participation and exchange availability.",
  "Regulatory risk: the regulatory landscape for digital assets continues to evolve across jurisdictions.",
]

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
    <section id="security" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
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
              Security
            </span>
          </div>
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Security & Transparency
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            TierX prioritizes security, transparency, and institutional standards.
            Everything is on-chain and publicly verifiable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl border border-hairline bg-surface-card p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-2">{feature.title}</h3>
              <p className="text-body-md text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl border border-hairline bg-surface-card p-8 max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="text-title-md font-semibold text-ink">Contract Address</h3>
              <p className="text-body-sm text-muted">Official TIERX token contract on Ethereum</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex-1 bg-surface-soft border border-hairline rounded-lg px-5 py-3 font-mono text-body-sm text-ink break-all flex items-center">
              {contractAddress}
            </div>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
                style={{ height: "44px" }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-pill bg-surface-strong px-4 text-ink transition-colors hover:bg-hairline"
                style={{ height: "44px" }}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-title-lg font-headline text-ink mb-6 text-center">Security Status</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {disclosures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border border-hairline bg-surface-card p-5 text-center"
              >
                <p className="text-body-sm text-muted mb-1">{item.label}</p>
                <p className="text-title-sm font-semibold text-ink">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl border border-hairline/60 bg-surface-soft p-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-semantic-down/10 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle size={20} className="text-semantic-down" />
              </div>
              <div>
                <h3 className="text-title-md font-semibold text-ink mb-1">Risk Disclosures</h3>
                <p className="text-body-sm text-muted">
                  Please review the following risk factors before participating in the TierX ecosystem.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {riskItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                  <p className="text-body-sm text-muted">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-hairline">
              <p className="text-body-sm font-semibold text-ink mb-2">Wallet Safety Guide</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-body-sm text-muted">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Always verify the contract address from official sources before transacting.
                </li>
                <li className="flex items-start gap-2 text-body-sm text-muted">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Never share your private keys or seed phrases with anyone.
                </li>
                <li className="flex items-start gap-2 text-body-sm text-muted">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Use hardware wallets or secure software wallets for storing TIERX tokens.
                </li>
                <li className="flex items-start gap-2 text-body-sm text-muted">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Be cautious of impersonation accounts and unofficial channels.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-hairline">
              <p className="text-caption-strong text-muted text-center">
                No Guaranteed Profit Statement: TierX does not guarantee any fixed returns, yields, or profits.
                All participation is subject to market risks and should be undertaken based on your own
                independent research and risk assessment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
