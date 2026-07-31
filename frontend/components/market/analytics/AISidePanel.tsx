"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Activity,
  TrendingUp,
  ShieldCheck,
  Radar,
} from "lucide-react";

export default function AISidePanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
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

        rounded-[32px]

        border
        border-cyan-400/10

        bg-white/[0.04]

        backdrop-blur-3xl

        p-8
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20

          h-[260px]
          w-[260px]

          rounded-full

          bg-cyan-500/10

          blur-[140px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-cyan-500
              to-green-500
            "
          >
            <BrainCircuit
              size={28}
              className="text-white"
            />
          </div>

          <div>

            <p
              className="
                text-xs

                uppercase

                tracking-[0.28em]

                text-cyan-300
              "
            >
              Neural Engine
            </p>

            <h3
              className="
                mt-2

                text-3xl

                font-black

                text-white
              "
            >
              AI Market Core
            </h3>

          </div>

        </div>
                {/* AI Status */}

        <div className="mt-10 space-y-5">

          {/* AI Confidence */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              rounded-2xl

              border
              border-cyan-400/10

              bg-cyan-500/5

              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Activity
                  size={20}
                  className="text-cyan-300"
                />

                <span className="text-white/70">
                  AI Confidence
                </span>

              </div>

              <span
                className="
                  text-3xl

                  font-black

                  text-cyan-300
                "
              >
                98.6%
              </span>

            </div>

          </motion.div>

          {/* Market Trend */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              rounded-2xl

              border
              border-green-400/10

              bg-green-500/5

              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <TrendingUp
                  size={20}
                  className="text-green-300"
                />

                <span className="text-white/70">
                  Market Trend
                </span>

              </div>

              <span
                className="
                  text-2xl

                  font-bold

                  text-green-300
                "
              >
                Bullish
              </span>

            </div>

          </motion.div>

          {/* Market Health */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              rounded-2xl

              border
              border-emerald-400/10

              bg-emerald-500/5

              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-emerald-300"
                />

                <span className="text-white/70">
                  Market Health
                </span>

              </div>

              <span
                className="
                  text-2xl

                  font-bold

                  text-emerald-300
                "
              >
                Excellent
              </span>

            </div>

          </motion.div>

          {/* Volatility */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              rounded-2xl

              border
              border-purple-400/10

              bg-purple-500/5

              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Radar
                  size={20}
                  className="text-purple-300"
                />

                <span className="text-white/70">
                  Volatility
                </span>

              </div>

              <span
                className="
                  text-2xl

                  font-bold

                  text-purple-300
                "
              >
                Low
              </span>

            </div>

          </motion.div>

        </div>
                {/* AI Neural Analysis */}

        <div
          className="
            mt-10

            rounded-[28px]

            border
            border-cyan-400/10

            bg-gradient-to-br
            from-cyan-500/10
            via-blue-500/10
            to-green-500/10

            p-7
          "
        >

          <p
            className="
              text-xs

              uppercase

              tracking-[0.28em]

              text-cyan-300
            "
          >
            AI Recommendation
          </p>

          <h3
            className="
              mt-5

              text-3xl

              font-black

              text-white
            "
          >
            Sell Tomorrow
          </h3>

          <p
            className="
              mt-5

              leading-8

              text-white/70
            "
          >
            Our neural forecasting engine predicts a
            <span className="font-semibold text-green-300">
              {" "}5–6% price increase{" "}
            </span>
            over the next 24 hours because arrivals are
            decreasing while regional demand continues
            to rise.
          </p>

          <button
            className="
              mt-8

              w-full

              rounded-2xl

              bg-gradient-to-r
              from-green-500
              via-emerald-500
              to-cyan-500

              px-6
              py-4

              font-semibold

              text-white

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(34,197,94,.45)]
            "
          >
            Generate New AI Analysis
          </button>

        </div>

      </div>

    </motion.div>
  );
}