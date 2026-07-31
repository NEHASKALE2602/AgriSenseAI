"use client";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", price: 5480 },
  { day: "Tue", price: 5550 },
  { day: "Wed", price: 5610 },
  { day: "Thu", price: 5690 },
  { day: "Fri", price: 5820 },
  { day: "Sat", price: 5960 },
  { day: "Sun", price: 6050 },
];

export default function LivePriceGraph() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-cyan-400/10

        bg-white/[0.04]

        backdrop-blur-3xl

        p-8
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute

          -right-20
          top-0

          h-[320px]
          w-[320px]

          rounded-full

          bg-cyan-500/10

          blur-[150px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
                text-xs

                uppercase

                tracking-[0.35em]

                text-cyan-300
              "
            >
              Live Price Forecast
            </p>

            <h3
              className="
                mt-3

                text-4xl

                font-black

                text-white
              "
            >
              Soybean Market Trend
            </h3>

            <p
              className="
                mt-3

                text-white/60

                leading-8
              "
            >
              AI prediction based on
              historical pricing,
              arrivals and regional demand.
            </p>

          </div>

          <div className="text-right">

            <p className="text-white/45">
              Current
            </p>

            <h2
              className="
                mt-2

                text-[52px]

                font-black

                text-green-300
              "
            >
              ₹6,050
            </h2>

            <p className="text-green-400">
              ▲ +4.8%
            </p>

          </div>

        </div>
                {/* Chart */}

        <div className="mt-10 h-[420px] w-full">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: -20,
                bottom: 0,
              }}
            >

              <defs>

                <linearGradient
                  id="priceGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                stroke="rgba(255,255,255,.05)"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#94a3b8",
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
                domain={["dataMin-100","dataMax+100"]}
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "18px",
                  color: "#fff",
                }}

                formatter={(value:any)=>[
                  `₹${value}`,
                  "Price"
                ]}
              />

              <Area
                type="monotone"

                dataKey="price"

                stroke="#22d3ee"

                strokeWidth={4}

                fill="url(#priceGradient)"

                animationDuration={2500}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>
                {/* Bottom Statistics */}

        <div
          className="
            mt-10

            grid

            gap-5

            md:grid-cols-4
          "
        >

          <div
            className="
              rounded-2xl

              border
              border-green-400/10

              bg-green-500/5

              p-5
            "
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              Tomorrow
            </p>

            <h3 className="mt-3 text-3xl font-black text-green-300">
              ₹6,120
            </h3>

          </div>

          <div
            className="
              rounded-2xl

              border
              border-cyan-400/10

              bg-cyan-500/5

              p-5
            "
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              AI Confidence
            </p>

            <h3 className="mt-3 text-3xl font-black text-cyan-300">
              98.6%
            </h3>

          </div>

          <div
            className="
              rounded-2xl

              border
              border-yellow-400/10

              bg-yellow-500/5

              p-5
            "
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              Trend
            </p>

            <h3 className="mt-3 text-3xl font-black text-yellow-300">
              Bullish
            </h3>

          </div>

          <div
            className="
              rounded-2xl

              border
              border-purple-400/10

              bg-purple-500/5

              p-5
            "
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              7 Day Growth
            </p>

            <h3 className="mt-3 text-3xl font-black text-purple-300">
              +5.4%
            </h3>

          </div>

        </div>

      </div>

    </motion.div>
  );
}