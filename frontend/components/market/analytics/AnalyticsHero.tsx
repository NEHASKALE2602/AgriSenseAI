"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Sparkles,
  Activity,
} from "lucide-react";

export default function AnalyticsHero() {
  return (
    <div className="flex items-start justify-between gap-10">

      {/* Left */}

      <div className="max-w-4xl">

        {/* AI Badge */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-cyan-400/20

            bg-cyan-500/10

            px-6
            py-3

            backdrop-blur-xl
          "
        >

          <BrainCircuit
            size={18}
            className="text-cyan-300"
          />

          <span
            className="
              text-xs

              font-semibold

              uppercase

              tracking-[0.35em]

              text-cyan-300
            "
          >
            AI Market Analytics Engine
          </span>

        </motion.div>

        {/* Main Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            mt-8

            text-[64px]

            font-black

            leading-none

            tracking-[-0.05em]

            text-white
          "
        >
          Live Market Analytics
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mt-6

            max-w-3xl

            text-[20px]

            leading-10

            text-white/70
          "
        >
          Our AI continuously analyzes market prices,
          arrivals, regional demand, seasonal patterns,
          weather impact and historical trends to generate
          intelligent market insights in real time.
        </motion.p>
                {/* Live Status Row */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="
            mt-12

            flex
            flex-wrap

            items-center

            gap-6
          "
        >

          {/* Live Indicator */}

          <div
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-green-400/20

              bg-green-500/10

              px-6
              py-4

              backdrop-blur-xl
            "
          >

            <div className="relative">

              <span
                className="
                  absolute

                  h-3
                  w-3

                  animate-ping

                  rounded-full

                  bg-green-400
                "
              />

              <span
                className="
                  relative

                  block

                  h-3
                  w-3

                  rounded-full

                  bg-green-400
                "
              />

            </div>

            <div>

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                AI STATUS
              </p>

              <h4
                className="
                  mt-1

                  text-lg

                  font-bold

                  text-green-300
                "
              >
                Monitoring Live Markets
              </h4>

            </div>

          </div>

          {/* Live Update */}

          <div
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-cyan-400/20

              bg-cyan-500/10

              px-6
              py-4

              backdrop-blur-xl
            "
          >

            <Activity
              size={20}
              className="text-cyan-300"
            />

            <div>

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                LAST UPDATE
              </p>

              <h4
                className="
                  mt-1

                  text-lg

                  font-bold

                  text-cyan-300
                "
              >
                Every 3 Seconds
              </h4>

            </div>

          </div>

          {/* Neural Engine */}

          <div
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-purple-400/20

              bg-purple-500/10

              px-6
              py-4

              backdrop-blur-xl
            "
          >

            <Sparkles
              size={20}
              className="text-purple-300"
            />

            <div>

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                ENGINE
              </p>

              <h4
                className="
                  mt-1

                  text-lg

                  font-bold

                  text-purple-300
                "
              >
                Neural Forecast AI
              </h4>

            </div>

          </div>

        </motion.div>
              </div>

      {/* Right Side */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="
          hidden

          xl:flex

          items-center
          justify-center
        "
      >

        <div
          className="
            relative

            flex
            h-[180px]
            w-[180px]

            items-center
            justify-center
          "
        >

          {/* Outer Glow */}

          <div
            className="
              absolute

              h-full
              w-full

              rounded-full

              bg-cyan-500/10

              blur-3xl
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              h-[170px]
              w-[170px]

              rounded-full

              border
              border-dashed
              border-cyan-400/40
            "
          />

          {/* Second Ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              h-[135px]
              w-[135px]

              rounded-full

              border
              border-green-400/20
            "
          />

          {/* Center */}

          <div
            className="
              relative

              flex
              h-24
              w-24

              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-cyan-500
              via-blue-500
              to-green-500

              shadow-[0_0_45px_rgba(6,182,212,.45)]
            "
          >
            <BrainCircuit
              size={42}
              className="text-white"
            />
          </div>

        </div>

      </motion.div>

    </div>
  );
}