"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChartLine, ShoppingCart, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Tokenomics", href: "/#tokenomics" },
  { label: "Treasury", href: "/#treasury" },
  { label: "Security", href: "/security" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Community", href: "/#community" },
]

const resourceLinks = [
  { label: "Whitepaper", href: "/#whitepaper", icon: null },
  { label: "Price Chart", href: "/#price-chart", icon: ChartLine },
  { label: "How to Buy", href: "/#how-to-buy", icon: ShoppingCart },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()
  const isSecurityPage = pathname === "/security"

  /* ── dark theme when on /security and not scrolled ── */
  const darkMode = isSecurityPage && !scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md shadow-card"
          : darkMode
            ? "bg-surface-dark/95 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between px-6"
        style={{ height: "64px", maxWidth: "1200px" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="/tierx-logo.png"
              alt="TierX"
              width={32}
              height={32}
              className={`rounded-full transition-all duration-300 ${darkMode ? "brightness-0 invert" : ""}`}
            />
          </div>
          <span
            className={`text-lg font-semibold transition-colors ${
              darkMode ? "text-on-dark" : "text-ink"
            }`}
          >
            TierX
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                darkMode
                  ? "text-on-dark-soft hover:text-on-dark"
                  : "text-body hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-on-dark-soft hover:text-on-dark"
                  : "text-body hover:text-ink"
              }`}
            >
              Resources
              <ChevronDown
                size={14}
                className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-52 rounded-xl border border-hairline bg-surface-card p-2 shadow-card"
                >
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-body-md text-body hover:text-ink hover:bg-surface-soft rounded-lg transition-colors"
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        {link.label === "Whitepaper" && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                        )}
                        {link.label === "Price Chart" && <ChartLine size={16} />}
                        {link.label === "How to Buy" && <ShoppingCart size={16} />}
                      </span>
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.slice(5).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                darkMode
                  ? "text-on-dark-soft hover:text-on-dark"
                  : "text-body hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/security"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active group"
            style={{ height: "44px" }}
          >
            Security
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className={`md:hidden transition-colors ${
            darkMode ? "text-on-dark" : "text-ink"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-canvas border-t border-hairline-soft"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-body hover:text-ink transition-colors py-2 text-sm font-medium border-b border-hairline-soft last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <p className="text-caption-strong text-muted uppercase tracking-wider px-1 py-2">
                  Resources
                </p>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-body hover:text-ink transition-colors py-2 text-sm font-medium pl-4 border-b border-hairline-soft last:border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Link
                  href="/security"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active group"
                  style={{ height: "44px" }}
                  onClick={() => setIsOpen(false)}
                >
                  Security
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
