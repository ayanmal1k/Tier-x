"use client"

import { motion } from "framer-motion"
import { Shield, Users, Clock, FileText, Heart } from "lucide-react"

export default function Transparency() {
  const features = [
    {
      icon: FileText,
      title: "Simple Will or Trust Setup",
      description: "Streamlined process for creating your estate plan",
    },
    {
      icon: Users,
      title: "Direct Asset Transfer",
      description: "Direct transfer to children or loved ones",
    },
    {
      icon: Shield,
      title: "No Court Involvement",
      description: "No judge needed - completely private process",
    },
    {
      icon: Clock,
      title: "No Delays",
      description: "No government interference or waiting periods",
    },
  ]

  return (
    <section id="transparency" className="py-20 relative bg-graphite/20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gold/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-steel/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-graphite rounded-full border border-gold/30">
            <span className="text-gold text-sm font-medium">Estate Protection Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-steel">
              PROTECT YOUR FAMILY. CLAIM YOUR LEGACY.
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            No Court. No Lawyers. No Probate.
            <br />
            <span className="text-gold font-bold">You pay $25-$50, not $2,500-$7,500</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-midnight/50 backdrop-blur-md rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-gold">WHAT YOU GET:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="text-gold" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{feature.title}</h4>
                      <p className="text-white/60 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-neon" size={20} />
                  <span className="text-neon font-bold">Powered by SCEPTRE DOMINION PRIVATE TRUST</span>
                </div>
                <p className="text-white/70 text-sm">Legally Binding under Natural & Common Law</p>
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
              <h3 className="text-2xl font-bold mb-4 text-steel">WHY PAY $7,500 TO A LAWYER?</h3>
              <p className="text-white/80 mb-6">
                You can do what they do - better, cheaper, privately.
                <br />
                <span className="text-gold font-bold">$25-$50 covers your entry into our trust framework.</span>
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon"></div>
                  <span className="text-white/80">Everything is sealed. Your legacy is protected.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon"></div>
                  <span className="text-white/80">No government. No delay. No fees when you die.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon"></div>
                  <span className="text-white/80">You're not a number. You're a name.</span>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="text-gold" size={20} />
                  <span className="text-gold font-bold">A bloodline. A kingdom.</span>
                </div>
                <p className="text-white/80 font-medium">Protect it like one.</p>
              </div>
            </div>

            <div className="bg-neon/10 border border-neon/20 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-neon mb-4">JOIN NOW - LIMITED OPENINGS AVAILABLE</h4>
              <div className="space-y-2 mb-4">
                <p className="text-white/80">CashApp • Zelle • In Person</p>
                <p className="text-white/80">DM us or visit our Trust Desk</p>
              </div>
              <p className="text-neon font-medium italic">"By Divine Right, Under Natural Law"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
