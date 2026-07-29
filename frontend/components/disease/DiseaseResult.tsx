"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Leaf,
  Activity,
  ShieldCheck,
} from "lucide-react";

interface Props {
  image: string | null;
  onBack: () => void;
}

export default function DiseaseResult({
  image,
  onBack,
}: Props) {

  // Dummy Result
  const disease = "Early Blight";

  const confidence = 98.4;

  const severity = "Moderate";

  const treatment =
    "Apply Mancozeb or Copper Fungicide. Remove infected leaves and avoid overhead irrigation.";

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

        w-[760px]

        rounded-[36px]

        border
        border-white/10

        bg-white/[0.06]

        backdrop-blur-3xl

        p-8

        shadow-[0_30px_80px_rgba(0,0,0,.35)]
      "
    >

      <div className="flex gap-8">

        {/* IMAGE */}

        <div>

          <img

            src={image ?? ""}

            alt="Crop"

            className="
              h-[260px]
              w-[260px]

              rounded-3xl

              object-cover

              border

              border-white/10
            "

          />

        </div>

        {/* RESULT */}

        <div className="flex-1">
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
                AI diagnosis completed successfully.
              </p>

            </div>

          </div>

          {/* Disease Card */}

          <div
            className="
              mt-8

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
                  text-2xl
                  font-bold
                  text-green-200
                "
              >
                {disease}
              </h3>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span className="text-white/60">
                  Confidence
                </span>

                <span className="font-bold text-green-300">
                  {confidence}%
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white/60">
                  Severity
                </span>

                <span className="font-bold text-yellow-300">
                  {severity}
                </span>

              </div>

            </div>

          </div>

          {/* Treatment */}

          <div
            className="
              mt-7

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

                leading-8

                text-white/70
              "
            >
              {treatment}
            </p>

          </div>
                    {/* Bottom Actions */}

          <div className="mt-8 flex items-center gap-4">

            <button

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

                transition-all

                hover:scale-105
              "

            >

              <RotateCcw size={18} />

              Scan Another Leaf

            </button>

            <button

              className="
                flex
                items-center
                gap-2

                rounded-full

                border

                border-yellow-400/20

                bg-yellow-500/10

                px-7
                py-3

                font-semibold

                text-yellow-300
              "

            >

              <AlertTriangle size={18} />

              Save Report

            </button>

          </div>

          {/* Footer */}

          <div
            className="
              mt-8

              flex
              items-center
              gap-2

              text-sm

              text-white/45
            "
          >

            <Activity
              size={16}
            />

            Powered by CNN + Deep Learning Disease Detection Model

          </div>

        </div>

      </div>

    </motion.div>

  );

}