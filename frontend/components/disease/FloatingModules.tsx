"use client";

import { motion } from "framer-motion";
import {
  Camera,
  ImagePlus,
  Cpu,
} from "lucide-react";

export default function FloatingModules() {
  return (
    <>

      {/* ========================= */}
      {/* LIVE CAMERA */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          pointer-events-none

          absolute
          z-10

          left-10
          top-16

          rounded-3xl

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-xl

          px-6
          py-5

          shadow-[0_15px_40px_rgba(0,0,0,.25)]
        "
      >
        <Camera
          size={28}
          className="text-cyan-300"
        />

        <h3 className="mt-3 text-lg font-bold text-white">
          Live Camera
        </h3>

        <p className="mt-2 text-sm text-white/60">
          Capture leaf instantly
        </p>
      </motion.div>

      {/* ========================= */}
      {/* GALLERY */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          pointer-events-none

          absolute
          z-10

          left-14
          bottom-20

          rounded-3xl

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-xl

          px-6
          py-5

          shadow-[0_15px_40px_rgba(0,0,0,.25)]
        "
      >
        <ImagePlus
          size={28}
          className="text-green-300"
        />

        <h3 className="mt-3 text-lg font-bold text-white">
          Gallery
        </h3>

        <p className="mt-2 text-sm text-white/60">
          Browse crop images
        </p>
      </motion.div>

      {/* ========================= */}
      {/* NEURAL ENGINE */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          pointer-events-none

          absolute
          z-10

          right-10
          top-1/2

          -translate-y-1/2

          rounded-3xl

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-xl

          px-7
          py-6

          shadow-[0_15px_40px_rgba(0,0,0,.25)]
        "
      >
        <Cpu
          size={30}
          className="text-emerald-300"
        />

        <h3 className="mt-3 text-lg font-bold text-white">
          Neural Engine
        </h3>

        <p className="mt-2 text-sm text-white/60">
          Deep Learning Active
        </p>
      </motion.div>

    </>
  );
}