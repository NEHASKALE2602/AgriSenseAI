"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function AIConfidenceRing() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        flex
        items-center
        justify-center

        w-full
        h-[420px]

        overflow-hidden
      "
    >

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute

          h-[340px]
          w-[340px]

          rounded-full

          bg-cyan-500/20

          blur-[120px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="
          absolute

          h-[290px]
          w-[290px]

          rounded-full

          border

          border-cyan-400/25
        "
      />

      {/* Inner Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear",
        }}
        className="
          absolute

          h-[245px]
          w-[245px]

          rounded-full

          border

          border-green-400/20
        "
      />
            {/* Orbiting Particles */}

      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + index,
            ease: "linear",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            style={{
              transform: `rotate(${index * 45}deg) translateY(-145px)`,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: index * 0.2,
              }}
              className="
                h-3
                w-3

                rounded-full

                bg-cyan-300

                shadow-[0_0_18px_rgba(34,211,238,.9)]
              "
            />
          </div>
        </motion.div>
      ))}

      {/* Glass Core */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          relative

          flex
          h-[190px]
          w-[190px]

          flex-col
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-white/[0.06]

          backdrop-blur-3xl

          shadow-[0_0_45px_rgba(34,211,238,.18)]
        "
      >

        <BrainCircuit
          size={52}
          className="text-cyan-300"
        />

        <h2
          className="
            mt-5

            text-5xl
            font-black

            text-white
          "
        >
          94.8%
        </h2>

        <p
          className="
            mt-2

            text-xs

            uppercase

            tracking-[0.30em]

            text-cyan-200
          "
        >
          AI CONFIDENCE
        </p>
                {/* SVG Progress Ring */}

        <svg
          className="
            absolute

            h-[235px]
            w-[235px]

            -rotate-90
          "
          viewBox="0 0 240 240"
        >

          {/* Background Track */}

          <circle
            cx="120"
            cy="120"
            r="102"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />

          {/* Animated Progress */}

          <motion.circle
            cx="120"
            cy="120"
            r="102"
            fill="none"
            stroke="url(#confidenceGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={641}
            initial={{
              strokeDashoffset: 641,
            }}
            whileInView={{
              strokeDashoffset: 33,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
            }}
          />

          <defs>

            <linearGradient
              id="confidenceGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
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

          </defs>

        </svg>

      </motion.div>
            {/* Live Status Badge */}

      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          top-8
          right-8

          flex
          items-center
          gap-3

          rounded-full

          border
          border-green-400/20

          bg-green-500/10

          px-5
          py-2

          backdrop-blur-xl
        "
      >

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            h-3
            w-3

            rounded-full

            bg-green-400

            shadow-[0_0_18px_rgba(34,197,94,.9)]
          "
        />

        <span
          className="
            text-xs
            font-semibold

            uppercase

            tracking-[0.22em]

            text-green-300
          "
        >
          Live AI
        </span>

      </motion.div>

    </motion.div>

  );
}