"use client";

import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function RecommendationResult() {
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
              src="/images/rice.png"
              alt="Rice"
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
              Rice
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
              Rice is the best crop for your current farm
              conditions because the soil nutrients,
              humidity, rainfall and temperature closely
              match the optimal growing requirements.
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
                98% Match
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
                High Profit
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
                Low Risk
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
                    Excellent
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
                    Very High
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
                    Low
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