"use client";

import {
  FlaskConical,
  Droplets,
  Thermometer,
  CloudRain,
} from "lucide-react";

export default function FarmAnalysisPanel() {
  return (
    <section className="mt-12">

      {/* Section Title */}

      <div className="mb-8">

        <h2
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Farm Analysis
        </h2>

        <p
          className="
            mt-2
            text-white/65
          "
        >
          Enter your farm conditions and let AI recommend the best crop.
        </p>

      </div>

      {/* Main Layout */}

      <div
        className="
          grid
          grid-cols-12
          gap-8
        "
      >

        {/* LEFT PANEL */}

        <div
          className="
            col-span-7

            rounded-[32px]

            border
            border-white/10

            bg-white/[0.04]

            backdrop-blur-3xl

            p-8
          "
        >

          <div className="flex items-center gap-3">

            <FlaskConical
              size={24}
              className="text-emerald-300"
            />

            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              Soil Parameters
            </h3>

          </div>

          <p
            className="
              mt-2
              text-white/60
            "
          >
            Provide accurate soil values for better AI prediction.
          </p>

        </div>

        {/* RIGHT PANEL */}

<div
  className="
    col-span-5

    rounded-[32px]

    border
    border-white/10

    bg-white/[0.04]

    backdrop-blur-3xl

    p-8
  "
>

  <h3
    className="
      text-2xl
      font-semibold
      text-white
    "
  >
    Live Farm Status
  </h3>

  <p
    className="
      mt-2
      text-white/60
    "
  >
    AI continuously evaluates your farm conditions.
  </p>

  {/* AI Status */}

  <div className="mt-8 space-y-6">

    {/* Soil Health */}

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-center justify-between">

        <span className="text-white/70">
          Soil Health
        </span>

        <span className="font-semibold text-green-300">
          Excellent
        </span>

      </div>

      <div className="mt-3 h-2 rounded-full bg-white/10">

        <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />

      </div>

    </div>

    {/* Moisture */}

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-center justify-between">

        <span className="text-white/70">
          Moisture
        </span>

        <span className="font-semibold text-cyan-300">
          Good
        </span>

      </div>

      <div className="mt-3 h-2 rounded-full bg-white/10">

        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

      </div>

    </div>

    {/* Nutrient Balance */}

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-center justify-between">

        <span className="text-white/70">
          Nutrient Balance
        </span>

        <span className="font-semibold text-yellow-300">
          Optimal
        </span>

      </div>

      <div className="mt-3 h-2 rounded-full bg-white/10">

        <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />

      </div>

    </div>

  </div>

</div>

      </div>

    </section>
  );
}
          {/* Input Grid */}

          <div
            className="
              mt-8

              grid

              grid-cols-2

              gap-5
            "
          >

            {/* Nitrogen */}

            <div>

              <label className="text-sm text-white/60">
                Nitrogen (N)
              </label>

              <input
                type="number"
                placeholder="e.g. 90"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-emerald-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

            {/* Phosphorus */}

            <div>

              <label className="text-sm text-white/60">
                Phosphorus (P)
              </label>

              <input
                type="number"
                placeholder="e.g. 42"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-emerald-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

            {/* Potassium */}

            <div>

              <label className="text-sm text-white/60">
                Potassium (K)
              </label>

              <input
                type="number"
                placeholder="e.g. 55"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-emerald-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

            {/* pH */}

            <div>

              <label className="text-sm text-white/60">
                Soil pH
              </label>

              <input
                type="number"
                placeholder="e.g. 6.5"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-emerald-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

          </div>
                    {/* Second Row */}

          <div
            className="
              mt-5

              grid

              grid-cols-3

              gap-5
            "
          >

            {/* Temperature */}

            <div>

              <label className="text-sm text-white/60">
                Temperature (°C)
              </label>

              <input
                type="number"
                placeholder="28"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-orange-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

            {/* Humidity */}

            <div>

              <label className="text-sm text-white/60">
                Humidity (%)
              </label>

              <input
                type="number"
                placeholder="70"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-cyan-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

            {/* Rainfall */}

            <div>

              <label className="text-sm text-white/60">
                Rainfall (mm)
              </label>

              <input
                type="number"
                placeholder="180"
                className="
                  mt-2

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-4

                  text-white

                  outline-none

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  focus:border-blue-400/40

                  focus:bg-white/[0.07]
                "
              />

            </div>

          </div>

          {/* AI Button */}

          <button
            className="
              mt-8

              w-full

              rounded-2xl

              bg-gradient-to-r

              from-emerald-500

              via-green-500

              to-emerald-600

              py-5

              text-lg

              font-bold

              text-white

              transition-all

              duration-300

              hover:scale-[1.02]

              hover:shadow-[0_0_45px_rgba(34,197,94,.45)]
            "
          >
            ✨ Analyze Farm with AI
          </button>