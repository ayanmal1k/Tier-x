import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TierX - Sovereign Economic Engine of the New Era",
  description:
    "TierX is the upgraded sovereign token built to power a decentralized, trust-backed economic system for sovereign nations.",
  icons: {
    icon: "/tierx-logo.png",
    shortcut: "/tierx-logo.png",
    apple: "/tierx-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script id="prevent-scroll">{`
          window.addEventListener('load', function() {
            window.scrollTo(0, 0);
            const preventScroll = () => {
              requestAnimationFrame(() => {
                window.scrollTo(0, 0);
              });
            };
            
            // Prevent scroll for the first second after page load
            const timeout = setTimeout(() => {
              document.removeEventListener('scroll', preventScroll);
            }, 1000);

            document.addEventListener('scroll', preventScroll);
            return () => {
              clearTimeout(timeout);
              document.removeEventListener('scroll', preventScroll);
            };
          });
        `}</Script>
      </body>
    </html>
  )
}
