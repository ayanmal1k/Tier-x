"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Zap, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Built on the foundation of Sceptre Dominion Private Trust, ensuring your assets are protected.",
      color: "#FFD700",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Starting with Haiti and expanding worldwide to create sovereign economic systems.",
      color: "#00FF87",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering the fusion of traditional trust law with cutting-edge blockchain technology.",
      color: "#4682B4",
    },
    {
      icon: Target,
      title: "Mission Driven",
      description: "Dedicated to financial restoration and empowerment of underserved communities.",
      color: "#00E7FF",
    },
  ]

  return (
    <section id="about-us" className="py-20 relative bg-graphite/20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gold/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-neon/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">About Us</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            TierX represents the evolution of sovereign economic systems, bridging traditional trust law with
            revolutionary blockchain technology to create lasting financial freedom.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-midnight/50 backdrop-blur-md rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gold p-1 flex items-center justify-center">
                  <Image
                    src="/tierx-logo.png"
                    alt="TierX Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold">Our Vision</h3>
                  <p className="text-white/60">Building Sovereign Economic Freedom</p>
                </div>
              </div>

              <p className="text-white/80 mb-6">
                TierX is more than a token — it's a living treasury for sovereign nations. We're creating a
                decentralized, trust-backed economic system that empowers communities to achieve true financial
                independence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                  <p className="text-white/70">
                    <span className="text-gold font-medium">100 Billion Token Supply</span> designed for sustainable
                    economic growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon mt-2"></div>
                  <p className="text-white/70">
                    <span className="text-neon font-medium">8 Economic Engines</span> powering real-world utility and
                    value creation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-steel mt-2"></div>
                  <p className="text-white/70">
                    <span className="text-steel font-medium">Trust-Backed Framework</span> ensuring legal protection and
                    asset security
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-midnight/50 backdrop-blur-md rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-neon" size={24} />
                <h3 className="text-2xl font-bold text-neon">Our Mission</h3>
              </div>

              <p className="text-white/80 mb-6">
                Starting with Ayiti (Haiti), TierX will fund insurance, rebuild homes, purchase food, back schools, and
                create a new global economy for the underserved. Our goal is simple yet profound:
              </p>

              <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 mb-6">
                <p className="text-gold font-bold text-xl text-center">
                  "To place $1 in every hand — backed by soul, not empire."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <span className="text-white/80">Phase I: Haiti Economic Restoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neon"></div>
                  <span className="text-white/80">Phase II: Caribbean & West Africa Expansion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-steel"></div>
                  <span className="text-white/80">Phase III: Global Diaspora Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-midnight/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon size={28} style={{ color: value.color }} />
                </div>
                <h4 className="text-lg font-bold mb-3" style={{ color: value.color }}>
                  {value.title}
                </h4>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Authority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-neon/10 border border-neon/20 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-neon" size={32} />
            <h3 className="text-2xl font-bold text-neon">Backed by Divine Authority</h3>
          </div>
          <p className="text-white/80 mb-4 max-w-3xl mx-auto">
            TierX operates under the authority of Sceptre Dominion Private Trust, a Global Ecclesiastical Sovereign
            Asset Authority governed by divine trust law and natural law principles.
          </p>
          <p className="text-neon font-medium italic">
            "By Divine Right, Under Natural Law, For the Protection of Living Souls"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
