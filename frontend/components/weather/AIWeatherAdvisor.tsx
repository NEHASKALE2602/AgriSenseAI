"use client";

import {
  Bot,
  Sprout,
  Sun,
  CloudRain,
  Wind,
  CheckCircle2,
} from "lucide-react";

const insights = [
  {
    icon: Sprout,
    title: "Best Time for Irrigation",
    value: "After 5:30 PM",
    color: "text-green-400",
  },
  {
    icon: Sun,
    title: "UV Index",
    value: "Very High",
    color: "text-yellow-300",
  },
  {
    icon: CloudRain,
    title: "Rain Prediction",
    value: "No Rain in Next 12 Hours",
    color: "text-cyan-300",
  },
  {
    icon: Wind,
    title: "Wind Condition",
    value: "Light Wind",
    color: "text-blue-300",
  },
];

export default function AIWeatherAdvisor() {
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
          AI Weather Advisor
        </h2>

        <div
          className="
            flex
            items-center
            gap-2

            text-green-400
            text-sm
          "
        >

          <Bot size={18} />

          AI Powered

        </div>

      </div>

      {/* Glass Panel */}

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
                {/* Top */}

        <div className="flex items-center justify-between">

          <div>

            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Today's AI Farming Recommendation
            </h3>

            <p
              className="
                mt-2
                text-white/60
              "
            >
              Based on today's weather conditions and AI analysis.
            </p>

          </div>

          {/* AI Status */}

          <div
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-green-400/30

              bg-green-400/10

              px-4
              py-2
            "
          >

            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span
              className="
                text-green-400
                font-medium
              "
            >
              98% Confidence
            </span>

          </div>

        </div>

        {/* Recommendations Grid */}

        <div
          className="
            mt-10

            grid
            grid-cols-2

            gap-6
          "
        >
                      {insights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-xl

                  p-6

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-green-400/25
                  hover:bg-white/[0.05]
                "
              >

                <div className="flex items-start gap-4">

                  {/* Icon */}

                  <div
                    className="
                      h-12
                      w-12

                      rounded-xl

                      bg-white/5

                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon
                      size={24}
                      className={`${item.color} transition-all duration-300 group-hover:scale-110`}
                    />

                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <p
                      className="
                        text-white/60
                        text-sm
                      "
                    >
                      {item.title}
                    </p>

                    <h4
                      className="
                        mt-2

                        text-lg
                        font-semibold

                        text-white
                      "
                    >
                      {item.value}
                    </h4>

                  </div>

                </div>

              </div>

            );

          })}
                </div>

        {/* AI Recommendation */}

        <div
          className="
            mt-8

            rounded-2xl

            border
            border-green-400/20

            bg-gradient-to-r
            from-green-500/10
            via-transparent
            to-cyan-500/10

            p-6
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-green-400/10

                flex
                items-center
                justify-center
              "
            >

              <Bot
                size={28}
                className="text-green-400"
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
                AI Farming Suggestion
              </h3>

              <p
                className="
                  mt-3

                  leading-8

                  text-white/70
                "
              >
                Weather conditions are favorable for irrigation after sunset.
                Avoid spraying pesticides during midday because of the high UV
                index. Light winds make today suitable for fertilizer
                application, and no rainfall is expected in the next 12 hours.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}