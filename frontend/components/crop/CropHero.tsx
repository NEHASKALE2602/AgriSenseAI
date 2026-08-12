"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Leaf,
  BrainCircuit,
} from "lucide-react";

export default function CropHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative -mt-30"
    >
      {/* AI Badge */}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="flex justify-center"
      >
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-400/20

            bg-white/8

            px-5
            py-2

            backdrop-blur-xl

            shadow-[0_0_30px_rgba(34,197,94,.12)]
          "
        >
          <Sparkles
            size={16}
            className="text-emerald-300"
          />

          <span
            className="
              text-sm
              font-medium
              tracking-wide
              text-white
            "
          >
            Powered by AgriSense AI
          </span>
        </div>
      </motion.div>

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="mt-2 text-center"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <Leaf
            size={52}
            className="
              text-green-400
              drop-shadow-[0_0_30px_rgba(34,197,94,.7)]
            "
          />
        </motion.div>

        <h1
          className="
            mt-5

            text-[56px]

            font-black

            tracking-tight

            bg-gradient-to-r

            from-white

            via-green-100

            to-green-300

            bg-clip-text

            text-transparent
          "
        >
          AI Crop Recommendation
        </h1>

        <p
          className="
            mx-auto
            mt-3
            max-w-5xl

            text-xl

            leading-9

            font-medium

            text-white/90
          "
        >
          Empower your farming decisions with AI-driven crop
          recommendations based on soil health, climate
          conditions, and environmental intelligence.
        </p>
      </motion.div>

      {/* Statistics */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          mt-14

          flex
          justify-center

          gap-16
        "
      >
        {/* Accuracy */}

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.03,
          }}
          className="text-center"
        >
          <h2
            className="
              text-5xl
              font-black
              text-green-400
            "
          >
            98%
          </h2>

          <p className="mt-2 text-white/60">
            Model Accuracy
          </p>
        </motion.div>

        <div className="h-20 w-px bg-white/10" />

        {/* AI */}

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.03,
          }}
          className="text-center"
        >
          <div className="flex justify-center">
            <BrainCircuit
              size={36}
              className="text-cyan-300"
            />
          </div>

          <h3
            className="
              mt-2

              text-2xl

              font-bold

              text-white
            "
          >
            Smart AI Engine
          </h3>

          <p className="mt-2 text-white/60">
            Soil • Climate • Yield • Market
          </p>
        </motion.div>

        <div className="h-20 w-px bg-white/10" />

        {/* Crops */}

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.03,
          }}
          className="text-center"
        >
          <h2
            className="
              text-5xl
              font-black
              text-emerald-300
            "
          >
            22+
          </h2>

          <p className="mt-2 text-white/60">
            Supported Crops
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}