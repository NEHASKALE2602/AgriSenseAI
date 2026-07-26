"use client";

import {
  Sun,
  CloudSun,
  CloudRain,
} from "lucide-react";

const hourlyData = [
  {
    time: "09 AM",
    temp: "29°",
    icon: Sun,
  },
  {
    time: "10 AM",
    temp: "30°",
    icon: Sun,
  },
  {
    time: "11 AM",
    temp: "31°",
    icon: CloudSun,
  },
  {
    time: "12 PM",
    temp: "31°",
    icon: CloudSun,
  },
  {
    time: "01 PM",
    temp: "30°",
    icon: CloudRain,
  },
  {
    time: "02 PM",
    temp: "28°",
    icon: CloudRain,
  },
  {
    time: "03 PM",
    temp: "27°",
    icon: CloudRain,
  },
  {
    time: "04 PM",
    temp: "26°",
    icon: CloudSun,
  },
];

export default function HourlyStrip() {
  return (
    <section className="mt-10">

      {/* Title */}

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
  Today's Forecast
</h2>

        <span
  className="
    text-sm
    font-medium
    text-white/80
  "
>
  Updated Every Hour
</span>

      </div>

      {/* Divider */}

      <div
        className="
          mt-4
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
      />

      {/* Timeline */}

      <div
        className="
          mt-6

          flex
          items-center
          justify-between
        "
      >
                {hourlyData.map((item, index) => {

          const Icon = item.icon;

          const currentHour = index === 2;

          return (

            <div
              key={item.time}
              className={`
                group
                relative

                flex
                flex-col
                items-center

                transition-all
                duration-300

                hover:-translate-y-2

                ${
                  currentHour
                    ? "scale-105"
                    : ""
                }
              `}
            >

              {/* Current Hour Glow */}

              {currentHour && (

                <div
                  className="
                    absolute
                    -top-5

                    h-24
                    w-24

                    rounded-full

                    bg-yellow-300/10

                    blur-3xl
                  "
                />

              )}

              {/* Time */}

              <span
                className={`
                  text-xs
                  tracking-wider

                  ${
                    currentHour
                      ? "text-green-400 font-semibold"
                      : "text-white/55"
                  }
                `}
              >
                {item.time}
              </span>

              {/* Icon */}

              <Icon
                size={30}
                className={`
                  mt-5
                  transition-all
                  duration-300

                  ${
                    currentHour
                      ? "text-yellow-300 drop-shadow-[0_0_18px_rgba(255,210,0,.9)]"
                      : "text-white/90 group-hover:text-yellow-300"
                  }
                `}
              />

              {/* Temperature */}

              <span
                className={`
                  mt-5
                  text-lg
                  font-bold

                  ${
                    currentHour
                      ? "text-white"
                      : "text-white/80"
                  }
                `}
              >
                {item.temp}
              </span>

              {/* Small Timeline Dot */}

              <div
                className={`
                  mt-5

                  h-2
                  w-2

                  rounded-full

                  transition-all

                  ${
                    currentHour
                      ? "bg-green-400 shadow-[0_0_12px_rgba(34,197,94,.9)]"
                      : "bg-white/25"
                  }
                `}
              />

            </div>

          );

        })}

      </div>

      {/* Bottom Divider */}

      <div
        className="
          mt-8
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

    </section>

  );
}