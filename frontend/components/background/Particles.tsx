"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {

  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {

    const data = Array.from({ length: 45 }).map(() => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 10,
      x: Math.random() * 80 - 40,
    }));

    setParticles(data);

  }, []);

  return (
    <>
      {particles.map((p, i) => (

        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300 blur-[2px]"
          style={{
            width: p.width,
            height: p.height,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-50, -300],
            x: [0, p.x],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />

      ))}
    </>
  );
}