"use client";

import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type RecommendationResultProps = {
  prediction: any;
};

export default function RecommendationResult({
  prediction,
}: RecommendationResultProps) {
  return (
    <section className="mt-10">

      <div
        className="
          relative
          overflow-hidden

          rounded-[34px]

          border
          border-green-400/20

          bg-white/[0.03]

          backdrop-blur-2xl

          p-10

          shadow-[0_20px_60px_rgba(0,0,0,.20)]
        "
      >

        {/* Green Glow */}

        <div
          className="
            absolute
            right-0
            top-0

            h-72
            w-72

            rounded-full

            bg-green-500/10

            blur-[150px]
          "
        />

        <div
          className="
            relative

            z-10

            grid

            lg:grid-cols-[240px_1fr]

            gap-10

            items-center
          "
        >

          {/* Crop Image */}

          <div className="flex justify-center">

            <img
              src={`/images/${prediction.recommended_crop.toLowerCase()}.png`}
              alt={prediction.recommended_crop}
              className="
                w-56
                drop-shadow-[0_20px_50px_rgba(0,0,0,.45)]
                hover:scale-105
                transition-all
                duration-500
              "
            />

          </div>

          {/* Information */}

          <div>

            <div className="flex items-center gap-3">

              <Sparkles
                size={24}
                className="text-green-400"
              />

              <span
                className="
                  text-green-300
                  font-semibold
                  tracking-widest
                  uppercase
                "
              >
                AI Recommendation
              </span>

            </div>

            <h2
              className="
                mt-4

                text-5xl

                font-black

                text-white
              "
            >
              {prediction.recommended_crop}
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
              {prediction.recommended_crop} is the top crop predicted by the machine-learning model for the provided farm conditions, with a confidence level of {prediction.confidence}%. This recommendation is based on an analysis of soil health, climate conditions, and market demand, ensuring that it aligns with both environmental and economic factors for optimal farming decisions.
            </p>

            {/* Badges */}

            <div className="mt-8 flex flex-wrap gap-4">

              <div
                className="
                  rounded-full

                  bg-green-500/15

                  px-5
                  py-2

                  text-green-300

                  font-semibold
                "
              >
                {prediction.confidence}% Match
              </div>

              <div
                className="
                  rounded-full

                  bg-yellow-500/15

                  px-5
                  py-2

                  text-yellow-300

                  font-semibold
                "
              >
                {prediction.expected_profit}
              </div>

              <div
                className="
                  rounded-full

                  bg-cyan-500/15

                  px-5
                  py-2

                  text-cyan-300

                  font-semibold
                "
              >
                {prediction.risk_level} Risk
              </div>

            </div>

            {/* Features */}

            <div
              className="
                mt-10

                grid

                md:grid-cols-3

                gap-6
              "
            >

              <div className="flex gap-3">

                <CheckCircle2
                  className="text-green-400"
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Soil Match
                  </h4>

                  <p className="text-white/60 text-sm">
                    {prediction.confidence}%
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <TrendingUp
                  className="text-yellow-300"
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Market Demand
                  </h4>

                  <p className="text-white/60 text-sm">
                    {prediction.expected_profit}
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <ShieldCheck
                  className="text-cyan-300"
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Disease Risk
                  </h4>

                  <p className="text-white/60 text-sm">
                    {prediction.risk_level}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}