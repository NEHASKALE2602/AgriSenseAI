"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  setScanning: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AIScanningOverlay({
  setScanning,
  setCompleted,
}: Props) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let value = 0;

    const interval = setInterval(() => {

      value += 2;

      setProgress(value);

      if (value >= 100) {

        clearInterval(interval);

        setTimeout(() => {

          setScanning(false);

          setCompleted(true);

        }, 400);

      }

    }, 80);

    return () => clearInterval(interval);

  }, []);

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: 0.8,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      exit={{
        opacity: 0,
        scale: 0.8,
      }}

      className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        flex
        flex-col
        items-center
        justify-center

        w-[320px]
        h-[320px]
      "
    >
            {/* OUTER SCANNING RING */}

      <motion.div

        animate={{
          rotate: 360,
        }}

        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}

        className="
          absolute

          h-[300px]
          w-[300px]

          rounded-full

          border-2

          border-dashed

          border-green-400/40
        "

      />

      {/* INNER RING */}

      <motion.div

        animate={{
          rotate: -360,
        }}

        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}

        className="
          absolute

          h-[220px]
          w-[220px]

          rounded-full

          border

          border-cyan-400/30
        "

      />

      {/* SCANNER CORE */}

      <motion.div

        animate={{
          scale: [1, 1.08, 1],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}

        className="
          relative

          flex

          h-[150px]
          w-[150px]

          items-center
          justify-center

          rounded-full

          border

          border-green-400/30

          bg-green-500/10

          backdrop-blur-xl
        "

      >

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}

          className="
            absolute

            h-[110px]
            w-[110px]

            rounded-full

            border-2

            border-dashed

            border-green-300/40
          "

        />

        <motion.div

          animate={{
            opacity: [0.4, 1, 0.4],
          }}

          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}

          className="
            text-center
          "

        >

          <p
            className="
              text-xl
              font-bold
              text-green-300
            "
          >
            AI
          </p>

          <p
            className="
              text-xs
              tracking-[0.3em]
              uppercase
              text-white/60
            "
          >
            SCANNING
          </p>

        </motion.div>

      </motion.div>

      {/* STATUS */}

      <motion.h2

        animate={{
          opacity: [0.5, 1, 0.5],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}

        className="
          mt-10

          text-2xl

          font-bold

          text-green-300
        "

      >

        AI Scanning Started...

      </motion.h2>

      <p
        className="
          mt-3

          text-center

          text-white/60
        "
      >
        Extracting Features • Running CNN • Predicting Disease
      </p>
            {/* PROGRESS BAR */}

      <div
        className="
          mt-8

          h-3
          w-[280px]

          overflow-hidden

          rounded-full

          bg-white/10
        "
      >

        <motion.div

          initial={{
            width: 0,
          }}

          animate={{
            width: `${progress}%`,
          }}

          transition={{
            duration: 0.08,
            ease: "linear",
          }}

          className="
            h-full

            rounded-full

            bg-gradient-to-r

            from-green-400

            via-emerald-400

            to-cyan-400

            shadow-[0_0_20px_rgba(34,197,94,.8)]
          "

        />

      </div>

      {/* PERCENTAGE */}

      <motion.div

        animate={{
          opacity: [0.5, 1, 0.5],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}

        className="
          mt-5

          text-4xl

          font-black

          text-white
        "

      >

        {progress}%

      </motion.div>

      {/* LOADING MESSAGE */}

      <motion.p

        animate={{
          opacity: [0.4, 1, 0.4],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}

        className="
          mt-3

          text-sm

          tracking-[0.35em]

          uppercase

          text-green-300
        "

      >

        Please Wait...

      </motion.p>

    </motion.div>

  );

}