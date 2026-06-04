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
          <div className="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-caption-strong text-primary font-semibold uppercase tracking-wider">
              Price Chart
            </span>
          </div>
          <h2 className="text-display-sm font-headline text-ink mb-4">
            Live Price Chart
          </h2>
          <p className="text-body-md text-muted max-w-2xl mx-auto">
            Track TIERX price movements in real-time with on-chain data.
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
              <span className="text-title-md font-semibold text-ink">TIERX / USDC</span>
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
      </div>
    </section>
  )
}
