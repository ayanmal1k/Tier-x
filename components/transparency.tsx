"use client"

import { motion } from "framer-motion"
import { Shield, Users, Clock, FileText, Heart } from "lucide-react"

export default function Transparency() {
  const features = [
    { icon: FileText, title: "Simple Will or Trust Setup", description: "Streamlined process for creating your estate plan" },
    { icon: Users, title: "Direct Asset Transfer", description: "Direct transfer to children or loved ones" },
    { icon: Shield, title: "No Court Involvement", description: "No judge needed - completely private process" },
    { icon: Clock, title: "No Delays", description: "No government interference or waiting periods" },
  ]

  return (
    <section id="transparency" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-pill bg-surface-strong text-caption-strong text-ink font-semibold uppercase tracking-wider">
            Estate Protection Services
          </div>
          <h2 className="text-display-sm font-display text-ink mb-6">
            PROTECT YOUR FAMILY. CLAIM YOUR LEGACY.
          </h2>
          <p className="text-body-md text-muted max-w-3xl mx-auto">
            No Court. No Lawyers. No Probate.
            <br />
            <span className="text-primary font-semibold">You pay $25-$50, not $2,500-$7,500</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-hairline bg-surface-card p-8">
              <h3 className="text-title-lg font-display text-ink mb-6">WHAT YOU GET:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="text-title-sm font-semibold text-ink">{feature.title}</h4>
                      <p className="text-body-sm text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-hairline">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-primary" size={20} />
                  <span className="text-title-sm font-semibold text-primary">Powered by SCEPTRE DOMINION PRIVATE TRUST</span>
                </div>
                <p className="text-body-sm text-muted">Legally Binding under Natural & Common Law</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-hairline bg-surface-card p-8">
              <h3 className="text-title-lg font-display text-ink mb-4">WHY PAY $7,500 TO A LAWYER?</h3>
              <p className="text-body-md text-body mb-6">
                You can do what they do - better, cheaper, privately.
                <br />
                <span className="text-primary font-semibold">$25-$50 covers your entry into our trust framework.</span>
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Everything is sealed. Your legacy is protected.",
                  "No government. No delay. No fees when you die.",
                  "You're not a number. You're a name.",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-body-md text-body">{text}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="text-primary" size={20} />
                  <span className="text-title-sm font-semibold text-primary">A bloodline. A kingdom.</span>
                </div>
                <p className="text-body-md text-body font-medium">Protect it like one.</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-primary/20 bg-surface-dark p-6 text-center">
              <h4 className="text-title-md font-semibold text-on-dark mb-4">JOIN NOW - LIMITED OPENINGS AVAILABLE</h4>
              <div className="space-y-2 mb-4">
                <p className="text-body-md text-on-dark-soft">CashApp • Zelle • In Person</p>
                <p className="text-body-md text-on-dark-soft">DM us or visit our Trust Desk</p>
              </div>
              <p className="text-primary font-medium italic">&quot;By Divine Right, Under Natural Law&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
