"use client";

import {
  Sun,
  MapPin,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export default function WeatherHero() {
  return (
    <section
      className="
        relative
        mt-2
        mb-8
        w-full
      "
    >

      {/* Hero Content */}

      <div
        className="
          flex
          justify-end
        "
      >

        <div
          className="
            w-[420px]
            text-right
          "
        >

          {/* Weather Icon */}

          <div className="flex justify-end">

            <div className="relative">

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-yellow-300/20
                  blur-[45px]
                  animate-pulse
                "
              />

              <Sun
                size={72}
                className="
                  relative
                  text-yellow-300
                  drop-shadow-[0_0_45px_rgba(255,210,0,.95)]
                "
              />

            </div>

          </div>

          {/* Temperature */}

          <h1
            className="
              mt-3
              text-[82px]
              font-black
              leading-none
              tracking-tight
              text-white
            "
          >
            29°
          </h1>

          {/* Weather Condition */}

          <h2
            className="
              mt-2
              text-3xl
              font-semibold
              text-white
            "
          >
            Mostly Sunny
          </h2>

          {/* Location */}

          <div
            className="
              mt-4
              flex
              justify-end
              items-center
              gap-2
              text-white/75
            "
          >

            <MapPin
              size={17}
              className="text-green-400"
            />

            <span className="text-lg">
              Pune, Maharashtra
            </span>

          </div>
                    {/* Weather Details */}

          <div
            className="
              mt-5

              flex
              justify-end
              items-center
              gap-5

              text-sm
              text-white/60
            "
          >

            <div className="flex items-center gap-1">

              <ArrowUp
                size={15}
                className="text-red-400"
              />

              <span>31°</span>

            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-1">

              <ArrowDown
                size={15}
                className="text-cyan-300"
              />

              <span>24°</span>

            </div>

            <div className="h-4 w-px bg-white/20" />

            <span>Feels Like 31°</span>

            <div className="h-4 w-px bg-white/20" />

            <span className="text-green-400">
              Updated Just Now
            </span>

          </div>

          {/* Divider */}

          <div
            className="
              mt-8
              h-px
              w-full
              bg-gradient-to-l
              from-transparent
              via-white/15
              to-transparent
            "
          />

          {/* Weather Highlights */}

          <div
            className="
              mt-6

              flex
              justify-between
              items-center

              text-right
            "
          >

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Humidity
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                68%
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Wind
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                14 km/h
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                UV Index
              </p>

              <h3 className="mt-1 text-xl font-bold text-yellow-300">
                7 High
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                AQI
              </p>

              <h3 className="mt-1 text-xl font-bold text-green-300">
                42
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}