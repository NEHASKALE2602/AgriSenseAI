"use client";

import { useWeather } from "@/context/WeatherContext";
import { useEffect, useState } from "react";

import {
  Bot,
  Sprout,
  Wind,
  CheckCircle2,
} from "lucide-react";

import { getWeatherAdvisor } from "@/services/weather";

type Advisor = {
  confidence?: string;
  irrigation?: string;
  spraying?: string;
  rain?: string;
  disease?: string;
  fertilizer?: string[] | string | null;
  alerts?: string[] | string | null;
};

export default function AIWeatherAdvisor() {
  const [advisor, setAdvisor] = useState<Advisor | null>(null);
  const { city } = useWeather();

  useEffect(() => {
    async function loadAdvisor() {
      try {
        const data = await getWeatherAdvisor(city);

        console.log("AI WEATHER ADVISOR RESPONSE:", data);

        setAdvisor(data);
      } catch (err) {
        console.error("AI Weather Advisor Error:", err);
        setAdvisor(null);
      }
    }

    if (city) {
      loadAdvisor();
    }
  }, [city]);

  /*
   * Convert fertilizer into a safe array.
   *
   * Backend may return:
   * 1. ["Use fertilizer A", "Use fertilizer B"]
   * 2. "Use fertilizer A"
   * 3. null / undefined
   */

  const fertilizerItems: string[] = Array.isArray(advisor?.fertilizer)
    ? advisor.fertilizer
    : typeof advisor?.fertilizer === "string"
      ? [advisor.fertilizer]
      : [];

  const insights = advisor
    ? [
        {
          icon: Sprout,
          title: "Irrigation",
          value: advisor.irrigation || "No recommendation available",
          color: "text-green-400",
        },
        {
          icon: Wind,
          title: "Spraying",
          value: advisor.spraying || "No recommendation available",
          color: "text-blue-300",
        },
      ]
    : [];

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
            text-sm
            text-green-400
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
          p-8
          backdrop-blur-2xl
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
                font-medium
                text-green-400
              "
            >
              {advisor?.confidence || "--"} Confidence
            </span>

          </div>

        </div>

        {/* Recommendations Grid */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
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
                  p-5
                  backdrop-blur-xl
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
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                    "
                  >

                    <Icon
                      size={24}
                      className={`
                        ${item.color}
                        transition-all
                        duration-300
                        group-hover:scale-110
                      `}
                    />

                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <p
                      className="
                        text-sm
                        text-white/60
                      "
                    >
                      {item.title}
                    </p>

                    <h4
                      className="
                        mt-2
                        text-base
                        font-semibold
                        leading-6
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

            {/* AI Icon */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-green-400/10
              "
            >

              <Bot
                size={28}
                className="text-green-400"
              />

            </div>

            {/* Content */}

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
                {advisor?.rain ||
                  "AI farming recommendations will appear here based on current weather conditions."}
              </p>

              {/* Fertilizer */}

              <div
                className="
                  mt-6
                  rounded-xl
                  bg-white/5
                  p-4
                "
              >

                <p
                  className="
                    text-sm
                    text-white/60
                  "
                >
                  Fertilizer Recommendation
                </p>

                {fertilizerItems.length > 0 ? (

                  <ul
                    className="
                      mt-3
                      list-disc
                      space-y-2
                      pl-5
                      text-white/80
                    "
                  >

                    {fertilizerItems.map(
                      (item: string, index: number) => (

                        <li key={index}>
                          {item}
                        </li>

                      )
                    )}

                  </ul>

                ) : (

                  <p
                    className="
                      mt-3
                      text-sm
                      text-white/50
                    "
                  >
                    No fertilizer recommendation available.
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}