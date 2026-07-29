"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import FloatingModules from "./FloatingModules";
import AIScannerCore from "./AIScannerCore";
import AIScanningOverlay from "./AIScanningOverlay";
import DiseaseResult from "./DiseaseResult";

export default function ScannerMachineV2() {

  const [image, setImage] = useState<string | null>(null);

  const [scanning, setScanning] = useState(false);

  const [completed, setCompleted] = useState(false);

  return (
    <section className="relative mt-12 flex justify-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          relative
          h-[760px]
          w-[1080px]
          overflow-hidden
          rounded-[44px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          shadow-[0_40px_100px_rgba(0,0,0,.35)]
        "
      >

        {/* Ambient Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
            [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

        {/* Green Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-green-500/10
            blur-[170px]
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-20
            top-10
            h-[220px]
            w-[220px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />
        
        {!completed && (
          <>

        {/* OUTER RING */}


        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            border-dashed
            border-green-400/20
          "
        />

        {/* SECOND RING */}

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[470px]
            w-[470px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/20
          "
        />

        {/* THIRD RING */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[370px]
            w-[370px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-emerald-400/15
          "
        />
                {/* SCANNER BEAM */}

        <motion.div
          animate={{
            y: [-180, 180, -180],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[3px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-green-300
            to-transparent
            shadow-[0_0_40px_rgba(34,197,94,.8)]
          "
        />
          </>
)}

        {/* CENTER COMPONENT */}

        <AnimatePresence mode="wait">

          {!completed && !scanning && (

            <AIScannerCore
              image={image}
              setImage={setImage}
              setScanning={setScanning}
            />

          )}

          {scanning && (

            <AIScanningOverlay
              setScanning={setScanning}
              setCompleted={setCompleted}
            />

          )}

          {completed && (

            <DiseaseResult
              image={image}
              onBack={() => {
                setCompleted(false);
                setImage(null);
              }}
            />

          )}

        </AnimatePresence>

        {/* FLOATING MODULES */}

        {!completed && <FloatingModules />}

        {/* DECORATIVE POINTS */}

        {/* DECORATIVE POINTS */}

{!completed && (
  <>
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="
        pointer-events-none
        absolute
        left-[18%]
        top-[26%]
        h-3
        w-3
        rounded-full
        bg-green-400
        shadow-[0_0_20px_rgba(34,197,94,.8)]
      "
    />

    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.4,
      }}
      className="
        pointer-events-none
        absolute
        right-[20%]
        top-[34%]
        h-3
        w-3
        rounded-full
        bg-cyan-400
        shadow-[0_0_20px_rgba(34,211,238,.8)]
      "
    />

    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="
        pointer-events-none
        absolute
        bottom-[22%]
        left-[26%]
        h-3
        w-3
        rounded-full
        bg-emerald-300
        shadow-[0_0_20px_rgba(110,231,183,.8)]
      "
    />
  </>
)}
                {/* ============================== */}
        {/* AI STATUS PANEL */}
        {/* ============================== */}

        {!completed && (
          <div
          className="
            absolute
            right-10
            top-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-xl
            px-6
            py-5
            shadow-[0_20px_40px_rgba(0,0,0,.25)]
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/40
            "
          >
            AI STATUS
          </p>

          <div className="mt-5 flex items-center gap-3">

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="
                h-3
                w-3
                rounded-full
                bg-green-400
              "
            />

            <span
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Vision Engine Ready
            </span>

          </div>

          <div className="mt-6 space-y-3">

            <div className="flex justify-between">
              <span className="text-white/55">
                CNN Model
              </span>
              <span className="text-green-300">
                Loaded
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/55">
                GPU
              </span>
              <span className="text-cyan-300">
                Active
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/55">
                Detection Speed
              </span>
              <span className="text-emerald-300">
                &lt; 2 sec
              </span>
            </div>

          </div>

        </div>

)}

        {/* ============================== */}
        {/* BOTTOM PANEL */}
        {/* ============================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            border-t
            border-white/10
            bg-black/20
            backdrop-blur-2xl
            px-10
            py-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Intelligent Crop Vision
              </h3>

              <p
                className="
                  mt-2
                  text-white/55
                "
              >
                Deep Learning • Computer Vision • CNN • AI Diagnosis
              </p>

            </div>

          </div>

        </div>

        {/* ============================== */}
        {/* CORNER GLOWS */}
        {/* ============================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            -bottom-24
            h-[240px]
            w-[240px]
            rounded-full
            bg-green-500/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-[240px]
            w-[240px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

      </motion.div>

    </section>

  );

}