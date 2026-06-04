"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, FileText, Building2 } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-canvas overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,83,0.03),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-screen pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1
              className="text-display-mega font-headline text-ink mb-6"
              style={{ fontWeight: 400 }}
            >
              Modern Treasury
              <br />
              <span className="text-primary">Infrastructure</span>
              <br />
              for Digital Wealth
            </h1>

            <p className="text-body-md text-body mb-8 max-w-lg leading-relaxed">
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
            className="relative hidden md:block"
          >
            <div className="relative">
              <div className="rounded-xl bg-surface-card border border-hairline shadow-card-hover p-8 max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="text-primary" size={32} />
                  <div>
                    <p className="text-title-md font-semibold text-ink">Private Digital Wealth</p>
                    <p className="text-body-sm text-muted">Infrastructure Ecosystem</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-t border-hairline">
                    <div className="flex items-center gap-3">
                      <Shield size={16} className="text-muted" />
                      <span className="text-body-sm text-muted">Asset Backing</span>
                    </div>
                    <span className="font-mono text-body-strong text-ink">100B TIERX</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-hairline">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-muted" />
                      <span className="text-body-sm text-muted">Network</span>
                    </div>
                    <span className="font-mono text-body-strong text-ink">Ethereum</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-hairline">
                    <div className="flex items-center gap-3">
                      <Building2 size={16} className="text-muted" />
                      <span className="text-body-sm text-muted">Framework</span>
                    </div>
                    <span className="font-mono text-body-strong text-ink">Institutional</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
