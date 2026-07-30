"use client";

import { motion } from "framer-motion";

import AIConfidenceRing from "./AIConfidenceRing";
import AIAnalyticsDock from "./AIAnalyticsDock";
import ForecastTimeline from "./ForecastTimeline";
import MiniPriceGraph from "./MiniPriceGraph";
import AIRecommendation from "./AIRecommendation";

export default function AIMarketInsight() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="space-y-10"
    >

      {/* ================================================= */}
      {/* AI Intelligence Dashboard */}
      {/* ================================================= */}

      <div
        className="
          grid
          gap-10

          xl:grid-cols-[380px_1fr]
        "
      >

        {/* Left */}

        <AIConfidenceRing />

        {/* Right */}

        <div className="space-y-10">

          <AIAnalyticsDock />

          <AIRecommendation />

        </div>

      </div>

      {/* ================================================= */}
      {/* Forecast Timeline */}
      {/* ================================================= */}

      <ForecastTimeline />

      {/* ================================================= */}
      {/* AI Price Graph */}
      {/* ================================================= */}

      <MiniPriceGraph />

    </motion.section>
  );
}