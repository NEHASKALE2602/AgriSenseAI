"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, BrainCircuit } from "lucide-react";

export default function DiseaseHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">

      {/* Ambient Lights */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[180px]" />

      <div className="absolute -left-32 top-32 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-emerald-500/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative text-center"
      >

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-green-400/20

            bg-white/5

            backdrop-blur-xl

            px-5
            py-2
          "
        >

          <Sparkles
            size={16}
            className="text-green-300"
          />

          <span
            className="
              text-sm
              tracking-[0.2em]
              text-white
            "
          >
            AGRISENSE VISION AI
          </span>

        </div>

        {/* Heading */}

        <h1
          className="
            mt-10

            text-[74px]

            font-black

            leading-[82px]

            tracking-tight

            bg-gradient-to-r

            from-white

            via-green-100

            to-green-300

            bg-clip-text

            text-transparent
          "
        >
          AI Disease Detection
        </h1>

        {/* Subtitle */}

        <p
          className="
            mx-auto

            mt-8

            max-w-5xl

            text-[22px]

            leading-10

            text-white/70
          "
        >
          Upload crop images and allow AgriSense Vision AI to perform
          deep-learning powered disease diagnosis with instant treatment,
          prevention strategies and intelligent crop health analysis.
        </p>

        {/* Premium Stats */}

        <div
          className="
            mt-16

            flex

            justify-center

            gap-16
          "
        >

          <div className="text-center">

            <ShieldCheck
              className="mx-auto text-green-300"
              size={34}
            />

            <h2 className="mt-4 text-4xl font-black text-white">
              99.1%
            </h2>

            <p className="mt-2 text-white/55">
              AI Accuracy
            </p>

          </div>

          <div className="h-24 w-px bg-white/10" />

          <div className="text-center">

            <BrainCircuit
              className="mx-auto text-cyan-300"
              size={34}
            />

            <h2 className="mt-4 text-4xl font-black text-white">
              150+
            </h2>

            <p className="mt-2 text-white/55">
              Diseases Supported
            </p>

          </div>

          <div className="h-24 w-px bg-white/10" />

          <div className="text-center">

            <Sparkles
              className="mx-auto text-emerald-300"
              size={34}
            />

            <h2 className="mt-4 text-4xl font-black text-white">
              &lt; 3s
            </h2>

            <p className="mt-2 text-white/55">
              AI Response
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}