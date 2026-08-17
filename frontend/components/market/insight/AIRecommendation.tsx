"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

interface AIRecommendationProps {
  crop: string;
  currentPrice: number;
  highestPrice: number;
  confidence: number;
}

export default function AIRecommendation({
  crop,
  currentPrice,
  highestPrice,
  confidence,
}: AIRecommendationProps) {
  const predictedPrice =
    highestPrice > currentPrice
      ? highestPrice
      : currentPrice;

  const growth =
    currentPrice > 0
      ? (((predictedPrice - currentPrice) / currentPrice) * 100).toFixed(1)
      : "0.0";

  const shouldHold = predictedPrice > currentPrice;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-green-400/15
        bg-white/[0.04]
        backdrop-blur-3xl
        p-10
      "
    >
      <div
        className="
          absolute
          -right-32
          -top-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-green-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -left-24
          bottom-0
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Header */}

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
              from-green-500/20
              to-cyan-500/20
              border
              border-green-400/20
            "
          >
            <Sparkles
              size={28}
              className="text-green-300"
            />
          </div>

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.30em]
                text-green-300
              "
            >
              AI Recommendation
            </p>

            <h2
              className="
                mt-2
                text-4xl
                font-black
                text-white
              "
            >
              Smart Selling Strategy
            </h2>

          </div>

        </div>

        {/* Recommendation */}

        <div className="mt-10">

          <h3
            className="
              text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            {shouldHold ? "Hold" : "Consider Selling"}{" "}
            {crop}

            <br />

            {shouldHold && (
              <span className="text-green-300">
                For 3–5 Days
              </span>
            )}

          </h3>

          <p
            className="
              mt-8
              max-w-4xl
              text-lg
              leading-9
              text-white/70
            "
          >
            AgriSense AI is analyzing the latest market
            records for {crop}. Based on the current market
            price and observed highest price, the system
            recommends{" "}
            {shouldHold
              ? "holding the crop for a few more days while monitoring price movement."
              : "reviewing the current selling opportunity."}
          </p>

        </div>

        {/* AI Metrics */}

        <div
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-3
          "
        >

          {/* Expected Price */}

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-[26px]
              border
              border-green-400/20
              bg-green-500/10
              backdrop-blur-2xl
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <IndianRupee
                size={22}
                className="text-green-300"
              />

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Expected Price
              </p>

            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                text-green-300
              "
            >
              ₹{predictedPrice.toLocaleString("en-IN")}
            </h2>

            <p className="mt-3 text-white/60">
              Based on available market data
            </p>

          </motion.div>

          {/* Growth */}

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-[26px]
              border
              border-cyan-400/20
              bg-cyan-500/10
              backdrop-blur-2xl
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <TrendingUp
                size={22}
                className="text-cyan-300"
              />

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Price Potential
              </p>

            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                text-cyan-300
              "
            >
              +{growth}%
            </h2>

            <p className="mt-3 text-white/60">
              Difference from current price
            </p>

          </motion.div>

          {/* Decision */}

          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-[26px]
              border
              border-yellow-400/20
              bg-yellow-500/10
              backdrop-blur-2xl
              p-6
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/45
              "
            >
              AI Decision
            </p>

            <div className="mt-5 flex items-center gap-3">

              <span
                className="
                  rounded-full
                  bg-green-500/20
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-green-300
                "
              >
                {shouldHold ? "HOLD" : "REVIEW"}
              </span>

              <ArrowRight
                size={22}
                className="text-yellow-300"
              />

            </div>

            <p className="mt-5 text-white/60">
              {shouldHold
                ? "Monitor prices before selling"
                : "Review current market conditions"}
            </p>

          </motion.div>

        </div>

        {/* Confidence & Actions */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div className="flex items-center gap-6">

            <div
              className="
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-green-400/20
                bg-green-500/10
              "
            >

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-dashed
                  border-green-400/40
                "
              />

              <span
                className="
                  text-xl
                  font-black
                  text-green-300
                "
              >
                {confidence}%
              </span>

            </div>

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                "
              >
                AI Confidence
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {confidence >= 90
                  ? "High Prediction Accuracy"
                  : confidence >= 75
                    ? "Good Prediction Accuracy"
                    : "Moderate Prediction Accuracy"}
              </h3>

              <p className="mt-2 text-white/60">
                Based on available market data and price
                observations.
              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-4">

            <button
              className="
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-emerald-500
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              View Forecast
            </button>

            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                px-7
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/[0.08]
              "
            >
              Download Report
            </button>

            <button
              className="
                rounded-2xl
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-7
                py-4
                font-semibold
                text-cyan-300
                backdrop-blur-xl
                transition
                hover:bg-cyan-500/20
              "
            >
              AI Analysis
            </button>

          </div>

        </div>

      </div>
    </motion.section>
  );
}