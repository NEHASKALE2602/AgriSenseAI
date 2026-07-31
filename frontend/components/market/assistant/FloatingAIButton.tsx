"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

interface FloatingAIButtonProps {
  onClick: () => void;
}

export default function FloatingAIButton({
  onClick,
}: FloatingAIButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed

        bottom-8
        right-8

        z-[999]

        flex
        items-center
        justify-center

        h-20
        w-20

        rounded-full

        bg-gradient-to-br
        from-cyan-500
        via-blue-500
        to-green-500

        shadow-[0_0_60px_rgba(6,182,212,.45)]

        transition-all
      "
    >
      <BrainCircuit
        size={34}
        className="text-white"
      />
            {/* Animated Pulse */}

      <motion.span
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.45, 0, 0.45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute

          h-full
          w-full

          rounded-full

          bg-cyan-400/20
        "
      />

      {/* Rotating Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[92px]
          w-[92px]

          rounded-full

          border
          border-dashed
          border-cyan-300/40
        "
      />

      {/* Second Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[108px]
          w-[108px]

          rounded-full

          border
          border-green-400/20
        "
      />

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute

          -top-2
          -right-2

          rounded-full

          bg-green-500

          px-3
          py-1

          text-[10px]

          font-bold

          uppercase

          tracking-[0.2em]

          text-white

          shadow-lg
        "
      >
        AI
      </motion.div>
    </motion.button>
  );
}