"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Zap, Target, Heart, Quote } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const values = [
    { icon: Shield, title: "Trust & Security", description: "Built on the foundation of Sceptre Dominion Private Trust, ensuring your assets are protected." },
    { icon: Globe, title: "Global Impact", description: "Starting with Haiti and expanding worldwide to create sovereign economic systems." },
    { icon: Zap, title: "Innovation", description: "Pioneering the fusion of traditional trust law with cutting-edge blockchain technology." },
    { icon: Target, title: "Mission Driven", description: "Dedicated to financial restoration and empowerment of underserved communities." },
  ]

  const stats = [
    { value: "100B", label: "Token Supply" },
    { value: "8", label: "Economic Engines" },
    { value: "3%/mo", label: "Yield Rate" },
    { value: "1", label: "Nation Starting" },
  ]

  return (
    <section id="about-us" className="bg-surface-dark py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span className="text-caption-strong text-primary font-semibold uppercase tracking-wider">About TierX</span>
          </div>
          <h2 className="text-display-lg font-display text-on-dark mb-6" style={{ fontWeight: 400 }}>
            Building Sovereign Economic<br />
            <span className="text-primary">Freedom for Nations</span>
          </h2>
          <p className="text-body-lg text-on-dark-soft max-w-2xl mx-auto text-lg leading-relaxed">
            TierX represents the evolution of sovereign economic systems, bridging traditional trust law with
            revolutionary blockchain technology to create lasting financial freedom.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-surface-dark-elevated p-10 border border-white/[0.06]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <span className="text-display-sm text-primary font-display">V</span>
              </div>
              <div>
                <div className="text-caption-strong text-primary font-semibold uppercase tracking-wider">Our Vision</div>
                <h3 className="text-title-lg font-display text-on-dark mt-0.5">Building Sovereign Economic Freedom</h3>
              </div>
            </div>

            <p className="text-body-md text-on-dark-soft mb-8 leading-relaxed">
              TierX is more than a token &mdash; it&apos;s a living treasury for sovereign nations. We&apos;re creating a
              decentralized, trust-backed economic system that empowers communities to achieve true financial
              independence.
            </p>

            <div className="space-y-4">
              {[
                { dot: "bg-primary", label: "100 Billion Token Supply", desc: "designed for sustainable economic growth" },
                { dot: "bg-semantic-up", label: "8 Economic Engines", desc: "powering real-world utility and value creation" },
                { dot: "bg-accent-yellow", label: "Trust-Backed Framework", desc: "ensuring legal protection and asset security" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full ${item.dot} mt-2 flex-shrink-0`}></div>
                  <div>
                    <p className="text-body-md text-on-dark font-medium">{item.label}</p>
                    <p className="text-body-sm text-on-dark-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-surface-dark-elevated p-10 border border-white/[0.06] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <span className="text-display-sm text-primary font-display">M</span>
              </div>
              <div>
                <div className="text-caption-strong text-primary font-semibold uppercase tracking-wider">Our Mission</div>
                <h3 className="text-title-lg font-display text-on-dark mt-0.5">Restore, Rebuild, Empower</h3>
              </div>
            </div>

            <p className="text-body-md text-on-dark-soft mb-8 leading-relaxed">
              Starting with Ayiti (Haiti), TierX will fund insurance, rebuild homes, purchase food, back schools, and
              create a new global economy for the underserved.
            </p>

            <div className="flex-1 flex flex-col justify-end">
              <div className="rounded-xl bg-primary/8 border border-primary/15 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Quote className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-on-dark text-body-md font-medium leading-relaxed">
                    &quot;To place $1 in every hand &mdash; backed by soul, not empire.&quot;
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { dot: "bg-primary", phase: "Phase I", text: "Haiti Economic Restoration" },
                  { dot: "bg-semantic-up", phase: "Phase II", text: "Caribbean & West Africa Expansion" },
                  { dot: "bg-accent-yellow", phase: "Phase III", text: "Global Diaspora Integration" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.dot}`}></div>
                    <span className="text-body-sm">
                      <span className="text-on-dark font-medium">{item.phase}:</span>{" "}
                      <span className="text-on-dark-soft">{item.text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="rounded-xl bg-surface-dark-elevated border border-white/[0.06] p-6 text-center">
              <div className="text-display-sm text-on-dark font-display mb-1">{stat.value}</div>
              <div className="text-body-sm text-on-dark-soft">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span className="text-caption-strong text-primary font-semibold uppercase tracking-wider">Core Values</span>
          </div>
          <h3 className="text-display-sm font-display text-on-dark" style={{ fontWeight: 400 }}>
            What We Stand For
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl bg-surface-dark-elevated border border-white/[0.06] p-8 transition-all hover:border-white/[0.15] hover:-translate-y-0.5 duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <value.icon size={22} className="text-primary" />
              </div>
              <h4 className="text-title-md font-semibold text-on-dark mb-3">{value.title}</h4>
              <p className="text-body-md text-on-dark-soft">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="relative p-10 md:p-14 text-center border border-primary/20 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary" size={30} />
            </div>
            <h3 className="text-title-lg font-display text-primary mb-4">Backed by Divine Authority</h3>
            <p className="text-body-md text-on-dark-soft max-w-2xl mx-auto mb-6 leading-relaxed">
              TierX operates under the authority of Sceptre Dominion Private Trust, a Global Ecclesiastical Sovereign
              Asset Authority governed by divine trust law and natural law principles.
            </p>
            <div className="inline-flex items-center gap-3 rounded-pill bg-primary/10 px-6 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-body-sm text-primary font-medium italic">
                &quot;By Divine Right, Under Natural Law, For the Protection of Living Souls&quot;
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
