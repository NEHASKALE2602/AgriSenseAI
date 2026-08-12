"use client";

import {
  Sparkles,
  BadgeCheck,
  IndianRupee,
  TrendingUp,
  ShieldCheck,
  ShoppingBasket,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

type MarketIntelligenceProps = {
  prediction: any;
};

export default function MarketIntelligence({
  prediction,
}: MarketIntelligenceProps) {
  return (
    <section className="mt-16">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-green-400/20

              bg-green-400/10

              px-4
              py-2

              text-sm

              text-green-300
            "
          >
            <Sparkles size={15} />

            AI Market Intelligence

          </div>

          <h2
            className="
              mt-5

              text-5xl

              font-black

              text-white
            "
          >
            Crop Opportunity Report
          </h2>

          <p
            className="
              mt-4

              max-w-3xl

              text-lg

              leading-8

              text-white/70
            "
          >
            AgriSense AI analyzes market demand,
            crop profitability, government support,
            nearby buyers and environmental conditions
            to recommend the most profitable crop.
          </p>

        </div>

      </div>

      {/* ================= MAIN CARD ================= */}

      <div
        className="
          mt-12

          overflow-hidden

          rounded-[34px]

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-3xl

          shadow-[0_25px_80px_rgba(0,0,0,.25)]
        "
      >

        {/* Top */}

        <div
          className="
            flex

            items-center
            justify-between

            border-b
            border-white/10

            px-10
            py-8
          "
        >

          <div className="flex items-center gap-6">

            <img
              src={`/images/${prediction.recommended_crop.toLowerCase()}.png`}
              alt={prediction.recommended_crop}
              className="
                h-24
                w-24

                rounded-3xl

                border
                border-white/10

                object-cover
              "
            />

            <div>

              <p className="text-white/60">
                Recommended Crop
              </p>

              <h2
                className="
                  mt-2

                  text-5xl

                  font-black

                  text-white
                "
              >
                {prediction.recommended_crop}
              </h2>

              <div
                className="
                  mt-4

                  flex
                  gap-3
                "
              >

                <span
                  className="
                    rounded-full

                    bg-green-500/15

                    px-4
                    py-2

                    text-sm

                    font-semibold

                    text-green-300
                  "
                >
                  Top Prediction
                </span>

                {/* <span
                  className="
                    rounded-full

                    bg-cyan-500/15

                    px-4
                    py-2

                    text-sm

                    font-semibold

                    text-cyan-300
                  "
                >
                  High Profit
                </span> */}

                {/* <span
                  className="
                    rounded-full

                    bg-yellow-500/15

                    px-4
                    py-2

                    text-sm

                    font-semibold

                    text-yellow-300
                  "
                >
                   Low Risk
                </span> */}

              </div>

            </div>

          </div>

          {/* AI Confidence */}

          <div className="text-right">

            <p className="text-white/60">
              AI Confidence
            </p>

            <h2
              className="
                mt-2

                text-6xl

                font-black

                text-green-300
              "
            >
              {prediction.confidence}%
            </h2>

            <p className="mt-2 text-white/50">
              Machine Learning Prediction
            </p>

          </div>

        </div>
        {/* ================= REPORT BODY ================= */}

        <div
          className="
            grid
            xl:grid-cols-[1.35fr_.95fr]
            gap-10

            px-10
            py-10
          "
        >

          {/* LEFT */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              AI Market Opportunity
            </h3>

            <p className="mt-3 text-white/65 leading-8">
              Based on the selected farm location, soil
              parameters, weather conditions and AI model
              prediction, AgriSense AI identifies{" "}
              <span className="text-green-300 font-semibold">
                {prediction.recommended_crop}
              </span>{" "}
              as the most suitable crop for this farm.
            </p>

            {/* REPORT */}

            <div className="mt-10 space-y-5">

              {[
                {
                  icon: IndianRupee,
                  title: "Expected Selling Price",
                  value: prediction.market_price ?? "₹2800 / Quintal",
                  color: "text-green-300",
                },
                {
                  icon: TrendingUp,
                  title: "Market Demand",
                  value: prediction.market_demand ?? "High",
                  color: "text-cyan-300",
                },
                {
                  icon: ShieldCheck,
                  title: "Risk Level",
                  value: prediction.risk_level,
                  color: "text-green-300",
                },
                {
                  icon: ShoppingBasket,
                  title: "Nearest Buyers",
                  value: prediction.nearest_buyers ?? "25 Buyers",
                  color: "text-yellow-300",
                },
                {
                  icon: CalendarDays,
                  title: "Harvest Duration",
                  value: prediction.harvest_duration ?? "120 Days",
                  color: "text-orange-300",
                },

              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                      group

                      flex
                      items-center
                      justify-between

                      rounded-3xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      px-6
                      py-5

                      transition-all
                      duration-300

                      hover:bg-white/[0.05]
                      hover:-translate-y-1
                    "
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center

                          rounded-2xl

                          bg-white/[0.04]
                        "
                      >

                        <Icon
                          className="text-green-300"
                          size={26}
                        />

                      </div>

                      <div>

                        <p className="text-white/55">
                          {item.title}
                        </p>

                        <h4
                          className={`
                            mt-1

                            text-xl

                            font-bold

                            ${item.color}
                          `}
                        >
                          {item.value}
                        </h4>

                      </div>

                    </div>

                    <ArrowUpRight
                      className="
                        text-white/30
                        transition-all
                        duration-300

                        group-hover:text-green-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                );

              })}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
                rounded-[32px]

                border
                border-green-400/15

                bg-gradient-to-br

                from-green-500/10
                via-white/[0.03]
                to-emerald-500/10

                backdrop-blur-2xl

                p-8
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-green-500/15

                  px-4
                  py-2

                  text-green-300
                "
              >
                <BadgeCheck size={16} />

                AI Decision
              </div>

              <h3
                className="
                  mt-6

                  text-3xl

                  font-bold

                  text-white
                "
              >
                Why {prediction.recommended_crop}?
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-white/70
                "
              >
                {prediction.ai_summary ?? "AI analysis unavailable."}
              </p>
              {/* AI Reasons */}

              <div className="mt-8 space-y-4">
                {prediction.ai_reasons?.map((item: string) => (
                  <div
                    key={item}
                    className="
        flex
        items-center
        gap-3
      "
                  >
                    <div
                      className="
          h-3
          w-3
          rounded-full
          bg-green-400
          shadow-[0_0_12px_rgba(34,197,94,.8)]
        "
                    />

                    <span className="text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              {/* Profit Box */}

              <div
                className="
                  mt-10

                  rounded-3xl

                  border
                  border-green-400/20

                  bg-green-500/10

                  p-6
                "
              >

                <p className="text-white/60">
                  Expected Profit
                </p>

                <h2
                  className="
                    mt-3

                    text-5xl

                    font-black

                    text-green-300
                  "
                >
                  {prediction.expected_profit ?? "₹1.2L"}
                </h2>

                <p
                  className="
                    mt-3

                    text-white/65
                  "
                >
                  Estimated profit per hectare after
                  cultivation expenses.
                </p>

              </div>

              {/* Download Button */}

              <button
                className="
                  mt-8

                  w-full

                  rounded-3xl

                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600

                  py-5

                  text-lg
                  font-bold
                  text-white

                  transition-all
                  duration-300

                  hover:scale-[1.02]

                  hover:shadow-[0_0_35px_rgba(34,197,94,.45)]
                "
              >
                Download AI Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}