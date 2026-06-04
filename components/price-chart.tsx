"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function PriceChart() {
  return (
    <section id="price-chart" className="bg-surface-soft py-section">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display-sm font-display text-ink mb-4">
            Live Price Chart
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Track TierX price movements in real-time with our integrated chart.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl border border-hairline bg-surface-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="text-primary" size={16} />
              </div>
              <span className="text-title-md font-semibold text-ink">TierX / USDC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-semantic-up"></div>
              <span className="text-body-sm font-medium text-semantic-up">Live</span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg border border-hairline">
            <iframe
              id="dextools-widget"
              title="DEXTools Trading Chart"
              width="100%"
              height="500"
              src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xe6036f631c9b64f49ce45b10fd5c0e6ad28f668d?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
              className="w-full border-0"
              style={{ minHeight: "400px", background: "#0A0A0A" }}
              loading="lazy"
            />
          </div>  
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { title: "Real-Time Data", desc: "Live price updates and trading volume directly from the blockchain" },
            { title: "Technical Analysis", desc: "Advanced charting tools and indicators for informed trading decisions" },
            { title: "Market Insights", desc: "Comprehensive market data and trading pair information" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-hairline bg-surface-card p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-title-md font-semibold text-ink mb-3">{item.title}</h3>
              <p className="text-body-md text-muted">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
