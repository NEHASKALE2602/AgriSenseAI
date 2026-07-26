"use client";

import { useState, useEffect } from "react";
import { BrainCircuit } from "lucide-react";

type FarmInputPanelProps = {
  onComplete: () => void;
};

export default function FarmInputPanel({
  onComplete,
}: FarmInputPanelProps) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const loadingText = [
    "Analyzing Soil...",
    "Checking Weather...",
    "Finding Best Crop...",
    "Predicting Yield...",
  ];

  useEffect(() => {
    if (!loading) return;

    if (step < loadingText.length - 1) {
      const timer = setTimeout(() => {
        setStep((s) => s + 1);
      }, 900);

      return () => clearTimeout(timer);
    }

    const finishTimer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1200);

    return () => clearTimeout(finishTimer);
  }, [loading, step, onComplete]);

  return (
    <section className="w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/15
          bg-white/[0.01]
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,.18)]
          px-12
          py-12
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-green-400/10
            blur-[120px]
          "
        />

        {/* Header */}

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-green-500
                to-emerald-700
                shadow-[0_0_35px_rgba(34,197,94,.45)]
              "
            >
              <BrainCircuit
                size={28}
                className="text-white"
              />
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                AI Farm Analysis Engine
              </h2>

              <p
                className="
                  mt-2
                  text-white/75
                  text-lg
                "
              >
                Enter your farm conditions and let AgriSense AI
                identify the most suitable crop.
              </p>
            </div>
          </div>

          {/* Input Grid */}

          <div
            className="
              mt-14
              grid
              grid-cols-2
              xl:grid-cols-4
              gap-7
            "
          >
            {[
              "Nitrogen (N)",
              "Phosphorus (P)",
              "Potassium (K)",
              "Temperature",
              "Humidity",
              "Soil pH",
              "Rainfall",
            ].map((label) => (
              <div
                key={label}
                className="group relative"
              >
                <label
                  className="
                    absolute
                    left-5
                    top-3
                    text-xs
                    tracking-wider
                    uppercase
                    text-white/55
                    transition-all
                    duration-300
                    group-focus-within:text-green-300
                  "
                >
                  {label}
                </label>

                <input
                  type="number"
                  placeholder="Enter"
                  className="
                    h-[78px]
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    pt-7
                    text-lg
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    hover:bg-white/[0.06]
                    focus:border-green-400/40
                    focus:bg-white/[0.08]
                    focus:shadow-[0_0_30px_rgba(34,197,94,.25)]
                  "
                />
              </div>
            ))}
          </div>

          {/* Button */}

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                if (loading) return;

                setLoading(true);
                setStep(0);
              }}
              className="
                rounded-3xl
                bg-gradient-to-r
                from-green-500
                to-emerald-700
                px-12
                py-5
                text-lg
                font-bold
                text-white
                shadow-[0_20px_40px_rgba(34,197,94,.35)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_25px_50px_rgba(34,197,94,.5)]
                disabled:opacity-70
              "
              disabled={loading}
            >
              {loading
                ? loadingText[
                    Math.min(step, loadingText.length - 1)
                  ]
                : "Generate AI Recommendation"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}