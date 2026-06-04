"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    "Individuals",
    "Businesses",
    "Developers",
    "Whitepaper",
    "Tokenomics",
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between px-6"
        style={{ height: "64px", maxWidth: "1200px" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image src="/tierx-logo.png" alt="TierX" width={32} height={32} className={`rounded-full transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`} />
          </div>
          <span
            className={`text-lg font-semibold transition-colors ${
              scrolled ? "text-ink" : "text-on-dark"
            }`}
          >
            TierX
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-body hover:text-ink"
                  : "text-on-dark/80 hover:text-on-dark"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#how-to-buy"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-body hover:text-ink"
                : "text-on-dark/80 hover:text-on-dark"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="#how-to-buy"
            className="inline-flex items-center justify-center rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
            style={{ height: "44px" }}
          >
            Get Started
          </Link>
        </div>

        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-ink" : "text-on-dark"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-body hover:text-ink transition-colors py-2 text-sm font-medium border-b border-hairline-soft last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="#how-to-buy"
                className="text-body hover:text-ink text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="#how-to-buy"
                className="inline-flex items-center justify-center rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
                style={{ height: "44px" }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
