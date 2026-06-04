import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TierX - Sovereign Economic Engine of the New Era",
  description:
    "TierX is the upgraded sovereign token built to power a decentralized, trust-backed economic system for sovereign nations.",
  icons: {
    icon: "/tierx-logo.png",
    shortcut: "/tierx-logo.png",
    apple: "/tierx-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
