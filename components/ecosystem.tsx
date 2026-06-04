"use client"

import { motion } from "framer-motion"
import {
  Repeat, GraduationCap, Building, Clock, Ticket, Heart, Banknote, Infinity,
} from "lucide-react"

const engines = [
  { title: "Reserve Activation Engine", icon: Repeat, description: "Liquidity operations engine creating efficient market cycles through automated reserve management protocols." },
  { title: "Education Rewards Engine", icon: GraduationCap, description: "Learn-and-earn mechanism rewarding educational completion with TIERX tokens." },
  { title: "Asset Tokenization Engine", icon: Building, description: "Real estate, vehicles, and physical assets digitized and managed under smart contracts." },
  { title: "Holding Incentive Engine", icon: Clock, description: "Time-lock reward mechanism incentivizing long-term holding and disciplined treasury management." },
  { title: "Community Rewards Vault", icon: Ticket, description: "Community distribution vault with randomized reward allocations and passive participation sharing." },
  { title: "Healthcare Access Pool", icon: Heart, description: "Community-funded healthcare treasury pool with transparent on-chain governance." },
  { title: "Stimulus Distribution Engine", icon: Banknote, description: "Community-based airdrop and stimulus distribution from pooled liquidity reserves." },
  { title: "Infinity Treasury Vault", icon: Infinity, description: "Automated compounding treasury mechanism for sustainable ecosystem funding." },
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
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-all hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <engine.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-2">{engine.title}</h3>
              <p className="text-body-md text-muted">{engine.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
