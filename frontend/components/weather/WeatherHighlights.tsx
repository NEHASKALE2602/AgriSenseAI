"use client";

import {
  Droplets,
  Wind,
  SunMedium,
  Activity,
} from "lucide-react";

const highlights = [
  {
    icon: Droplets,
    label: "Humidity",
    value: "68%",
    color: "text-cyan-300",
  },
  {
    icon: Wind,
    label: "Wind",
    value: "14 km/h",
    color: "text-green-300",
  },
  {
    icon: SunMedium,
    label: "UV Index",
    value: "7 High",
    color: "text-yellow-300",
  },
  {
    icon: Activity,
    label: "Air Quality",
    value: "AQI 42",
    color: "text-purple-300",
  },
];

export default function WeatherHighlights() {
  return (
    <section className="mt-6">

      <div
        className="
          rounded-[28px]
          border
          border-white/10
          bg-black/20
          backdrop-blur-3xl

          px-10
          py-7
        "
      >

        <div
          className="
            grid
            grid-cols-4
            gap-8
          "
        >
                      {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="
                  group
                  flex
                  items-center
                  gap-5

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >

                {/* Icon */}

                <div
                  className="
                    h-14
                    w-14

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.04]

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    group-hover:bg-white/[0.08]
                  "
                >

                  <Icon
                    size={26}
                    className={`${item.color}`}
                  />

                </div>

                {/* Text */}

                <div>

                  <p
                    className="
                      text-sm
                      text-white/55
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}