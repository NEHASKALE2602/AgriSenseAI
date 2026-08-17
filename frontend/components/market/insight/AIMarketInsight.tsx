"use client";

import { motion } from "framer-motion";

import AIConfidenceRing from "./AIConfidenceRing";
import AIAnalyticsDock from "./AIAnalyticsDock";
import ForecastTimeline from "./ForecastTimeline";
import MiniPriceGraph from "./MiniPriceGraph";
import AIRecommendation from "./AIRecommendation";

import { MarketRecord } from "@/services/market";

interface AIMarketInsightProps {
  marketData: MarketRecord[];
  crop: string;
}

export default function AIMarketInsight({
  marketData,
  crop,
}: AIMarketInsightProps) {

  const prices = marketData
    .map((item) => Number(item.modal_price))
    .filter((price) => Number.isFinite(price));

  const currentPrice =
    prices.length > 0
      ? Math.round(
          prices.reduce((sum, price) => sum + price, 0) /
            prices.length
        )
      : 0;

  const highestPrice =
    prices.length > 0 ? Math.max(...prices) : 0;

  const lowestPrice =
    prices.length > 0 ? Math.min(...prices) : 0;

  const priceRange =
    highestPrice > 0
      ? Math.round(
          ((highestPrice - lowestPrice) /
            highestPrice) *
            100
        )
      : 0;

  const confidence =
    marketData.length >= 15
      ? 95
      : marketData.length >= 10
      ? 92
      : marketData.length >= 5
      ? 88
      : 80;

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

      <div
        className="
          grid
          gap-10
          xl:grid-cols-[380px_1fr]
        "
      >

        <AIConfidenceRing
          confidence={confidence}
        />

        <div className="space-y-10">

          <AIAnalyticsDock
            marketData={marketData}
            currentPrice={currentPrice}
            highestPrice={highestPrice}
            lowestPrice={lowestPrice}
            priceRange={priceRange}
          />

          <AIRecommendation
            crop={crop}
            currentPrice={currentPrice}
            highestPrice={highestPrice}
            confidence={confidence}
          />

        </div>

      </div>

      <ForecastTimeline
        crop={crop}
        currentPrice={currentPrice}
        confidence={confidence}
      />

      <MiniPriceGraph
        crop={crop}
        currentPrice={currentPrice}
        highestPrice={highestPrice}
      />

    </motion.section>
  );
}