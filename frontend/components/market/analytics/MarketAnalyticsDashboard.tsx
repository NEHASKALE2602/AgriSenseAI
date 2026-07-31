"use client";

import { motion } from "framer-motion";

import AnalyticsHero from "./AnalyticsHero";
import LivePriceGraph from "./LivePriceGraph";
import AISidePanel from "./AISidePanel";
import MarketPulse from "./MarketPulse";
import AISummary from "./AISummary";

export default function MarketAnalyticsDashboard() {
  return (
    <section className="mt-24">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative

          overflow-hidden

          rounded-[40px]

          border
          border-cyan-400/10

          bg-white/[0.04]

          backdrop-blur-3xl

          p-10
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            -top-32
            -left-24

            h-[450px]
            w-[450px]

            rounded-full

            bg-cyan-500/10

            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-green-500/10

            blur-[180px]
          "
        />

        <div className="relative z-10">

          {/* Header */}

          <AnalyticsHero />

          {/* Dashboard */}

          <div
            className="
              mt-16

              grid

              gap-8

              xl:grid-cols-[1.75fr_.95fr]
            "
          >

            {/* Left */}

            <div className="space-y-8">

              <LivePriceGraph />

              <MarketPulse />

            </div>

            {/* Right */}

            <AISidePanel />

          </div>

          {/* Bottom */}

          <div className="mt-10">

            <AISummary />

          </div>

        </div>

      </motion.div>

    </section>
  );
}