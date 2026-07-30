"use client";

import { motion } from "framer-motion";
import { FileSearch, ShieldCheck } from "lucide-react";

export default function DiseaseReportsHero() {
  return (
<section className="relative overflow-hidden rounded-[40px]">
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-green-500/10 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

      </div>

      {/* Hero Content */}

      <div className="relative px-14 pt-0 pb-14">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-500/10 px-5 py-2">

            <ShieldCheck
              size={18}
              className="text-green-300"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-200">
              AI Disease History
            </span>

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            Disease{" "}

            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Reports
            </span>

          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/60">
            View every crop disease detected by AgriSense AI.
            Track previous scans, confidence scores,
            treatment recommendations and download reports
            for future reference.
          </p>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="hidden xl:flex flex-col items-center"
        >

          <div
            className="
              flex
              h-[220px]
              w-[220px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-3xl
              shadow-[0_30px_60px_rgba(0,0,0,.30)]
            "
          >

            <FileSearch
              size={90}
              className="text-green-300"
            />

          </div>

          <p className="mt-8 max-w-[260px] text-center text-lg leading-8 text-white/60">
            Every AI scan is stored securely and can be reviewed anytime.
          </p>

        </motion.div>

      </div>

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
  absolute

  left-160
  bottom-50

  flex
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

        <div
          className="
            h-3
            w-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_18px_rgba(34,211,238,.9)]
          "
        />

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          Reports Archive
        </span>

      </motion.div>

    </section>
  );
}