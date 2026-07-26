"use client";

import {
  TriangleAlert,
  ShieldCheck,
} from "lucide-react";

export default function WeatherAlerts() {
  return (
    <section className="mt-14">

      {/* Heading */}

      <div className="flex items-center justify-between">

        <h2
          className="
            text-lg
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white
          "
        >
          Weather Alerts
        </h2>

        <span
          className="
            text-white/75
            text-sm
          "
        >
          Live Monitoring
        </span>

      </div>

      {/* Glass Card */}

      <div
        className="
          mt-6

          rounded-[30px]

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-2xl

          p-8
        "
      >
                <div className="flex items-start justify-between gap-8">

          {/* Left */}

          <div className="flex items-start gap-5">

            <div
              className="
                h-16
                w-16

                rounded-2xl

                bg-green-500/10

                flex
                items-center
                justify-center
              "
            >

              <ShieldCheck
                size={34}
                className="text-green-400"
              />

            </div>

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                No Severe Weather Alerts
              </h3>

              <p
                className="
                  mt-2

                  text-white/65

                  leading-7
                "
              >
                Current weather conditions are stable.
                No storms, heavy rainfall, or extreme weather
                warnings have been detected for your region.
              </p>

            </div>

          </div>

          {/* Live Status */}

          <div
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-green-400/25

              bg-green-400/10

              px-4
              py-2
            "
          >

            <span
              className="
                h-2.5
                w-2.5

                rounded-full

                bg-green-400

                animate-pulse
              "
            />

            <span
              className="
                text-green-400
                font-medium
              "
            >
              Monitoring Live
            </span>

          </div>

        </div>

        {/* Divider */}

        <div
          className="
            my-8
            h-px

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Alert Information */}

        <div
          className="
            grid
            grid-cols-3

            gap-6
          "
        >          {/* Rain */}

          <div
            className="
              rounded-2xl

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-5

              transition-all
              duration-500

              hover:border-cyan-400/25
              hover:bg-white/[0.05]
            "
          >

            <TriangleAlert
              size={24}
              className="text-cyan-300"
            />

            <h4
              className="
                mt-4

                text-white

                font-semibold
              "
            >
              Rain Status
            </h4>

            <p
              className="
                mt-2

                text-white/60

                text-sm

                leading-6
              "
            >
              No rainfall expected for the next 12 hours.
            </p>

          </div>

          {/* Wind */}

          <div
            className="
              rounded-2xl

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-5

              transition-all
              duration-500

              hover:border-yellow-300/25
              hover:bg-white/[0.05]
            "
          >

            <TriangleAlert
              size={24}
              className="text-yellow-300"
            />

            <h4
              className="
                mt-4

                text-white

                font-semibold
              "
            >
              Wind Advisory
            </h4>

            <p
              className="
                mt-2

                text-white/60

                text-sm

                leading-6
              "
            >
              Light winds today. Safe conditions for spraying and field work.
            </p>

          </div>

          {/* Temperature */}

          <div
            className="
              rounded-2xl

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-5

              transition-all
              duration-500

              hover:border-red-400/25
              hover:bg-white/[0.05]
            "
          >

            <TriangleAlert
              size={24}
              className="text-red-400"
            />

            <h4
              className="
                mt-4

                text-white

                font-semibold
              "
            >
              Temperature
            </h4>

            <p
              className="
                mt-2

                text-white/60

                text-sm

                leading-6
              "
            >
              High UV during afternoon. Field work is recommended before 11 AM
              or after 5 PM.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}