"use client";

import { motion } from "framer-motion";
import {
  Search,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function MarketFilterBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-3xl

        p-8
      "
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-24 top-0 h-[220px] w-[220px] rounded-full bg-green-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-cyan-400/20

                bg-cyan-500/10

                px-4
                py-2
              "
            >

              <Sparkles
                size={16}
                className="text-cyan-300"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]

                  text-cyan-200
                "
              >
                Smart Filters
              </span>

            </div>

            <h2
              className="
                mt-5

                text-3xl
                font-bold

                text-white
              "
            >
              Filter Market Data
            </h2>

            <p
              className="
                mt-2

                text-white/60
              "
            >
              Search crops, select markets and analyze live prices using AI.
            </p>

          </div>

          {/* Reset Button */}

          <button
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-white/10

              bg-white/[0.05]

              px-6
              py-3

              text-white/80

              transition

              hover:bg-white/[0.08]
            "
          >

            <RotateCcw size={18} />

            Reset Filters

          </button>

        </div>

        {/* Search Row */}

        <div className="mt-10">

          <div
            className="
              flex
              items-center
              gap-4

              rounded-2xl

              border
              border-white/10

              bg-black/20

              px-5
              py-4
            "
          >

            <Search
              size={20}
              className="text-green-300"
            />

            <input
              type="text"
              placeholder="Search crop..."
              className="
                w-full

                bg-transparent

                text-white

                placeholder:text-white/40

                outline-none
              "
            />

          </div>

        </div>
                {/* Filter Grid */}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">

          {/* State */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          >
            <option className="bg-[#101820]">Maharashtra</option>
            <option className="bg-[#101820]">Karnataka</option>
            <option className="bg-[#101820]">Gujarat</option>
            <option className="bg-[#101820]">Punjab</option>
          </select>

          {/* District */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          >
            <option className="bg-[#101820]">Pune</option>
            <option className="bg-[#101820]">Nashik</option>
            <option className="bg-[#101820]">Nagpur</option>
            <option className="bg-[#101820]">Kolhapur</option>
          </select>

          {/* Market */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          >
            <option className="bg-[#101820]">All Mandis</option>
            <option className="bg-[#101820]">Pune APMC</option>
            <option className="bg-[#101820]">Nashik APMC</option>
            <option className="bg-[#101820]">Mumbai Market</option>
          </select>

          {/* Category */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          >
            <option className="bg-[#101820]">Vegetables</option>
            <option className="bg-[#101820]">Fruits</option>
            <option className="bg-[#101820]">Cereals</option>
            <option className="bg-[#101820]">Pulses</option>
          </select>

          {/* Price Range */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          >
            <option className="bg-[#101820]">₹0 - ₹500</option>
            <option className="bg-[#101820]">₹500 - ₹1000</option>
            <option className="bg-[#101820]">₹1000 - ₹2000</option>
            <option className="bg-[#101820]">₹2000+</option>
          </select>

          {/* Date */}

          <input
            type="date"
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-white
              backdrop-blur-xl
              outline-none
              transition
              hover:border-green-400/30
            "
          />

        </div>
                {/* Bottom Action Bar */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-white/55">
            AI analyzes market trends, demand, arrivals and historical prices
            to generate intelligent crop price forecasts.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(34,197,94,.35)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              relative
              overflow-hidden

              rounded-2xl

              border
              border-green-400/20

              bg-gradient-to-r
              from-green-500/20
              via-emerald-500/20
              to-cyan-500/20

              px-8
              py-4

              font-semibold

              text-white

              backdrop-blur-xl
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-green-400/10
                to-cyan-400/10

                opacity-0
                transition
                duration-500

                hover:opacity-100
              "
            />

            <span className="relative flex items-center gap-3">

              <Sparkles
                size={18}
                className="text-green-300"
              />

              Analyze Prices with AI

            </span>

          </motion.button>

        </div>

      </div>

    </motion.section>
  );
}