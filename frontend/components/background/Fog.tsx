"use client";

import { motion } from "framer-motion";

export default function Fog() {
  return (
    <>
      <motion.div
        className="absolute bottom-24 left-[-20%] h-[260px] w-[700px] rounded-full bg-white/8 blur-[120px]"
        animate={{
          x: [0, 250, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-[-20%] h-[220px] w-[650px] rounded-full bg-white/6 blur-[110px]"
        animate={{
          x: [0, -220, 0],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}