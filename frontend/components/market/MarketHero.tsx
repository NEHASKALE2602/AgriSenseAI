"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Activity,
  BrainCircuit,
} from "lucide-react";

export default function MarketHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        pt-6
        pb-12
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-20
          left-40

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-500/10

          blur-[170px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-32

          h-[340px]
          w-[340px]

          rounded-full

          bg-green-500/10

          blur-[170px]
        "
      />

      <div
  className="
    relative
    z-10

    max-w-6xl

    mx-auto

    px-10
  "
>
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* AI Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-cyan-400/20

              bg-white/5

              px-6
              py-3

              backdrop-blur-xl
            "
          >
            <Sparkles
              size={18}
              className="text-cyan-300"
            />

            <span
              className="
                text-sm

                font-semibold

                uppercase

                tracking-[0.35em]

                text-cyan-300
              "
            >
              AI Market Engine
            </span>
          </div>

          {/* Main Heading */}

          <h1
            className="
              mt-10

              text-[72px]

              leading-none

              font-black

              tracking-[-0.05em]

              text-white
            "
          >
            Market Intelligence
          </h1>

          
          {/* Subtitle */}

          <h2
            className="
              mt-10

              text-[34px]

              font-bold

              leading-snug

              text-white
            "
          >
            AI-Powered Agricultural
            <br />
            Market Analytics
          </h2>

          {/* Description */}

          <p
            className="
              mt-8

              max-w-[760px]

              text-[20px]

              leading-10

              text-white/75
            "
          >
            Monitor real-time mandi prices, discover regional
            demand, predict future crop prices using AI and
            identify the best selling opportunities before the
            market changes.
          </p>
                    {/* Premium AI Chips */}

          <div
            className="
              mt-12

              flex
              flex-wrap
              gap-5
            "
          >

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
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

              <Activity
                size={20}
                className="text-green-300"
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
                  Live Status
                </p>

                <h4
                  className="
                    mt-1

                    text-lg
                    font-bold

                    text-green-300
                  "
                >
                  AI Online
                </h4>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                rounded-2xl

                border
                border-cyan-400/20

                bg-cyan-500/10

                px-6
                py-4

                backdrop-blur-xl
              "
            >

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                Markets Covered
              </p>

              <h4
                className="
                  mt-2

                  text-2xl
                  font-black

                  text-cyan-300
                "
              >
                1,200+
              </h4>

            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                rounded-2xl

                border
                border-blue-400/20

                bg-blue-500/10

                px-6
                py-4

                backdrop-blur-xl
              "
            >

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.25em]

                  text-white/45
                "
              >
                Prediction Accuracy
              </p>

              <h4
                className="
                  mt-2

                  text-2xl
                  font-black

                  text-blue-300
                "
              >
                98.6%
              </h4>

            </motion.div>

          </div>

          {/* CTA Buttons */}

          <div
            className="
              mt-12

              flex
              flex-wrap
              gap-5
            "
          >

            <button
              className="
                rounded-2xl

                bg-gradient-to-r
                from-green-500
                via-emerald-500
                to-cyan-500

                px-8
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,197,94,.45)]
              "
            >
              Explore Live Markets
            </button>

            <button
              className="
                rounded-2xl

                border
                border-white/10

                bg-white/[0.05]

                px-8
                py-4

                font-semibold

                text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white/[0.08]
              "
            >
              AI Forecast Report
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}