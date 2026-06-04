import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Send, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const socialLinks = [
  { name: "Twitter", icon: FaXTwitter, href: "https://x.com/z_z444portal?s=21" },
  { name: "Telegram", icon: Send, href: "https://t.me/TIERXwealth" },
  { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@sceptredominion?_t=ZT-8x30K0GZ0Lj&_r=1" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/sceptreworld?igsh=d3FwdndtaXE2aXc5&utm_source=qr" },
]

const quickLinks = [
  { name: "Whitepaper", href: "#whitepaper" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Engines", href: "#engines" },
  { name: "How to Buy", href: "#how-to-buy" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "About Us", href: "#about-us" },
  { name: "Our Community", href: "#socials" },
]

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-8 w-8">
                <Image src="/tierx-logo.png" alt="TierX" width={32} height={32} className="rounded-full" />
              </div>
              <span className="text-title-lg font-display text-ink">TierX</span>
            </Link>
            <p className="text-body-md text-muted max-w-md mb-6">
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
                  className="w-10 h-10 rounded-full bg-surface-strong flex items-center justify-center hover:bg-primary/10 transition-all"
                >
                  {typeof social.icon === "function" ? (
                    <social.icon size={16} className="text-muted" />
                  ) : (
                    <social.icon size={16} className="text-muted" />
                  )}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-title-sm font-semibold text-ink mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-body-md text-muted hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-title-sm font-semibold text-ink mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://t.me/TIERXwealth" target="_blank" rel="noopener noreferrer" className="text-body-md text-muted hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://x.com/z_z444portal?s=21" target="_blank" rel="noopener noreferrer" className="text-body-md text-muted hover:text-primary transition-colors">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline mt-12 pt-8 text-center">
          <p className="text-body-sm text-muted">
            &copy; {new Date().getFullYear()} TierX. All rights reserved. Backed by Sceptre Dominion Private Trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
