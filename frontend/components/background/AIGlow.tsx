"use client";

import { motion } from "framer-motion";

export default function AIGlow() {
  return (
    <motion.div
      className="absolute right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[180px]"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}