"use client";

import {
  CheckCircle2,
  Droplets,
  FlaskConical,
  Bug,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const actions = [
  {
    icon: Droplets,
    title: "Irrigation",
    value: "Water every 5–7 days depending on rainfall.",
    color: "text-cyan-400",
  },
  {
    icon: FlaskConical,
    title: "Fertilizer",
    value: "Use Balanced NPK 20:20:20 during vegetative growth.",
    color: "text-yellow-300",
  },
  {
    icon: Bug,
    title: "Disease Prevention",
    value: "Monitor leaf blast and bacterial leaf blight.",
    color: "text-red-400",
  },
  {
    icon: CalendarDays,
    title: "Harvest",
    value: "Expected harvest after approximately 120 days.",
    color: "text-green-400",
  },
];

export default function AIActionPlan() {
  return (
    <section className="mt-14">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          AI Farming Action Plan
        </h2>

        <p className="mt-2 text-white/65">
          Personalized recommendations generated for your farm.
        </p>

      </div>

      <div
        className="
          rounded-[34px]
          border
          border-green-400/15
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8
        "
      >

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-start
                gap-6

                py-6

                border-b
                border-white/8

                last:border-none
              "
            >

              <div
                className="
                  h-14
                  w-14

                  rounded-2xl

                  bg-white/[0.05]

                  flex
                  items-center
                  justify-center
                "
              >

                <Icon
                  size={28}
                  className={item.color}
                />

              </div>

              <div className="flex-1">

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    leading-8
                    text-white/65
                  "
                >
                  {item.value}
                </p>

              </div>

              <CheckCircle2
                className="text-green-400"
                size={26}
              />

            </div>

          );

        })}

        {/* Footer */}

        <div
          className="
            mt-8

            rounded-2xl

            bg-green-500/10

            border
            border-green-400/20

            p-6

            flex
            items-center
            justify-between
          "
        >

          <div>

            <h3
              className="
                text-white
                font-bold
                text-xl
              "
            >
              AI Final Recommendation
            </h3>

            <p className="mt-2 text-white/65">
              Start cultivating Rice within the next 7 days
              to maximize yield and profitability.
            </p>

          </div>

          <TrendingUp
            size={46}
            className="text-green-400"
          />

        </div>

      </div>

    </section>
  );
}