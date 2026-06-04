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
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const desktopNavigationItems = [
    "Home",
    "Whitepaper",
    "Tokenomics",
    "Engines",
    "Bridge",
    "Chart",
    "Transparency",
    "How to Buy",
    "Roadmap",
    "Our Community",
  ]

  const mobileNavigationItems = [
    "Home",
    "Whitepaper",
    "Tokenomics",
    "Engines",
    "Bridge",
    "Chart",
    "Transparency",
    "How to Buy",
    "Roadmap",
    "About Us",
    "Our Community",
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-midnight/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-gold p-1 flex items-center justify-center">
            <Image src="/tierx-logo.png" alt="TierX Logo" width={32} height={32} className="rounded-full" />
            <div className="absolute inset-0 rounded-full border-1 border-gold/50 animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold text-white">TierX</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {desktopNavigationItems.map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "#hero"
                  : item === "Bridge"
                    ? "#forex-bridge"
                    : item === "Chart"
                      ? "#price-chart"
                      : item === "Transparency"
                        ? "#transparency"
                        : item === "How to Buy"
                          ? "#how-to-buy"
                          : item === "Our Community"
                            ? "#socials"
                            : `#${item.toLowerCase()}`
              }
              className="text-white/80 hover:text-gold transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-graphite absolute w-full py-4 shadow-lg"
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {mobileNavigationItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "#hero"
                    : item === "Bridge"
                      ? "#forex-bridge"
                      : item === "Chart"
                        ? "#price-chart"
                        : item === "Transparency"
                          ? "#transparency"
                          : item === "How to Buy"
                            ? "#how-to-buy"
                            : item === "About Us"
                              ? "#about-us"
                              : item === "Our Community"
                                ? "#socials"
                                : `#${item.toLowerCase()}`
                }
                className="text-white/80 hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
