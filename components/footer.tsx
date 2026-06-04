import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Send, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: FaXTwitter, href: "https://x.com/z_z444portal?s=21", color: "#ffffff" },
    { name: "Telegram", icon: Send, href: "https://t.me/TIERXwealth", color: "#0088cc" },
    {
      name: "TikTok",
      icon: FaTiktok,
      href: "https://www.tiktok.com/@sceptredominion?_t=ZT-8x30K0GZ0Lj&_r=1",
      color: "#00f2ea",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sceptreworld?igsh=d3FwdndtaXE2aXc5&utm_source=qr",
      color: "#E4405F",
    },
  ]

  const quickLinks = [
    { name: "Whitepaper", href: "#whitepaper" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Engines", href: "#engines" },
    { name: "Bridge", href: "#forex-bridge" },
    { name: "Chart", href: "#price-chart" },
    { name: "Transparency", href: "#transparency" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "About Us", href: "#about-us" },
    { name: "Our Community", href: "#socials" },
  ]

  return (
    <footer className="bg-midnight py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 rounded-full bg-gold p-1 flex items-center justify-center">
                <Image src="/tierx-logo.png" alt="TierX Logo" width={32} height={32} className="rounded-full" />
              </div>
              <span className="text-2xl font-bold text-white">TierX</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              TierX is the upgraded sovereign token built to power a decentralized, trust-backed economic system for
              sovereign nations starting with Ayiti (Haiti).
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-graphite/30 flex items-center justify-center hover:bg-gold/20 transition-all hover:scale-110 group"
                  style={
                    {
                      "--hover-color": social.color,
                    } as React.CSSProperties
                  }
                >
                  {typeof social.icon === "function" ? (
                    <social.icon size={18} className="text-white/70 group-hover:text-gold transition-colors" />
                  ) : (
                    <social.icon size={18} className="text-white/70 group-hover:text-gold transition-colors" />
                  )}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gold font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} TierX. All rights reserved. Backed by Sceptre Dominion Private Trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
