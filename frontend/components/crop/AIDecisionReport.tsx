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


type AIDecisionReportProps = {
  prediction: any;
};

export default function AIDecisionReport({
  prediction,
}: AIDecisionReportProps) {
  const reports = [
    {
      icon: Sprout,
      title: "Recommended Crop",
      value: prediction.recommended_crop,
      color: "text-green-400",
      description:
        "AI selected the top crop predicted by the machine-learning model based on soil and weather conditions.",
    },
    {
      icon: CloudRain,
      title: "Water Requirement",
      value: prediction.water_requirement,
      color: "text-cyan-400",
      description:
        "Estimated irrigation requirement for this crop.",
    },
    {
      icon: ThermometerSun,
      title: "Growth Duration",
      value: prediction.growth_duration,
      color: "text-orange-300",
      description:
        "Approximate time required until harvesting.",
    },
    {
      icon: Droplets,
      title: "Expected Yield",
      value: prediction.expected_yield,
      color: "text-blue-400",
      description:
        "Estimated production under ideal farming practices.",
    },
    {
      icon: TrendingUp,
      title: "Expected Profit",
      value: prediction.expected_profit,
      color: "text-emerald-400",
      description:
        "Approximate profit based on average market conditions.",
    },
    {
      icon: FlaskConical,
      title: "Recommended Fertilizer",
      value: prediction.recommended_fertilizer,
      color: "text-yellow-300",
      description:
        "Suggested fertilizer for healthy crop growth.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Level",
      value: prediction.risk_level,
      color: "text-purple-300",
      description:
        "Estimated cultivation risk based on AI analysis.",
    },
  ];
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