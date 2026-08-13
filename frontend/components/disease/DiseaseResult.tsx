"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Leaf,
  Activity,
  ShieldCheck,
  Bug,
} from "lucide-react";

import type { DiseaseResult as DiseaseResultType } from "@/services/disease";

interface Props {
  image: string | null;
  result: DiseaseResultType;
  onBack: () => void;
}

export default function DiseaseResult({
  image,
  result,
  onBack,
}: Props) {

  const severityClass =
    result.severity.toLowerCase() === "high"
      ? "text-red-300"
      : result.severity.toLowerCase() === "medium"
      ? "text-yellow-300"
      : "text-green-300";


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

      className="
        absolute
        left-1/2
        top-1/2
        z-[500]
        max-h-[680px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-y-auto
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.06]
        p-8
        backdrop-blur-3xl
        shadow-[0_30px_80px_rgba(0,0,0,.35)]
      "
    >

      <div className="flex gap-8">

        {/* IMAGE */}

        <div className="shrink-0">

          <img
            src={image ?? ""}
            alt="Analyzed crop"
            className="
              h-[260px]
              w-[260px]
              rounded-3xl
              border
              border-white/10
              object-cover
            "
          />

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-green-400/20
              bg-green-500/10
              px-4
              py-3
              text-sm
              text-green-300
            "
          >

            <CheckCircle2 size={16} />

            AI Analysis Complete

          </div>

        </div>


        {/* RESULT */}

        <div className="min-w-0 flex-1">

          {/* HEADER */}

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={34}
              className="text-green-400"
            />

            <div>

              <h2
                className="
                  text-3xl
                  font-black
                  text-white
                "
              >
                Disease Detected
              </h2>

              <p
                className="
                  mt-1
                  text-white/60
                "
              >
                AgriSense Vision AI completed the diagnosis.
              </p>

            </div>

          </div>


          {/* DISEASE */}

          <div
            className="
              mt-7
              rounded-3xl
              border
              border-green-400/20
              bg-green-500/10
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <Leaf
                size={26}
                className="text-green-300"
              />

              <h3
                className="
                  break-words
                  text-2xl
                  font-bold
                  text-green-200
                "
              >
                {result.disease}
              </h3>

            </div>


            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span className="text-white/60">
                  Confidence
                </span>

                <span className="font-bold text-green-300">
                  {result.confidence}%
                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-white/60">
                  Severity
                </span>

                <span className={`font-bold ${severityClass}`}>
                  {result.severity}
                </span>

              </div>

            </div>

          </div>


          {/* DESCRIPTION */}

          <div
            className="
              mt-5
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <Bug
                size={23}
                className="text-yellow-300"
              />

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Diagnosis
              </h3>

            </div>

            <p
              className="
                mt-4
                leading-7
                text-white/70
              "
            >
              {result.description}
            </p>

          </div>


          {/* TREATMENT */}

          <div
            className="
              mt-5
              rounded-3xl
              border
              border-cyan-400/20
              bg-cyan-500/10
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <ShieldCheck
                size={24}
                className="text-cyan-300"
              />

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Recommended Treatment
              </h3>

            </div>

            <p
              className="
                mt-4
                leading-7
                text-white/70
              "
            >
              {result.treatment}
            </p>

          </div>


          {/* PREVENTION */}

          <div
            className="
              mt-5
              rounded-3xl
              border
              border-emerald-400/20
              bg-emerald-500/10
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <Activity
                size={24}
                className="text-emerald-300"
              />

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Prevention
              </h3>

            </div>

            <p
              className="
                mt-4
                leading-7
                text-white/70
              "
            >
              {result.prevention}
            </p>

          </div>


          {/* ACTIONS */}

          <div className="mt-7 flex gap-4">

            <button

              type="button"

              onClick={onBack}

              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                px-7
                py-3
                font-semibold
                text-white
                shadow-[0_15px_35px_rgba(34,197,94,.35)]
                transition
                hover:scale-105
              "
            >

              <RotateCcw size={18} />

              Scan Another Leaf

            </button>


            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-400/20
                bg-yellow-500/10
                px-5
                py-3
                text-sm
                text-yellow-300
              "
            >

              <AlertTriangle size={16} />

              AI-assisted diagnosis

            </div>

          </div>


          {/* FOOTER */}

          <div
            className="
              mt-7
              flex
              items-center
              gap-2
              text-sm
              text-white/40
            "
          >

            <Activity size={16} />

            Powered by YOLO classification + Deep Learning

          </div>

        </div>

      </div>

    </motion.div>
  );
}