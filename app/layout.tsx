import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TierX — Private Digital Wealth Infrastructure",
  description:
    "TierX is a private digital wealth infrastructure ecosystem designed to connect tokenized assets, treasury systems, payments, education, and community economic development into one unified financial network.",
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
