"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
} from "lucide-react";

export default function WeatherHeader() {
  return (
    <section className="relative px-8 pt-6 pb-10">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-20 left-0 h-[280px] w-[280px] rounded-full bg-yellow-400/10 blur-[140px]" />

        <div className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

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
        className="relative z-10 max-w-5xl"
      >

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-yellow-400/20

            bg-yellow-500/10

            px-5
            py-2

            backdrop-blur-xl
          "
        >

          <Sparkles
            size={18}
            className="text-yellow-300"
          />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.30em]
              text-yellow-200
            "
          >
            Live Weather Engine
          </span>

        </div>

        {/* Heading */}

        <h1
          className="
            mt-8

            text-7xl
            font-black

            leading-none

            text-white
          "
        >

          <span
            className="
              bg-gradient-to-r
              from-yellow-300
              via-orange-300
              to-cyan-300

              bg-clip-text
              text-transparent
            "
          >
            Weather Intelligence
          </span>

        </h1>

        {/* Subtitle */}

        <h2
          className="
            mt-7

            text-3xl
            font-semibold

            text-white
          "
        >
          Real-time Weather Monitoring &
          AI-Powered Farming Advisory
        </h2>

        {/* Description */}

        <p
          className="
            mt-6

            max-w-4xl

            text-xl

            leading-9

            text-white/90
          "
        >
          Monitor live weather conditions, receive AI-powered
          climate analysis, and get intelligent farming
          recommendations for irrigation, spraying,
          harvesting and crop protection.
        </p>

        {/* Bottom Info */}

        <div className="mt-10 flex flex-wrap gap-5">

          {/* Location */}

          <div
            className="
              flex
              items-center
              gap-3

              rounded-full

              border
              border-cyan-400/20

              bg-cyan-500/10

              px-5
              py-3

              backdrop-blur-xl
            "
          >

            <MapPin
              size={18}
              className="text-cyan-300"
            />

            <span className="text-white">
              Pune, Maharashtra
            </span>

          </div>

          {/* AI Status */}

          <div
            className="
              flex
              items-center
              gap-3

              rounded-full

              border
              border-green-400/20

              bg-green-500/10

              px-5
              py-3

              backdrop-blur-xl
            "
          >

            <div
              className="
                h-3
                w-3

                rounded-full

                bg-green-400

                animate-pulse
              "
            />

            <span
              className="
                font-semibold

                text-green-300
              "
            >
              AI Forecast Active
            </span>

          </div>

        </div>

      </motion.div>

    </section>
  );
}