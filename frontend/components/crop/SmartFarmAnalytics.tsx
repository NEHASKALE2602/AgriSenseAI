"use client";

import {
  TrendingUp,
  Leaf,
  Droplets,
  CalendarDays,
} from "lucide-react";
import CircularProgress from "@/components/ui/CircularProgress";

type SmartFarmAnalyticsProps = {
  prediction: any;
};

export default function SmartFarmAnalytics({
  prediction,
}: SmartFarmAnalyticsProps) {
  return (
    <section className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          Smart Farm Analytics
        </h2>

        <p className="mt-2 text-white/65">
          AI generated production insights for your farm.
        </p>

      </div>

      {/* Top Analytics */}

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Expected Yield */}

        <div
          className="
    rounded-[30px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-8

    flex
    items-center
    justify-center

    hover:-translate-y-2
    transition-all
    duration-500
  "
        >

          <CircularProgress
            value={80}
            title="Expected Yield"
            subtitle={prediction.expected_yield}
            color="#43A047"
          />

        </div>

        {/* Profit */}

        <div
          className="
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            text-center
          "
        >

          <TrendingUp
            size={46}
            className="mx-auto text-green-400"
          />

          <h2 className="mt-6 text-5xl font-black text-white">
            {prediction.expected_profit}
          </h2>

          <p className="mt-2 text-white/60">
            Estimated Profit / Acre
          </p>

        </div>

        {/* AI Confidence */}

        <div
          className="
    rounded-[30px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-8

    flex
    items-center
    justify-center

    hover:-translate-y-2
    transition-all
    duration-500
  "
        >

          <CircularProgress
            value={prediction.confidence}
            title="AI Confidence"
            subtitle="Prediction Confidence"
            color="#22C55E"
          />

        </div>
      </div>

      {/* Bottom Stats */}

      <div className="grid lg:grid-cols-4 gap-7 mt-8">

        {[
          {
            icon: Droplets,
            title: "Water Requirement",
            value: prediction.water_requirement,
          },
          {
            icon: CalendarDays,
            title: "Growing Days",
            value: prediction.growth_duration,
          },
          {
            icon: Leaf,
            title: "Risk Level",
            value: prediction.risk_level,
          },
          {
            icon: TrendingUp,
            title: "AI Confidence",
            value: `${prediction.confidence}%`,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6

                transition-all
                duration-500

                hover:border-green-400/20
                hover:-translate-y-1
              "
            >

              <Icon
                className="text-green-400"
                size={30}
              />

              <p className="mt-5 text-white/60">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.value}
              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}