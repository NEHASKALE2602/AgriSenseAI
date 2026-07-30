"use client";

import { motion } from "framer-motion";

const points = [
  { x: 0, y: 120 },
  { x: 60, y: 105 },
  { x: 120, y: 90 },
  { x: 180, y: 110 },
  { x: 240, y: 70 },
  { x: 300, y: 60 },
  { x: 360, y: 40 },
];

export default function MiniPriceGraph() {
  return (
    <motion.section
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
        duration: 0.7,
      }}
      className="
        relative

        overflow-hidden

        rounded-[34px]

        border
        border-cyan-400/15

        bg-white/[0.04]

        backdrop-blur-3xl

        p-8
      "
    >

      {/* Glow */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          h-[220px]
          w-[220px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-500/10

          blur-[120px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
                text-xs

                uppercase

                tracking-[0.30em]

                text-cyan-300
              "
            >
              AI Price Trend
            </p>

            <h2
              className="
                mt-2

                text-4xl
                font-black

                text-white
              "
            >
              30 Day Forecast
            </h2>

          </div>

          <div
            className="
              rounded-full

              border
              border-green-400/20

              bg-green-500/10

              px-5
              py-2

              text-sm
              font-semibold

              text-green-300
            "
          >
            +8.7%
          </div>

        </div>

        <div className="mt-12">

          <svg
            viewBox="0 0 360 140"
            className="w-full"
          >

            <defs>

              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >

                <stop
                  offset="0%"
                  stopColor="#22c55e"
                />

                <stop
                  offset="50%"
                  stopColor="#22d3ee"
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                />

              </linearGradient>

              <linearGradient
                id="fillGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >

                <stop
                  offset="0%"
                  stopColor="#22d3ee55"
                />

                <stop
                  offset="100%"
                  stopColor="transparent"
                />

              </linearGradient>

            </defs>
                        {/* Area Fill */}

            <motion.path
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              d="
                M0 120
                C60 105 120 90 180 110
                S300 60 360 40
                L360 140
                L0 140
                Z
              "
              fill="url(#fillGradient)"
            />

            {/* Main Line */}

            <motion.path
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
              }}
              d="
                M0 120
                C60 105 120 90 180 110
                S300 60 360 40
              "
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Glowing Line */}

            <motion.path
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
              }}
              d="
                M0 120
                C60 105 120 90 180 110
                S300 60 360 40
              "
              fill="none"
              stroke="#22d3ee"
              strokeWidth="10"
              opacity="0.12"
              strokeLinecap="round"
            />

            {/* Data Points */}

            {points.map((point, index) => (

              <motion.g
                key={index}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.15,
                }}
              >

                {/* Glow */}

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="10"
                  fill="#22d3ee33"
                />

                {/* Point */}

                <motion.circle
                  animate={{
                    scale: [1, 1.35, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.2,
                  }}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#22d3ee"
                />

              </motion.g>

            ))}
                        {/* Horizontal Grid */}

            {[20, 40, 60, 80, 100, 120].map((line) => (

              <line
                key={line}
                x1="0"
                y1={line}
                x2="360"
                y2={line}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="5 6"
              />

            ))}

          </svg>

        </div>

        {/* Bottom Stats */}

        <div
          className="
            mt-10

            grid

            gap-6

            md:grid-cols-4
          "
        >

          {[
            {
              label: "Current",
              value: "₹4,820",
            },
            {
              label: "Highest",
              value: "₹5,240",
            },
            {
              label: "Growth",
              value: "+8.7%",
            },
            {
              label: "Confidence",
              value: "94%",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="
                rounded-2xl

                border
                border-white/10

                bg-white/[0.05]

                p-5

                text-center
              "
            >

              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.22em]

                  text-white/45
                "
              >
                {item.label}
              </p>

              <h3
                className="
                  mt-3

                  text-2xl
                  font-black

                  text-green-300
                "
              >
                {item.value}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}