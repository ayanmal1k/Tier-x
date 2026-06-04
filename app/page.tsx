import Header from "@/components/header"
import Hero from "@/components/hero"
import TradingPlatforms from "@/components/trading-platforms"
import Whitepaper from "@/components/whitepaper"
import Tokenomics from "@/components/tokenomics"
import Engines from "@/components/engines"
import ForexBridge from "@/components/forex-bridge"
import ContractAddress from "@/components/contract-address"
import HowToBuy from "@/components/how-to-buy"
import Roadmap from "@/components/roadmap"
import AboutUs from "@/components/about-us"
import Socials from "@/components/socials"
import Footer from "@/components/footer"
import PriceChart from "@/components/price-chart"
import Transparency from "@/components/transparency"
import Swap from "@/components/swap"

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-white overflow-hidden">
      <Header />
      <Hero />
      <TradingPlatforms />
      <PriceChart />
      <Whitepaper />
      <Tokenomics />
      <Engines />
      <ForexBridge />
      <Transparency />
      <ContractAddress />
      <HowToBuy />
      <Roadmap />
      <AboutUs />
      <Socials />
      <Footer />
    </main>
  )
}
