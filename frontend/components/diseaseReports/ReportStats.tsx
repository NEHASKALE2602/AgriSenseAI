"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FileText,
  ShieldCheck,
  TriangleAlert,
  BrainCircuit,
} from "lucide-react";

export default function ReportStats() {

  const stats = [

    {
      title: "Reports",
      value: "248",
      icon: FileText,
      glow: "from-cyan-400 to-blue-500",
      color: "text-cyan-300",
    },

    {
      title: "Healthy",
      value: "142",
      icon: ShieldCheck,
      glow: "from-green-400 to-emerald-500",
      color: "text-green-300",
    },

    {
      title: "Diseased",
      value: "106",
      icon: TriangleAlert,
      glow: "from-red-400 to-orange-500",
      color: "text-red-300",
    },

    {
      title: "Accuracy",
      value: "98.6%",
      icon: BrainCircuit,
      glow: "from-purple-400 to-cyan-400",
      color: "text-cyan-300",
    },

  ];

  return (

    <section className="relative -mt-10">

      <div className="flex flex-wrap items-center justify-center gap-8">
                {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (

            <motion.div

  key={stat.title}

  initial={{
    opacity: 0,
    y: 60,
    scale: 0.8,
  }}

  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}

  animate={{
    y: [0, -10, 0],
  }}

  transition={{
    duration: 4 + index,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  whileHover={{
    scale: 1.08,
    y: -18,
  }}
              className="relative group"

            >

              {/* Glow */}

              <div
                className={`
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  ${stat.glow}
                  opacity-50
                  blur-[45px]
                  scale-110
                  group-hover:opacity-100
                  transition-all
                  duration-500
                `}
              />

              {/* Outer Ring */}

              <motion.div

  animate={{
  rotate: 360,
}}

  transition={{
  repeat: Infinity,
  duration: 18,
  ease: "linear",
}}


                className={`
                  absolute
                  inset-0

                  h-[160px]
                  w-[160px]

                  rounded-full

                  border

                  border-white/10
                `}

              />

              {/* Glass Circle */}

              <div
                className="
                  relative

                  flex
                 h-[160px]
                 w-[160px]
                  flex-col
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.025]

                  backdrop-blur-3xl

                  shadow-[0_20px_50px_rgba(0,0,0,.35)]
                "
              >

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-r
                    ${stat.glow}
                  `}
                >

                  <Icon
                    size={24}
                    className="text-white"
                  />


                </div>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  {stat.value.includes("%") ? (

  <CountUp

    end={98.6}

    decimals={1}

    suffix="%"

    duration={2.5}

  />

) : (

  <CountUp

    end={Number(stat.value)}

    duration={2.5}

  />

)}
                </h2>

                <p
                  className={`
                    mt-3

                    text-sm
                    uppercase

                    tracking-[0.35em]

                    ${stat.color}
                  `}
                >
                  {stat.title}
                </p>
                {/* Orbiting Particle */}

<motion.div

  animate={{
    rotate: 360,
  }}

  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "linear",
  }}

  className="absolute inset-0"

>

  <div

    className="
      absolute
      left-1/2
      top-0

      h-3
      w-3

      -translate-x-1/2

      rounded-full

      bg-cyan-300

      shadow-[0_0_18px_rgba(34,211,238,.9)]
    "

  />

</motion.div>
              </div>
                          </motion.div>

          );

        })}

      </div>

    </section>

  );

}