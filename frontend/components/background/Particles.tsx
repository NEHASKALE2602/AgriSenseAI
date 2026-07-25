"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {Array.from({ length: 45 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300 blur-[2px]"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            y: [-50, -300],
            x: [0, Math.random() * 80 - 40],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </>
  );
}