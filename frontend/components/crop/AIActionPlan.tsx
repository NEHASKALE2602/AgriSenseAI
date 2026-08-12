"use client";

import {
  CheckCircle2,
  Droplets,
  FlaskConical,
  Bug,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

type AIActionPlanProps = {
  prediction: any;
};

export default function AIActionPlan({
  prediction,
}: AIActionPlanProps) {
  const actions = [
    {
      icon: Droplets,
      title: "Irrigation",
      value:
        prediction.action_plan?.irrigation ??
        `Water requirement: ${prediction.water_requirement}. Adjust irrigation according to rainfall and soil moisture.`,
      color: "text-cyan-400",
    },
    {
      icon: FlaskConical,
      title: "Fertilizer",
      value:
        prediction.action_plan?.fertilizer ??
        prediction.recommended_fertilizer,
      color: "text-yellow-300",
    },
    {
      icon: Bug,
      title: "Disease Prevention",
      value:
        prediction.action_plan?.disease_prevention ??
        `Monitor the ${prediction.recommended_crop} crop regularly for signs of disease and pest damage.`,
      color: "text-red-400",
    },
    {
      icon: CalendarDays,
      title: "Harvest",
      value:
        prediction.action_plan?.harvest ??
        `Expected harvest/growing duration: ${prediction.growth_duration}.`,
      color: "text-green-400",
    },
  ];

  return (
    <section>
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
                  shrink-0
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
                className="text-green-400 shrink-0"
                size={26}
              />
            </div>
          );
        })}

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
            gap-6
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

            <p className="mt-2 text-white/65 leading-8">
              {prediction.final_recommendation ??
                `Start with ${prediction.recommended_crop} based on the current AI prediction and farm conditions.`}
            </p>
          </div>

          <TrendingUp
            size={46}
            className="text-green-400 shrink-0"
          />
        </div>
      </div>
    </section>
  );
}