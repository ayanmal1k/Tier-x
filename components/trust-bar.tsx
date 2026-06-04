"use client"

import { motion } from "framer-motion"
import {
  IconStack,
  IconLock,
  IconCode,
  IconMap,
  IconFileText,
  IconUsers,
} from "@tabler/icons-react"

const trustItems = [
  {
    icon: IconStack,
    label: "Ethereum-Based Asset",
    description: "Securely anchored on mainnet",
  },
  {
    icon: IconLock,
    label: "100B Fixed Supply",
    description: "Deflationary tokenomics model",
  },
  {
    icon: IconCode,
    label: "Public Contract",
    description: "Verified and open-source",
  },
  {
    icon: IconMap,
    label: "Treasury Roadmap",
    description: "Transparent growth milestones",
  },
  {
    icon: IconFileText,
    label: "Whitepaper Available",
    description: "Detailed technical architecture",
  },
  {
    icon: IconUsers,
    label: "Community Infrastructure",
    description: "Decentralized governance",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom smooth easeOut cubic
    },
  },
  hover: {
    y: -6,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
    },
  },
}

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15,
    },
  },
}

export default function TrustBar() {
  return (
    <section className="bg-canvas border-b border-hairline py-8 md:py-12">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 sm:gap-y-8 lg:gap-y-0"
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-col items-start gap-2.5 sm:gap-4 px-2 sm:px-4 md:px-6 lg:border-r lg:border-hairline-soft last:border-r-0 lg:first:pl-0 lg:last:pr-0 cursor-default"
              >
                <motion.div variants={iconVariants}>
                  <IconComponent
                    size={22}
                    className="text-primary"
                    stroke={1.5}
                  />
                </motion.div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-caption sm:text-body-sm font-semibold text-ink leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-caption text-muted leading-relaxed hidden sm:block">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
