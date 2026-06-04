"use client"

import { motion } from "framer-motion"
import {
  IconRepeat, IconSchool, IconBuildingSkyscraper, IconClock,
  IconGift, IconHeart, IconCoin, IconInfinity,
} from "@tabler/icons-react"

const engines = [
  { title: "Reserve Activation Engine", icon: IconRepeat, description: "Liquidity operations engine creating efficient market cycles through automated reserve management protocols." },
  { title: "Education Rewards Engine", icon: IconSchool, description: "Learn-and-earn mechanism rewarding educational completion with TIERX tokens." },
  { title: "Asset Tokenization Engine", icon: IconBuildingSkyscraper, description: "Real estate, vehicles, and physical assets digitized and managed under smart contracts." },
  { title: "Holding Incentive Engine", icon: IconClock, description: "Time-lock reward mechanism incentivizing long-term holding and disciplined treasury management." },
  { title: "Community Rewards Vault", icon: IconGift, description: "Community distribution vault with randomized reward allocations and passive participation sharing." },
  { title: "Healthcare Access Pool", icon: IconHeart, description: "Community-funded healthcare treasury pool with transparent on-chain governance." },
  { title: "Stimulus Distribution Engine", icon: IconCoin, description: "Community-based airdrop and stimulus distribution from pooled liquidity reserves." },
  { title: "Infinity Treasury Vault", icon: IconInfinity, description: "Automated compounding treasury mechanism for sustainable ecosystem funding." },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-canvas py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Integrated Financial Infrastructure
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Eight specialized engines and vaults powering a comprehensive digital wealth ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}
              className="group rounded-xl border border-hairline bg-surface-card p-8"
            >
              <div className="mb-4">
                <engine.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-title-md font-semibold text-ink group-hover:text-primary transition-colors duration-200 mb-2">
                {engine.title}
              </h3>
              <p className="text-body-md text-muted">{engine.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
