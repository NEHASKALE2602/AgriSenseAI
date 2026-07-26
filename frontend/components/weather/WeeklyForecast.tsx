"use client";

import {
  Sun,
  CloudSun,
  CloudRain,
} from "lucide-react";

const weeklyForecast = [
  {
    day: "Monday",
    weather: "Sunny",
    high: "31°",
    low: "24°",
    rain: "5%",
    icon: Sun,
    color: "text-yellow-300",
  },
  {
    day: "Tuesday",
    weather: "Cloudy",
    high: "30°",
    low: "23°",
    rain: "20%",
    icon: CloudSun,
    color: "text-orange-300",
  },
  {
    day: "Wednesday",
    weather: "Rain",
    high: "28°",
    low: "22°",
    rain: "75%",
    icon: CloudRain,
    color: "text-cyan-300",
  },
  {
    day: "Thursday",
    weather: "Partly Cloudy",
    high: "29°",
    low: "23°",
    rain: "30%",
    icon: CloudSun,
    color: "text-yellow-300",
  },
  {
    day: "Friday",
    weather: "Sunny",
    high: "32°",
    low: "24°",
    rain: "2%",
    icon: Sun,
    color: "text-yellow-300",
  },
  {
    day: "Saturday",
    weather: "Cloudy",
    high: "33°",
    low: "25°",
    rain: "18%",
    icon: CloudSun,
    color: "text-orange-300",
  },
  {
    day: "Sunday",
    weather: "Rain",
    high: "29°",
    low: "23°",
    rain: "80%",
    icon: CloudRain,
    color: "text-cyan-300",
  },
];

export default function WeeklyForecast() {
  return (
    <section className="mt-12">

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
  7 Day Forecast
</h2>

        <span className="text-white/80 text-sm font-medium">
  Next Week Outlook
</span>
      </div>

      <div
  className="
    mt-5

    flex
    gap-5

    overflow-x-auto

    pb-3

    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:none]
    [scrollbar-width:none]
  "
>
                {weeklyForecast.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.day}
              className="
    group

    relative

    min-w-[180px]
    w-[180px]

    overflow-hidden

    rounded-[28px]

    border
    border-white/10

    bg-white/[0.03]

    backdrop-blur-2xl

    p-6

    flex-shrink-0

    transition-all
    duration-500

    hover:-translate-y-2
    hover:border-green-400/30
    hover:bg-white/[0.05]
"
            >

              {/* Glow */}

              <div
                className="
                  absolute

                  -top-10
                  -right-10

                  h-32
                  w-32

                  rounded-full

                  bg-green-400/5

                  blur-3xl
                "
              />

              {/* Day */}

              <p
                className="
                  relative
                  z-10

                  text-white

                  font-semibold

                  text-lg
                "
              >
                {item.day}
              </p>

              {/* Weather */}

              <p
                className="
                  mt-1

                  text-white/55

                  text-sm
                "
              >
                {item.weather}
              </p>

              {/* Icon */}

              <div
                className="
                  mt-6

                  flex
                  justify-center
                "
              >

                <Icon
                  size={46}
                  className={`
                    ${item.color}

                    transition-all
                    duration-500

                    group-hover:scale-110
                  `}
                />

              </div>

              {/* Temperature */}

              <div
                className="
                  mt-6

                  flex
                  justify-between
                  items-center
                "
              >

                <div>

                  <p className="text-white/45 text-xs">
                    High
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.high}
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-white/45 text-xs">
                    Low
                  </p>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-white/80
                    "
                  >
                    {item.low}
                  </h3>

                </div>

              </div>

              {/* Rain */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-white/55
                    text-sm
                  "
                >
                  🌧 Rain
                </span>

                <span
                  className="
                    text-cyan-300
                    font-semibold
                  "
                >
                  {item.rain}
                </span>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}