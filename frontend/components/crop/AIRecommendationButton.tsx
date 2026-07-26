"use client";

import { BrainCircuit, Sparkles, CheckCircle2 } from "lucide-react";

export default function AIRecommendationButton() {
  return (
    <section className="mt-10">

      <div
        className="
          relative
          overflow-hidden

          rounded-[34px]

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-2xl

          p-10

          transition-all
          duration-500

          hover:border-green-400/20
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            right-0
            top-0

            h-64
            w-64

            rounded-full

            bg-green-500/10

            blur-[120px]
          "
        />

        <div className="relative z-10">

          <div className="flex items-center gap-3">

            <BrainCircuit
              size={30}
              className="text-green-400"
            />

            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Ready for AI Analysis?
            </h2>

          </div>

          <p
            className="
              mt-4

              max-w-3xl

              text-white/70
              leading-8
            "
          >
            AgriSense AI will analyze your soil nutrients,
            rainfall, humidity, temperature, crop dataset,
            and market conditions before recommending the
            most profitable crop.
          </p>

          {/* AI Checklist */}

          <div
            className="
              mt-8

              grid

              grid-cols-2
              xl:grid-cols-3

              gap-4
            "
          >

            {[
              "Soil Nutrients",
              "Weather Conditions",
              "Rainfall",
              "Market Demand",
              "Disease Risk",
              "Crop Dataset",
            ].map((item) => (

              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3

                  text-white/80
                "
              >

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                {item}

              </div>

            ))}

          </div>

          {/* Button */}

          <button
            className="
              group

              mt-10

              flex
              items-center
              gap-3

              rounded-2xl

              bg-gradient-to-r
              from-green-500
              via-emerald-500
              to-green-700

              px-10
              py-5

              font-semibold
              text-white

              shadow-[0_0_35px_rgba(34,197,94,.35)]

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:shadow-[0_0_50px_rgba(34,197,94,.55)]
            "
          >

            <Sparkles
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            Generate AI Recommendation

          </button>

        </div>

      </div>

    </section>
  );
}