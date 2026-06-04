"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-canvas overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,83,0.03),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="grid md:grid-cols-5 gap-12 items-center min-h-screen pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >

            <h1
              className="text-display-mega font-headline text-ink mb-6"
              style={{ fontWeight: 600 }}
            >
              Modern Treasury
              <br />
              <span className="text-primary">Infrastructure</span>
              <br />
              for Digital Wealth
            </h1>

            <p className="text-body-md text-body mb-8 max-w-2xl leading-relaxed">
              TierX is building a private digital finance ecosystem combining
              tokenized assets, treasury systems, payments, education, and
              community economic infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-8 py-4 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
                style={{ height: "56px" }}
              >
                Enter Ecosystem
                <ArrowRight size={18} />
              </a>
              <a
                href="#whitepaper"
                className="inline-flex items-center justify-center rounded-pill bg-transparent px-5 py-2 text-base font-semibold text-ink transition-colors hover:bg-surface-soft border border-hairline"
                style={{ height: "56px", padding: "15px 31px" }}
              >
                Read Whitepaper
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex md:col-span-2 items-center justify-center"
          >
            <Image
              src="/hero.png"
              alt="TierX Treasury Infrastructure"
              width={2800}
              height={2800}
              className="w-[280%] max-w-none -mr-[10%] h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
