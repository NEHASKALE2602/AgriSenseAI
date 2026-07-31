"use client";

import { motion } from "framer-motion";

import {
  Activity,
  TrendingUp,
  Database,
  BrainCircuit,
} from "lucide-react";

const pulseData = [
  {
    icon: Activity,
    title: "Live Markets",
    value: "1,248",
    color: "text-green-300",
    glow: "bg-green-500/10",
    border: "border-green-400/10",
  },
  {
    icon: TrendingUp,
    title: "Bullish Signals",
    value: "482",
    color: "text-cyan-300",
    glow: "bg-cyan-500/10",
    border: "border-cyan-400/10",
  },
  {
    icon: Database,
    title: "Price Records",
    value: "4.2M",
    color: "text-purple-300",
    glow: "bg-purple-500/10",
    border: "border-purple-400/10",
  },
  {
    icon: BrainCircuit,
    title: "AI Accuracy",
    value: "98.8%",
    color: "text-yellow-300",
    glow: "bg-yellow-500/10",
    border: "border-yellow-400/10",
  },
];

export default function MarketPulse() {
  return (
    <div
      className="
        grid
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
              {pulseData.map((item, index) => {

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

            transition={{
              delay: index * 0.12,
              duration: 0.7,
            }}

            viewport={{
              once: true,
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

              ${item.glow}

              backdrop-blur-2xl

              p-6
            `}
          >

            {/* Background Glow */}

            <div
              className="
                absolute

                -right-10
                -top-10

                h-28
                w-28

                rounded-full

                bg-white/5

                blur-3xl
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-white/5
                "
              >

                <Icon
                  size={28}
                  className={item.color}
                />

              </div>

              <p
                className="
                  mt-6

                  text-xs

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                {item.title}
              </p>

              <h2
                className={`
                  mt-3

                  text-[42px]

                  font-black

                  ${item.color}
                `}
              >
                {item.value}
              </h2>
                            <div
                className="
                  mt-5

                  h-1.5
                  w-full

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
                    width: "100%",
                  }}

                  transition={{
                    delay: index * 0.2,
                    duration: 1.4,
                  }}

                  viewport={{
                    once: true,
                  }}

                  className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    via-green-400
                    to-emerald-300
                  "
                />

              </div>

              <p
                className="
                  mt-5

                  text-sm

                  leading-7

                  text-white/55
                "
              >
                Live data continuously processed by
                the AI market engine.
              </p>

            </div>

          </motion.div>

        );

      })}

    </div>
  );
}