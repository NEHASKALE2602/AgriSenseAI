"use client";
import { useWeather } from "@/context/WeatherContext";
import { useEffect, useState } from "react";
import { getForecast } from "@/services/weather";

import {
  Sun,
  CloudSun,
  CloudRain,
} from "lucide-react";

export default function WeeklyForecast() {

  const [weeklyForecast, setWeeklyForecast] = useState<any[]>([]);
  const { city } = useWeather();

  useEffect(() => {
    async function loadForecast() {
      try {
        const data = await getForecast(city);
        setWeeklyForecast(data.daily);
      } catch (err) {
        console.error(err);
      }
    }

    loadForecast();
  }, [city]);

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

          let Icon = CloudSun;
          let color = "text-orange-300";

          if (item.condition === "Rain") {
            Icon = CloudRain;
            color = "text-cyan-300";
          }

          if (item.condition === "Clouds") {
            Icon = CloudSun;
            color = "text-orange-300";
          }

          if (item.condition === "Clear") {
            Icon = Sun;
            color = "text-yellow-300";
          }

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

              <p
                className="
                  relative
                  z-10
                  text-white
                  font-semibold
                  text-lg
                "
              >
                {new Date(item.day).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>

              <p
                className="
                  mt-1
                  text-white/55
                  text-sm
                "
              >
                {item.condition}
              </p>

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
                    ${color}
                    transition-all
                    duration-500
                    group-hover:scale-110
                  `}
                />

              </div>

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
                    Temp
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.temp}°
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-white/45 text-xs">
                    Rain
                  </p>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-cyan-300
                    "
                  >
                    {item.rain}%
                  </h3>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>

  );

}