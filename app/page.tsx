import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import WhatTierXDoes from "@/components/what-tierx-does"
import Ecosystem from "@/components/ecosystem"
import Tokenomics from "@/components/tokenomics"
import Treasury from "@/components/treasury"

import Whitepaper from "@/components/whitepaper"
import HowToBuy from "@/components/how-to-buy"
import PriceChart from "@/components/price-chart"
import Roadmap from "@/components/roadmap"
import Community from "@/components/community"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <WhatTierXDoes />
      <Ecosystem />
      <Tokenomics />
      <Treasury />

      <Whitepaper />
      <HowToBuy />
      <PriceChart />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  )
}
