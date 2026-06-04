"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts"
import { Globe, Gift, Lock, Vote } from "lucide-react"

/* ─── animation presets ─────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const iconVariants = {
  hover: {
    scale: 1.12,
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  },
}

/* ─── custom shape — smoothly highlights active slice ─── */
const renderShape = (props: {
  cx: number; cy: number; innerRadius: number; outerRadius: number
  startAngle: number; endAngle: number; fill: string
  name?: string; value?: number; isActive?: boolean; payload?: { name: string; value: number }
}) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, isActive, payload } = props

  return (
    <g>
      <Sector
        cx={cx} cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={isActive ? 1 : 0.85}
        style={{
          transition: "opacity 0.25s ease",
          filter: isActive ? `drop-shadow(0 4px 12px ${fill}55)` : "none",
        }}
      />
      {isActive && payload && (
        <>
          <Sector
            cx={cx} cy={cy}
            innerRadius={outerRadius + 4}
            outerRadius={outerRadius + 8}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
            opacity={0.2}
            style={{ transition: "opacity 0.3s ease" }}
          />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="#0a0b0d" className="font-headline" style={{ fontSize: 13, fontWeight: 600, fontFamily: "Sora, Inter, sans-serif" }}>
            {payload.name.split(" ").map((word: string, i: number) => (
              <tspan key={i} x={cx} dy={i === 0 ? 0 : 16}>{word}</tspan>
            ))}
          </text>
          <text x={cx} y={cy + 12 + (payload.name.split(" ").length - 1) * 18} textAnchor="middle" fill={fill} style={{ fontSize: 20, fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }}>
            {payload.value}%
          </text>
        </>
      )}
    </g>
  )
}

/* ─── data ───────────────────────────────────────────────── */
const tokenomicsData = [
  { name: "Liquidity Pool",        value: 30, color: "#0052ff" },
  { name: "Community Treasury",    value: 25, color: "#d4a853" },
  { name: "Team & Development",    value: 15, color: "#05b169" },
  { name: "Marketing & Ops",       value: 10, color: "#7c828a" },
  { name: "Reserve",               value: 20, color: "#a8b8cc" },
]

const tokenDetails = [
  { label: "Token Name",    value: "TierX"           },
  { label: "Symbol",        value: "TIERX"           },
  { label: "Total Supply",  value: "100,000,000,000" },
  { label: "Network",       value: "Ethereum"        },
  { label: "Decimals",      value: "18"              },
]

const useCases = [
  { icon: Globe, label: "Ecosystem Access",      description: "Unlock tools, vaults & financial infrastructure." },
  { icon: Gift,  label: "Rewards & Incentives",  description: "Earn through staking, referrals & participation."  },
  { icon: Lock,  label: "Vault & Staking",       description: "Yield-generating vaults built into the protocol."  },
  { icon: Vote,  label: "Treasury Governance",   description: "Vote on upgrades, allocations & grants."          },
]

/* ─── component ──────────────────────────────────────────── */
export default function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  return (
    <section id="tokenomics" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-20"
        >
          <motion.p variants={itemVariants} className="text-caption-strong uppercase tracking-widest text-primary mb-3 font-semibold">
            Tokenomics
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-[30px] font-semibold leading-[1.1] tracking-[-0.75px] sm:text-display-sm font-headline text-ink mb-5">
            Token Distribution &amp; Utility
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body-md text-muted max-w-xl mx-auto leading-relaxed">
            TIERX is engineered for ecosystem access, incentive rewards, vault participation, and decentralised treasury governance.
          </motion.p>
        </motion.div>

        {/* ── Chart + Details ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Pie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="h-[340px] w-full select-none">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={82}
                    outerRadius={138}
                    paddingAngle={2}
                    dataKey="value"
                    activeIndex={activeIndex}
                    shape={(props: unknown) => {
                      const p = props as Record<string, unknown>
                      const idx = tokenomicsData.findIndex(
                        (d) => d.name === (p.payload as { name: string })?.name
                      )
                      return renderShape({ ...p, isActive: idx === activeIndex } as Parameters<typeof renderShape>[0] & { isActive: boolean })
                    }}
                    animationBegin={300}
                    animationDuration={1100}
                    animationEasing="ease-out"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(undefined)}
                    style={{ cursor: "pointer", outline: "none" }}
                  >
                    {tokenomicsData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 mt-4 px-2"
            >
              {tokenomicsData.map((item, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(undefined)}
                  className="flex items-center gap-2.5 text-left group"
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      scale: activeIndex === index ? 1.4 : 1,
                      boxShadow: activeIndex === index ? `0 0 0 3px ${item.color}33` : "none",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                  <span
                    className="text-body-sm leading-tight transition-colors duration-200"
                    style={{ color: activeIndex === index ? item.color : "#7c828a" }}
                  >
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Token Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-3"
          >
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4, transition: { duration: 0.22, ease: "easeOut" } }}
                className="rounded-xl border border-hairline bg-surface-card px-5 py-4 flex justify-between items-center"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <span className="text-body-md text-muted">{detail.label}</span>
                <span className="font-mono text-body-strong text-ink">{detail.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Use Cases — trust-bar style ── */}
        <div className="border-t border-hairline pt-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="text-caption-strong uppercase tracking-widest text-muted mb-10 text-center font-semibold"
          >
            Token Use Cases
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0"
          >
            {useCases.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex flex-col items-start gap-4 px-4 sm:px-6 lg:border-r lg:border-hairline-soft last:border-r-0 lg:first:pl-0 lg:last:pr-0 cursor-default"
                >
                  <motion.div variants={iconVariants}>
                    <Icon size={26} className="text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="text-body-sm font-semibold text-ink leading-tight">{item.label}</h3>
                    <p className="text-caption text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
