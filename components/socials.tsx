"use client"
import { motion } from "framer-motion"
import { Send, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Socials() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://x.com/z_z444portal?s=21",
      color: "#ffffff",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/TIERXwealth",
      color: "#0088cc",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@sceptredominion?_t=ZT-8x30K0GZ0Lj&_r=1",
      color: "#00f2ea", // Teal/cyan color that's visible on dark background
      glitch: true,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sceptreworld?igsh=d3FwdndtaXE2aXc5&utm_source=qr",
      color: "#E4405F",
    },
  ]

  return (
    <section id="socials" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gold/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-neon/5 blur-3xl rounded-full"></div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70">Our Community</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Connect with the TierX community across our social platforms and stay updated on the latest developments.
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
              whileHover={{
                y: -5,
                boxShadow: `0 10px 25px -5px ${social.color}30`,
                transition: { duration: 0.2 },
              }}
              className="bg-graphite/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  social.glitch ? "tiktok-glitch" : ""
                }`}
                style={{ backgroundColor: `${social.color}20` }}
              >
                {typeof social.icon === "function" ? (
                  <social.icon size={28} style={{ color: social.color }} />
                ) : (
                  <social.icon size={28} color={social.color} />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{social.name}</h3>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: `${social.color}20`, color: social.color }}
              >
                Follow Us
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .tiktok-glitch {
          position: relative;
          overflow: hidden;
        }
        
        .tiktok-glitch::before,
        .tiktok-glitch::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          z-index: -1;
          opacity: 0.5;
        }
        
        .tiktok-glitch::before {
          left: 2px;
          background: rgba(255, 0, 255, 0.3);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        
        .tiktok-glitch::after {
          left: -2px;
          background: rgba(0, 255, 255, 0.3);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-anim-2 {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(2px, 0); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(0, -2px); }
        }
      `}</style>
    </section>
  )
}
