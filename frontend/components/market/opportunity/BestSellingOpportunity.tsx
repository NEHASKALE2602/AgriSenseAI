"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  MapPin,
  CalendarDays,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function BestSellingOpportunity() {
  return (
    <section className="mt-16">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative

          overflow-hidden

          rounded-[36px]

          border
          border-green-400/10

          bg-white/[0.05]

          backdrop-blur-3xl

          p-10
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            -right-24
            -top-24

            h-[280px]
            w-[280px]

            rounded-full

            bg-green-500/10

            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0

            h-[220px]
            w-[220px]

            rounded-full

            bg-cyan-500/10

            blur-[140px]
          "
        />

        <div className="relative z-10">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-cyan-400/15

                  bg-cyan-500/10

                  px-5
                  py-3
                "
              >

                <BrainCircuit
                  size={18}
                  className="text-cyan-300"
                />

                <span
                  className="
                    text-xs
                    font-semibold

                    uppercase

                    tracking-[0.30em]

                    text-cyan-300
                  "
                >
                  AI Best Opportunity
                </span>

              </div>

              <h2
                className="
                  mt-6

                  text-5xl

                  font-black

                  tracking-tight

                  text-white
                "
              >
                Best Selling Opportunity
              </h2>

              <p
                className="
                  mt-4

                  max-w-2xl

                  text-lg

                  leading-8

                  text-white/65
                "
              >
                AI continuously analyzes live mandi prices,
                demand, arrivals and weather to recommend
                the most profitable selling opportunity.
              </p>

            </div>
                        {/* Right Side */}

            <div
              className="
                flex
                flex-col
                items-end
                justify-center
              "
            >

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="
                  flex
                  h-20
                  w-20

                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-br
                  from-green-400
                  to-cyan-500

                  shadow-[0_0_45px_rgba(34,197,94,.45)]
                "
              >

                <Sparkles
                  size={34}
                  className="text-white"
                />

              </motion.div>

            </div>

          </div>

          {/* Main Grid */}

          <div
            className="
              mt-12

              grid

              gap-10

              lg:grid-cols-[1.1fr_.9fr]
            "
          >

            {/* Left Panel */}

            <div
              className="
                rounded-[28px]

                border
                border-white/10

                bg-white/[0.04]

                p-8
              "
            >

              <p
                className="
                  text-sm

                  uppercase

                  tracking-[0.30em]

                  text-green-300
                "
              >
                Recommended Crop
              </p>

              <h3
                className="
                  mt-4

                  text-6xl

                  font-black

                  text-white
                "
              >
                🌾 Soybean
              </h3>

              <div className="mt-10 grid grid-cols-2 gap-8">

                <div>

                  <p className="text-white/45 text-xs uppercase tracking-[0.20em]">
                    Current Price
                  </p>

                  <h4 className="mt-2 text-4xl font-black text-white">
                    ₹5,820
                  </h4>

                </div>

                <div>

                  <p className="text-white/45 text-xs uppercase tracking-[0.20em]">
                    Expected Peak
                  </p>

                  <h4 className="mt-2 text-4xl font-black text-cyan-300">
                    ₹6,050
                  </h4>

                </div>

                <div>

                  <p className="text-white/45 text-xs uppercase tracking-[0.20em]">
                    Profit Potential
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <TrendingUp
                      size={22}
                      className="text-green-400"
                    />

                    <span className="text-3xl font-black text-green-300">
                      +18%
                    </span>

                  </div>

                </div>

                <div>

                  <p className="text-white/45 text-xs uppercase tracking-[0.20em]">
                    AI Confidence
                  </p>

                  <h4 className="mt-2 text-3xl font-black text-cyan-300">
                    97%
                  </h4>

                </div>

              </div>

            </div>
                        {/* Right Panel */}

            <div
              className="
                rounded-[28px]

                border
                border-white/10

                bg-white/[0.04]

                p-8
              "
            >

              <div className="space-y-7">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <MapPin
                      size={20}
                      className="text-cyan-300"
                    />

                    <span className="text-white/70">
                      Best Market
                    </span>

                  </div>

                  <span className="font-bold text-white text-lg">
                    Lasalgaon APMC
                  </span>

                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={20}
                      className="text-green-300"
                    />

                    <span className="text-white/70">
                      Best Selling Date
                    </span>

                  </div>

                  <span className="font-bold text-green-300 text-lg">
                    Tomorrow
                  </span>

                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between">

                  <span className="text-white/70">
                    Transport Cost
                  </span>

                  <span className="font-bold text-white">
                    ₹320
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/70">
                    Distance
                  </span>

                  <span className="font-bold text-white">
                    42 km
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/70">
                    Arrival
                  </span>

                  <span className="font-bold text-cyan-300">
                    Low
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/70">
                    Demand
                  </span>

                  <span className="font-bold text-green-300">
                    High
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/70">
                    Weather Impact
                  </span>

                  <span className="font-bold text-emerald-300">
                    Favorable
                  </span>

                </div>

              </div>
                            <div
                className="
                  mt-10

                  rounded-2xl

                  border
                  border-green-400/15

                  bg-gradient-to-r
                  from-green-500/10
                  to-cyan-500/10

                  p-6
                "
              >

                <p
                  className="
                    text-xs

                    uppercase

                    tracking-[0.28em]

                    text-green-300
                  "
                >
                  AI Recommendation
                </p>

                <p
                  className="
                    mt-4

                    text-white/80

                    leading-8

                    text-[15px]
                  "
                >
                  AI recommends selling
                  <span className="font-bold text-white">
                    {" "}
                    Soybean{" "}
                  </span>
                  at
                  <span className="font-bold text-cyan-300">
                    {" "}
                    Lasalgaon APMC
                  </span>
                  . Demand is expected to increase over the next
                  24 hours while arrivals are decreasing, creating
                  a strong opportunity for better profit.
                </p>

                <div
                  className="
                    mt-6

                    flex
                    flex-wrap
                    gap-4
                  "
                >

                  <button
                    className="
                      flex
                      items-center
                      gap-2

                      rounded-xl

                      bg-gradient-to-r
                      from-green-500
                      to-cyan-500

                      px-7
                      py-4

                      font-semibold

                      text-white

                      transition-all
                      duration-300

                      hover:scale-105
                      hover:shadow-[0_0_35px_rgba(34,197,94,.45)]
                    "
                  >
                    Sell Today

                    <ArrowUpRight size={18} />

                  </button>

                  <button
                    className="
                      rounded-xl

                      border
                      border-white/10

                      bg-white/[0.05]

                      px-7
                      py-4

                      font-semibold

                      text-white

                      transition-all
                      duration-300

                      hover:bg-white/[0.08]
                    "
                  >
                    View Full Analysis
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}