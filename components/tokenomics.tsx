"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export default function Tokenomics() {
  const tokenomicsData = [
    { name: "Liquidity Pool", value: 30, color: "#FFD700" },
    { name: "Community Treasury", value: 25, color: "#00FF87" },
    { name: "Team & Development", value: 15, color: "#4682B4" },
    { name: "Marketing", value: 10, color: "#00E7FF" },
    { name: "Reserve", value: 20, color: "#9370DB" },
  ]

  const tokenDetails = [
    { label: "Total Supply", value: "100,000,000,000" },
    { label: "Symbol", value: "TIERX" },
    { label: "Decimals", value: "18" },
    { label: "Yield Rate", value: "3%/mo for 12 months" },
    { label: "Vault Release", value: "100M every 30 days" },
    { label: "Contract Owner", value: "0xbB80...9fBf" },
  ]

  return (
    <section id="tokenomics" className="py-20 relative bg-graphite/20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gold/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">Tokenomics</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            TierX is designed with a sustainable economic model to support long-term growth and value creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[400px]"
          >
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
                        <div className="bg-midnight/90 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl">
                          <p className="font-medium text-white">{payload[0].name}</p>
                          <p className="text-gold font-bold">{`${payload[0].value}%`}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4">
              {tokenDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-midnight/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex justify-between items-center"
                >
                  <span className="text-white/70">{detail.label}</span>
                  <span className="font-mono font-medium text-gold">{detail.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-white/70">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-steel/10 border border-steel/20 rounded-xl">
              <h4 className="font-medium text-steel mb-2">Governance Ready</h4>
              <p className="text-sm text-white/70">
                TierX implements a roles system with DEFAULT_ADMIN, MINTER, and PAUSER capabilities for secure and
                flexible token management.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
