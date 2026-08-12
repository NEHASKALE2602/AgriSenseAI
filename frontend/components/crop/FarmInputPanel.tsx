"use client";

import { useState, useEffect } from "react";

import {
  BrainCircuit,
  FlaskConical,
  Thermometer,
  Droplets,
  TestTube2,
  CloudRain,
} from "lucide-react";

import { predictCrop } from "@/services/crop";
import useWeather from "@/hooks/useWeather";

type FarmInputPanelProps = {
  state: string;
  district: string;
  onComplete: (result: any) => void;
};

export default function FarmInputPanel({
  state,
  district,
  onComplete,
}: FarmInputPanelProps) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const {
    weather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather();

  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  // ============================================================
  // AUTOMATIC WEATHER VALUES
  // ============================================================

  useEffect(() => {
    if (!weather) return;

    setFormData((prev) => ({
      ...prev,
      temperature: String(weather.temperature),
      humidity: String(weather.humidity),
      rainfall: String(weather.rainfall),
    }));
  }, [weather]);

  // ============================================================
  // LOADING TEXT
  // ============================================================

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
  }, [loading, step]);

  // ============================================================
  // SUBMIT
  // ============================================================

  const handleSubmit = async () => {
    if (loading) return;

    if (!state || !district) {
      alert("Please select your state and district first.");
      return;
    }

    if (
      !formData.nitrogen ||
      !formData.phosphorus ||
      !formData.potassium ||
      !formData.ph
    ) {
      alert("Please enter all NPK and soil pH values.");
      return;
    }

    if (!weather) {
      alert("Weather data is not available yet. Please wait.");
      return;
    }

    setLoading(true);
    setStep(0);

    try {
      const result = await predictCrop({
        state,
        district,

        nitrogen: Number(formData.nitrogen),
        phosphorus: Number(formData.phosphorus),
        potassium: Number(formData.potassium),
        ph: Number(formData.ph),

        temperature: Number(formData.temperature),
        humidity: Number(formData.humidity),
        rainfall: Number(formData.rainfall),
      });

      onComplete(result);
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Failed to connect to AI server"
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // FIELD DEFINITIONS
  // ============================================================

  const soilFields = [
    {
      label: "Nitrogen",
      symbol: "N",
      key: "nitrogen" as const,
      icon: FlaskConical,
      emoji: "🧪",
      unit: "mg/kg",
      description: "Soil nutrient",
    },
    {
      label: "Phosphorus",
      symbol: "P",
      key: "phosphorus" as const,
      icon: FlaskConical,
      emoji: "🧪",
      unit: "mg/kg",
      description: "Soil nutrient",
    },
    {
      label: "Potassium",
      symbol: "K",
      key: "potassium" as const,
      icon: FlaskConical,
      emoji: "🧪",
      unit: "mg/kg",
      description: "Soil nutrient",
    },
    {
      label: "Soil pH",
      symbol: "",
      key: "ph" as const,
      icon: TestTube2,
      emoji: "⚗️",
      unit: "pH",
      description: "Soil acidity / alkalinity",
    },
  ];

  const weatherFields = [
    {
      label: "Temperature",
      key: "temperature" as const,
      icon: Thermometer,
      emoji: "🌡️",
      unit: "°C",
      description: "Current weather",
    },
    {
      label: "Humidity",
      key: "humidity" as const,
      icon: Droplets,
      emoji: "💧",
      unit: "%",
      description: "Current weather",
    },
    {
      label: "Rainfall",
      key: "rainfall" as const,
      icon: CloudRain,
      emoji: "🌧️",
      unit: "mm",
      description: "Current weather",
    },
  ];

  // ============================================================
  // FIELD CARD
  // ============================================================

  const renderField = (
    item: {
      label: string;
      symbol?: string;
      key:
        | "nitrogen"
        | "phosphorus"
        | "potassium"
        | "temperature"
        | "humidity"
        | "ph"
        | "rainfall";
      icon: any;
      emoji: string;
      unit: string;
      description: string;
    },
    readOnly: boolean
  ) => {
    const Icon = item.icon;

    return (
      <div
        key={item.key}
        className={`
          group
          relative
          rounded-[22px]
          border
          p-4
          transition-all
          duration-300
          ${
            readOnly
              ? `
                border-cyan-400/15
                bg-cyan-400/[0.035]
                hover:border-cyan-300/30
                hover:bg-cyan-400/[0.06]
              `
              : `
                border-white/10
                bg-white/[0.035]
                hover:border-green-400/25
                hover:bg-white/[0.055]
              `
          }
        `}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{item.emoji}</span>

            <div>
              <p className="text-sm font-semibold text-white/85">
                {item.label}

                {item.symbol && (
                  <span className="ml-1 text-white/45">
                    ({item.symbol})
                  </span>
                )}
              </p>

              <p className="mt-0.5 text-xs text-white/40">
                {item.description}
              </p>
            </div>
          </div>

          <Icon
            size={20}
            className={
              readOnly
                ? "text-cyan-300/80"
                : "text-green-300/80"
            }
          />
        </div>

        <div className="relative mt-5">
          <input
            type="number"
            value={formData[item.key]}
            readOnly={readOnly}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [item.key]: e.target.value,
              }))
            }
            placeholder={
              readOnly
                ? weatherLoading
                  ? "Loading..."
                  : "Auto"
                : "Enter value"
            }
            className={`
              h-[52px]
              w-full
              rounded-2xl
              border
              px-4
              pr-20
              text-lg
              font-bold
              outline-none
              transition-all
              duration-300
              ${
                readOnly
                  ? `
                    cursor-not-allowed
                    border-cyan-400/10
                    bg-cyan-400/[0.025]
                    text-cyan-50
                  `
                  : `
                    border-white/10
                    bg-black/[0.08]
                    text-white
                    hover:border-white/20
                    focus:border-green-400/50
                    focus:bg-green-400/[0.04]
                    focus:shadow-[0_0_25px_rgba(34,197,94,.12)]
                  `
              }
              placeholder:text-white/25
            `}
          />

          <span
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-xs
              font-semibold
              text-white/40
            "
          >
            {item.unit}
          </span>
        </div>
      </div>
    );
  };

  // ============================================================
  // MAIN UI
  // ============================================================

  return (
    <section className="w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/15
          bg-white/[0.025]
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.20)]
          px-8
          py-10
          md:px-10
          md:py-12
          xl:px-12
        "
      >
        {/* Background glows */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[-120px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-green-400/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            bottom-[-180px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-400/[0.04]
            blur-[130px]
          "
        />

        <div className="relative z-10">

          {/* HEADER */}

          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-green-500
                to-emerald-700
                shadow-[0_0_35px_rgba(34,197,94,.40)]
              "
            >
              <BrainCircuit
                size={28}
                className="text-white"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                AI Farm Analysis Engine
              </h2>

              <p className="mt-1 text-sm md:text-base text-white/60">
                Enter your soil values and let AgriSense AI identify
                the most suitable crop.
              </p>
            </div>
          </div>

          {/* WEATHER STATUS */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-cyan-400/15
              bg-cyan-400/[0.035]
              px-5
              py-4
            "
          >
            {weatherLoading ? (
              <>
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-300
                    animate-pulse
                  "
                />

                <p className="text-sm text-cyan-300">
                  🌦️ Getting current weather data...
                </p>
              </>
            ) : weatherError ? (
              <>
                <span className="text-lg">⚠️</span>

                <p className="text-sm text-yellow-300">
                  Weather data unavailable: {weatherError}
                </p>
              </>
            ) : weather ? (
              <>
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-green-400/10
                    text-green-300
                  "
                >
                  ✓
                </span>

                <p className="text-sm text-green-300">
                  Weather automatically loaded from your current location
                </p>
              </>
            ) : null}
          </div>

          {/* SOIL VALUES */}

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xl">🌱</span>

              <div>
                <h3 className="text-sm font-bold text-white">
                  Soil Test Values
                </h3>

                <p className="text-xs text-white/40">
                  Enter the NPK and pH values from your soil test report.
                </p>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-4
              "
            >
              {soilFields.map((item) =>
                renderField(item, false)
              )}
            </div>
          </div>

          {/* WEATHER VALUES */}

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xl">🌦️</span>

              <div>
                <h3 className="text-sm font-bold text-white">
                  Current Weather
                </h3>

                <p className="text-xs text-white/40">
                  Automatically detected from your current location.
                </p>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-4
              "
            >
              {weatherFields.map((item) =>
                renderField(item, true)
              )}
            </div>
          </div>

          {/* INFORMATION BOX */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              px-5
              py-4
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                md:flex-row
                md:items-center
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🧪</span>

                <span className="font-semibold text-yellow-300">
                  Soil:
                </span>

                <span className="text-white/55">
                  NPK and pH values are entered manually.
                </span>
              </div>

              <span className="hidden md:block text-white/20">
                |
              </span>

              <div className="flex items-center gap-2">
                <span className="text-lg">🌦️</span>

                <span className="font-semibold text-cyan-300">
                  Weather:
                </span>

                <span className="text-white/55">
                  Temperature, humidity and rainfall are loaded automatically.
                </span>
              </div>
            </div>
          </div>

          {/* BUTTON */}

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={
                loading ||
                weatherLoading ||
                !weather
              }
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-emerald-700
                px-10
                py-4
                text-base
                md:px-12
                md:py-5
                md:text-lg
                font-bold
                text-white
                shadow-[0_15px_40px_rgba(34,197,94,.30)]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_20px_50px_rgba(34,197,94,.45)]
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? (
                  <>
                    <span
                      className="
                        h-5
                        w-5
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                        animate-spin
                      "
                    />

                    {
                      loadingText[
                        Math.min(
                          step,
                          loadingText.length - 1
                        )
                      ]
                    }
                  </>
                ) : weatherLoading ? (
                  "🌦️ Getting Weather..."
                ) : (
                  "✨ Generate AI Recommendation"
                )}
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}