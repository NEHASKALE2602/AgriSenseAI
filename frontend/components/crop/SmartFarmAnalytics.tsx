"use client";

import {
  TrendingUp,
  Leaf,
  Droplets,
  CalendarDays,
} from "lucide-react";
import CircularProgress from "@/components/ui/CircularProgress";

export default function SmartFarmAnalytics() {
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
    value={58}
    title="Expected Yield"
    subtitle="5.8 Tons / Hectare"
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
            ₹1.25L
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
    value={96}
    title="AI Confidence"
    subtitle="Recommendation Accuracy"
    color="#22C55E"
  />

</div>
      </div>

      {/* Bottom Stats */}

      <div className="grid lg:grid-cols-4 gap-7 mt-8">

        {[
          {
            icon: Droplets,
            title: "Water Usage",
            value: "Medium",
          },
          {
            icon: CalendarDays,
            title: "Growing Days",
            value: "120 Days",
          },
          {
            icon: Leaf,
            title: "Sustainability",
            value: "92%",
          },
          {
            icon: TrendingUp,
            title: "Market Trend",
            value: "Rising",
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