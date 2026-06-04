"use client"

import { motion } from "framer-motion"
import { Send, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const socialLinks = [
  { name: "Twitter / X", icon: FaXTwitter, url: "https://x.com/z_z444portal?s=21" },
  { name: "Telegram", icon: Send, url: "https://t.me/TIERXwealth" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@sceptredominion?_t=ZT-8x30K0GZ0Lj&_r=1" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sceptreworld?igsh=d3FwdndtaXE2aXc5&utm_source=qr" },
]

export default function Community() {
  return (
    <section id="community" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm font-headline text-ink mb-4">Join the Network</h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Connect with the TierX community across our social platforms and stay updated
            on the latest ecosystem developments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-all hover:shadow-card flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <social.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-3">{social.name}</h3>
              <span className="text-caption-strong text-primary font-semibold px-3 py-1 rounded-pill bg-primary/10">
                Follow Us
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
