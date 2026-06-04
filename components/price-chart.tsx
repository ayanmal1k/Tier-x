"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function PriceChart() {
  return (
    <section id="price-chart" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-steel/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/70 flex items-center justify-center gap-3">
              <TrendingUp size={40} className="text-gold" />
              Live Price Chart
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Track TierX price movements in real-time with our integrated DexTools chart.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-graphite/30 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl">
            <div className="bg-midnight/50 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <TrendingUp className="text-gold" size={16} />
                  </div>
                  <span className="text-white font-medium">TierX / USDC</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
                  <span className="text-neon text-sm font-medium">Live</span>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg border border-white/10">
                <iframe
                  id="dextools-widget"
                  title="DEXTools Trading Chart"
                  width="100%"
                  height="500"
                  src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
                  className="w-full border-0 bg-midnight rounded-lg"
                  style={{
                    minHeight: "400px",
                    background: "#0A0A0A",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-graphite/20 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-gold" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gold">Real-Time Data</h3>
            <p className="text-white/70 text-sm">Live price updates and trading volume directly from the blockchain</p>
          </div>

          <div className="bg-graphite/20 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-steel/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-steel" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-steel">Technical Analysis</h3>
            <p className="text-white/70 text-sm">
              Advanced charting tools and indicators for informed trading decisions
            </p>
          </div>

          <div className="bg-graphite/20 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-neon" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-neon">Market Insights</h3>
            <p className="text-white/70 text-sm">Comprehensive market data and trading pair information</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        iframe {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          iframe {
            height: 400px;
          }
        }
      `}</style>
    </section>
  )
}
