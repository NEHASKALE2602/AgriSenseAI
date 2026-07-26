"use client";

import { Sprout, BrainCircuit, Sparkles } from "lucide-react";

export default function CropHeader() {
  return (
    <section className="flex items-center justify-between">

      {/* Left */}

      <div>

        <div className="flex items-center gap-3">

          <div
            className="
              h-12
              w-12
              rounded-2xl

              bg-emerald-500/15

              border
              border-emerald-400/20

              flex
              items-center
              justify-center
            "
          >
            <Sprout
              size={24}
              className="text-emerald-300"
            />
          </div>

          <div>

            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Crop Recommendation
            </h1>

            <p
              className="
                mt-1
                text-white/65
              "
            >
              AI-powered intelligent crop recommendation system
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-400/20

            bg-emerald-400/10

            px-4
            py-2
          "
        >

          <div
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-green-400

              animate-pulse
            "
          />

          <span
            className="
              text-sm
              font-medium
              text-green-300
            "
          >
            AI Online
          </span>

        </div>

        <div
          className="
            h-11
            w-11

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            flex
            items-center
            justify-center

            transition-all
            duration-300

            hover:bg-white/[0.08]
          "
        >
          <BrainCircuit
            size={22}
            className="text-cyan-300"
          />
        </div>

        <div
          className="
            h-11
            w-11

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            flex
            items-center
            justify-center

            transition-all
            duration-300

            hover:bg-white/[0.08]
          "
        >
          <Sparkles
            size={20}
            className="text-yellow-300"
          />
        </div>

      </div>

    </section>
  );
}