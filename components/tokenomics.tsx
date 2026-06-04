"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Copy, Check, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Tokenomics() {
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

  const tokenomicsData = [
    { name: "Liquidity Pool", value: 30, color: "#0052ff" },
    { name: "Community Treasury", value: 25, color: "#05b169" },
    { name: "Team & Development", value: 15, color: "#f4b000" },
    { name: "Marketing & Operations", value: 10, color: "#7c828a" },
    { name: "Reserve", value: 20, color: "#0a0b0d" },
  ]

  const tokenDetails = [
    { label: "Token Name", value: "TierX" },
    { label: "Symbol", value: "TIERX" },
    { label: "Total Supply", value: "100,000,000,000" },
    { label: "Network", value: "Ethereum" },
    { label: "Decimals", value: "18" },
  ]

  const useCases = [
    "Ecosystem access and participation",
    "Rewards and incentive distributions",
    "Vault participation and staking",
    "Treasury coordination and governance",
  ]

  return (
    <section id="tokenomics" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Token Distribution & Utility
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            TIERX is designed for ecosystem access, rewards, vault participation, and treasury coordination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1500}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-canvas border border-hairline rounded-lg p-3 shadow-card">
                            <p className="text-title-sm font-semibold text-ink">{payload[0].name}</p>
                            <p className="text-body-strong text-primary">{`${payload[0].value}%`}</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-4">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-body-sm text-muted truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-3 mb-8">
              {tokenDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-hairline bg-surface-card px-5 py-4 flex justify-between items-center"
                >
                  <span className="text-body-md text-muted">{detail.label}</span>
                  <span className="font-mono text-body-strong text-ink">{detail.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-hairline bg-surface-card p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-body-md text-muted">Contract Address</span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 text-body-sm text-primary hover:text-primary-active transition-colors"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="font-mono text-body-sm text-ink break-all">{contractAddress}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-title-sm font-semibold text-ink mb-3">Use Cases</h4>
              <ul className="space-y-2">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2 text-body-md text-muted">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
