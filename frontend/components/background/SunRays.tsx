"use client";

import { motion } from "framer-motion";

export default function SunRays() {
  return (
    <motion.div
      className="absolute left-1/2 top-8 -translate-x-1/2"
      animate={{
        rotate: [-2, 2, -2],
        opacity: [0.25, 0.4, 0.25],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="
          h-[900px]
          w-[900px]
          rounded-full
          blur-[2px]
          opacity-70
        "
        style={{
          background: `
            conic-gradient(
              from 180deg,
              transparent 0deg,
              rgba(255,180,60,0.15) 12deg,
              transparent 24deg,
              rgba(255,210,120,0.12) 36deg,
              transparent 48deg,
              rgba(255,180,60,0.18) 60deg,
              transparent 72deg,
              rgba(255,210,120,0.12) 84deg,
              transparent 360deg
            )
          `,
        }}
      />
    </motion.div>
  );
}