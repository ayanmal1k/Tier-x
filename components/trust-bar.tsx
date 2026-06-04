"use client"

import { motion } from "framer-motion"
import { Shield, Coins, FileCheck, Route, BookOpen, Users } from "lucide-react"

const trustItems = [
  { icon: Coins, label: "Ethereum-Based Asset" },
  { icon: Shield, label: "100B Fixed Supply" },
  { icon: FileCheck, label: "Public Contract" },
  { icon: Route, label: "Treasury Roadmap" },
  { icon: BookOpen, label: "Whitepaper Available" },
  { icon: Users, label: "Community Infrastructure" },
]

export default function TrustBar() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="mx-auto px-6 py-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                <item.icon size={14} className="text-primary" />
              </div>
              <span className="text-body-sm text-muted whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
