"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CloudSun,
  Landmark,
  Ship,
  Activity,
  BarChart3,
} from "lucide-react";

const analytics = [
  {
    title: "Forecast",
    value: "Bullish",
    icon: TrendingUp,
    color: "text-green-300",
    bg: "bg-green-500/10",
    border: "border-green-400/20",
  },
  {
    title: "Demand",
    value: "High",
    icon: Activity,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/20",
  },
  {
    title: "Weather",
    value: "Medium",
    icon: CloudSun,
    color: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/20",
  },
  {
    title: "Government",
    value: "Stable",
    icon: Landmark,
    color: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-400/20",
  },
  {
    title: "Export",
    value: "Growing",
    icon: Ship,
    color: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-400/20",
  },
  {
    title: "Market Score",
    value: "94 / 100",
    icon: BarChart3,
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/20",
  },
];

export default function AIAnalyticsDock() {
  return (
    <section
      className="
        grid
        gap-5

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {analytics.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.55,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className={`
              relative
              overflow-hidden

              rounded-[28px]

              border
              ${item.border}

              ${item.bg}

              backdrop-blur-3xl

              p-6
            `}
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-8
                -top-8

                h-24
                w-24

                rounded-full

                bg-white/5

                blur-3xl
              "
            />

            <div className="relative z-10 flex items-center justify-between">

              <div>
                                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.28em]

                    text-white/45
                  "
                >
                  {item.title}
                </p>

                <h3
                  className={`
                    mt-3

                    text-2xl
                    font-bold

                    ${item.color}
                  `}
                >
                  {item.value}
                </h3>

              </div>

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.08,
                }}
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  ${item.bg}

                  border
                  ${item.border}
                `}
              >
                <Icon
                  size={28}
                  className={item.color}
                />
              </motion.div>

            </div>

            {/* Progress Line */}

            <div
              className="
                mt-8

                h-[4px]

                overflow-hidden

                rounded-full

                bg-white/10
              "
            >

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "85%",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.12,
                }}
                className="
                  h-full

                  rounded-full

                  bg-gradient-to-r
                  from-green-400
                  via-cyan-400
                  to-blue-400
                "
              />

            </div>
                        {/* Live Indicator */}

            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    h-3
                    w-3
                    rounded-full

                    bg-green-400

                    shadow-[0_0_16px_rgba(34,197,94,.9)]
                  "
                />

                <span
                  className="
                    text-xs

                    uppercase

                    tracking-[0.22em]

                    text-white/50
                  "
                >
                  Live Analysis
                </span>

              </div>

              <span
                className="
                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.05]

                  px-3
                  py-1

                  text-[11px]

                  text-white/60
                "
              >
                Updated Now
              </span>

            </div>

          </motion.div>

        );

      })}

    </section>

  );

}