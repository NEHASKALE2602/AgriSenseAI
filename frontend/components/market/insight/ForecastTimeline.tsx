"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const timeline = [
  {
    day: "Today",
    price: "₹4,820",
    confidence: "91%",
    demand: "Medium",
  },
  {
    day: "Tomorrow",
    price: "₹4,890",
    confidence: "92%",
    demand: "High",
  },
  {
    day: "3 Days",
    price: "₹4,980",
    confidence: "94%",
    demand: "High",
  },
  {
    day: "7 Days",
    price: "₹5,080",
    confidence: "95%",
    demand: "Very High",
  },
  {
    day: "15 Days",
    price: "₹5,240",
    confidence: "96%",
    demand: "Very High",
  },
];

export default function ForecastTimeline() {
  return (
    <motion.section
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
        duration: 0.8,
      }}
      className="
        relative

        overflow-hidden

        rounded-[36px]

        border
        border-cyan-400/15

        bg-white/[0.04]

        backdrop-blur-3xl

        p-10
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0

          h-[280px]
          w-[280px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              border
              border-cyan-400/20

              bg-cyan-500/10
            "
          >

            <CalendarDays
              size={28}
              className="text-cyan-300"
            />

          </div>

          <div>

            <p
              className="
                text-xs

                uppercase

                tracking-[0.30em]

                text-cyan-300
              "
            >
              AI Forecast Timeline
            </p>

            <h2
              className="
                mt-2

                text-4xl
                font-black

                text-white
              "
            >
              Predicted Market Movement
            </h2>

          </div>

        </div>

        {/* Timeline */}

        <div className="relative mt-16">
                      {/* Main Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-5

              h-[3px]

              rounded-full

              bg-gradient-to-r
              from-green-400/50
              via-cyan-400/50
              to-blue-400/50
            "
          />

          <div
            className="
              relative

              grid

              gap-6

              lg:grid-cols-5
            "
          >

            {timeline.map((item, index) => (

              <motion.div
                key={item.day}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                className="
                  flex
                  flex-col
                  items-center
                "
              >

                {/* Timeline Node */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.25,
                  }}
                  className="
                    relative

                    z-20

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-green-400/30

                    bg-gradient-to-br
                    from-green-400
                    to-cyan-400

                    shadow-[0_0_22px_rgba(34,197,94,.65)]
                  "
                >

                  <TrendingUp
                    size={18}
                    className="text-white"
                  />

                </motion.div>

                {/* Glass Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="
                    mt-8

                    w-full

                    rounded-[26px]

                    border
                    border-white/10

                    bg-white/[0.05]

                    backdrop-blur-2xl

                    p-6
                  "
                >

                  <p
                    className="
                      text-center

                      text-xs

                      uppercase

                      tracking-[0.25em]

                      text-white/45
                    "
                  >
                    {item.day}
                  </p>

                  <h3
                    className="
                      mt-4

                      text-center

                      text-3xl
                      font-black

                      text-green-300
                    "
                  >
                    {item.price}
                  </h3>
                                    {/* Confidence */}

                  <div className="mt-6 flex items-center justify-between">

                    <span
                      className="
                        text-[11px]

                        uppercase

                        tracking-[0.18em]

                        text-white/45
                      "
                    >
                      Confidence
                    </span>

                    <span
                      className="
                        rounded-full

                        bg-green-500/15

                        px-3
                        py-1

                        text-xs
                        font-bold

                        text-green-300
                      "
                    >
                      {item.confidence}
                    </span>

                  </div>

                  {/* Demand */}

                  <div className="mt-5 flex items-center justify-between">

                    <span
                      className="
                        text-[11px]

                        uppercase

                        tracking-[0.18em]

                        text-white/45
                      "
                    >
                      Demand
                    </span>

                    <span
                      className="
                        rounded-full

                        bg-cyan-500/15

                        px-3
                        py-1

                        text-xs
                        font-bold

                        text-cyan-300
                      "
                    >
                      {item.demand}
                    </span>

                  </div>

                  {/* Mini Progress */}

                  <div
                    className="
                      mt-6

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
                        width: `${88 + index * 2}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.15,
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

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </motion.section>
  );
}