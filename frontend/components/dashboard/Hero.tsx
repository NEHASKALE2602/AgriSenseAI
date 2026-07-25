"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Droplets,
  Leaf,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const orbitItems = [
  {
    icon: Leaf,
    color: "#4ADE80",
    angle: 0,
    label: "Crop"
  },
  {
    icon: Cloud,
    color: "#67E8F9",
    angle: 60,
    label: "Weather"
  },
  {
    icon: Droplets,
    color: "#60A5FA",
    angle: 120,
    label: "Water"
  },
  {
    icon: TrendingUp,
    color: "#FACC15",
    angle: 180,
    label: "Market"
  },
  {
    icon: ShieldCheck,
    color: "#22C55E",
    angle: 240,
    label: "Disease"
  },
  {
    icon: Bot,
    color: "#C084FC",
    angle: 300,
    label: "AI"
  },
];

export default function Hero() {
  return (
    <section
      className="
      relative
      h-[calc(100vh-120px)]
      overflow-hidden
      flex
      flex-col
      items-center
      pt-10
      "
    >

      {/* ===================================== */}
      {/* Agriculture Badge */}
      {/* ===================================== */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        className="
        absolute
        top-0
        left-8
        rounded-full
        border
        border-green-400/30
        bg-green-500/10
        backdrop-blur-2xl
        px-7
        py-3
        text-green-300
        text-sm
        font-semibold
        shadow-[0_0_40px_rgba(0,255,150,.15)]
        "
      >
        🌾 AI Powered Agriculture Platform
      </motion.div>

      {/* ===================================== */}
      {/* Heading */}
      {/* ===================================== */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-2"
      >

        <h1
          className="
          text-5xl
          lg:text-6xl
          font-black
          tracking-tight
          text-white
          "
        >
          AgriSense{" "}

          <span
            className="
            bg-gradient-to-r
            from-green-300
            via-emerald-400
            to-cyan-300
            bg-clip-text
            text-transparent
            "
          >
            AI
          </span>

        </h1>

        <h2
          className="
          mt-4
          text-2xl
          font-semibold
          text-green-300
          "
        >
          Smart Farming Decision Support System
        </h2>


      </motion.div>

      {/* ===================================== */}
      {/* Hologram Area */}
      {/* ===================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        relative
        -mt-10
        w-[500px]
        h-[500px]
        flex
        items-center
        justify-center
        "
      >

        {/* Main Glow */}

        <div
          className="
          absolute
          w-[180px]
          h-[180px]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          w-[260px]
          h-[260px]
          rounded-full
          bg-green-500/10
          blur-[160px]
          "
        />

        {/* Scanner */}

        <motion.div
          animate={{
            y: [-170, 170, -170],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          w-[260px]
          h-[2px]
          bg-cyan-300
          shadow-[0_0_25px_cyan]
          opacity-80
          "
        />

        {/* Ring 1 */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          w-[320px]
          h-[320px]
          rounded-full
          border
          border-cyan-400/40
          "
          style={{
            transform: "rotateX(70deg)",
          }}
        />

        {/* Ring 2 */}

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
          w-[250px]
          h-[250px]
          rounded-full
          border-2
          border-dashed
          border-green-400/60
          "
          style={{
            transform: "rotateY(70deg)",
          }}
        />

        {/* Ring 3 */}

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
          w-[180px]
          h-[180px]
          rounded-full
          border
          border-cyan-300/70
          "
          style={{
            transform: "rotateZ(35deg)",
          }}
        />

        {/* AI Core */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          relative
          z-30
          flex
          items-center
          justify-center
          w-24
          h-24
          rounded-full
          bg-gradient-to-br
          from-cyan-400
          via-cyan-500
          to-green-500
          shadow-[0_0_90px_rgba(0,255,255,.65)]
          "
        >

          <span
            className="
            text-4xl
            font-black
            text-white
            tracking-widest
            "
          >
            AI
          </span>

        </motion.div>
                {/* Pulse Wave */}

        <motion.div
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            w-32
            h-32
            rounded-full
            border
            border-cyan-400/60
          "
        />

        {/* Second Pulse */}

        <motion.div
          animate={{
            scale: [1, 2.3],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            w-32
            h-32
            rounded-full
            border
            border-green-400/50
          "
        />

        {/* Orbit Icons */}

        {orbitItems.map((item, index) => {

          const radius = 135;

          const x =
            Math.cos((item.angle * Math.PI) / 180) * radius;

          const y =
            Math.sin((item.angle * Math.PI) / 180) * radius;

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute"
            >

              {/* Energy Line */}

              <motion.div
                animate={{
                  opacity: [.3, 1, .3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  origin-left
                  h-[2px]
                  bg-gradient-to-r
                  from-cyan-300
                  to-transparent
                "
                style={{
                  width: radius,
                  transform: `rotate(${item.angle}deg)`,
                }}
              />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * .3,
                }}
                className="
                  absolute
                  w-16
                  h-16
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-3xl
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(0,255,255,.35)]
                "
                style={{
                  left: x - 32,
                  top: y - 32,
                }}
              >

                <Icon
                  size={28}
                  style={{
                    color: item.color,
                  }}
                />

              </motion.div>

              {/* Label */}

              <motion.div
                animate={{
                  opacity: [.6, 1, .6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  text-sm
                  font-medium
                  text-white/70
                "
                style={{
                  left: x - 25,
                  top: y + 40,
                }}
              >
                {item.label}
              </motion.div>

            </motion.div>

          );

        })}

        {/* Floating Energy Particles */}

        {Array.from({ length: 60 }).map((_, i) => (

          <motion.div
            key={i}
            className="
              absolute
              rounded-full
              bg-cyan-300
            "
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -80],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />

        ))}

        {/* Small Energy Orbs */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="
            absolute
            w-[430px]
            h-[430px]
            rounded-full
          "
        >

          {[0, 90, 180, 270].map((angle) => {

            const r = 215;

            const x =
              Math.cos((angle * Math.PI) / 180) * r;

            const y =
              Math.sin((angle * Math.PI) / 180) * r;

            return (

              <div
                key={angle}
                className="
                  absolute
                  w-3
                  h-3
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_20px_cyan]
                "
                style={{
                  left: x + 210,
                  top: y + 210,
                }}
              />

            );

          })}

        </motion.div>

      </motion.div>

    </section>

  );

}