"use client";

import {
  Sprout,
  CloudRain,
  ThermometerSun,
  Droplets,
  TrendingUp,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

const reports = [
  {
    icon: Sprout,
    title: "Soil Compatibility",
    value: "Excellent",
    color: "text-green-400",
    description:
      "Nitrogen, Phosphorus and Potassium perfectly match Rice requirements.",
  },
  {
    icon: CloudRain,
    title: "Rainfall",
    value: "Ideal",
    color: "text-cyan-400",
    description:
      "Current rainfall falls within the optimum range for healthy growth.",
  },
  {
    icon: ThermometerSun,
    title: "Temperature",
    value: "29°C",
    color: "text-orange-300",
    description:
      "Temperature is suitable for maximum crop productivity.",
  },
  {
    icon: Droplets,
    title: "Water Requirement",
    value: "Moderate",
    color: "text-blue-400",
    description:
      "Water availability is sufficient throughout the growing season.",
  },
  {
    icon: TrendingUp,
    title: "Market Demand",
    value: "Very High",
    color: "text-emerald-400",
    description:
      "Current market trends indicate excellent demand and profitability.",
  },
  {
    icon: FlaskConical,
    title: "Fertilizer Advice",
    value: "Balanced NPK",
    color: "text-yellow-300",
    description:
      "Use balanced fertilizer during vegetative growth for higher yield.",
  },
  {
    icon: ShieldCheck,
    title: "Disease Risk",
    value: "Low",
    color: "text-purple-300",
    description:
      "Current environmental conditions indicate low disease probability.",
  },
];

export default function AIDecisionReport() {
  return (
    <section className="mt-14">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          AI Decision Report
        </h2>

        <p className="mt-2 text-white/65">
          Why AgriSense AI selected this crop.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-7">

        {reports.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                group

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-xl

                p-7

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-green-400/20
              "
            >

              <div className="flex gap-5">

                <div
                  className="
                    flex

                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    bg-white/[0.04]
                  "
                >

                  <Icon
                    size={28}
                    className={item.color}
                  />

                </div>

                <div className="flex-1">

                  <div className="flex justify-between">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <span className={`${item.color} font-semibold`}>
                      {item.value}
                    </span>

                  </div>

                  <p className="mt-3 text-white/65 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}