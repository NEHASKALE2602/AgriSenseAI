"use client";

import { motion } from "framer-motion";

type CircularProgressProps = {
  value: number;
  title: string;
  subtitle?: string;
  color?: string;
  size?: number;
};

export default function CircularProgress({
  value,
  title,
  subtitle,
  color = "#43A047",
  size = 160,
}: CircularProgressProps) {
  const strokeWidth = 10;

  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">

      {/* Circle */}

      <div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          {/* Background */}

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Progress */}

          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: offset,
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            style={{
              filter:
                "drop-shadow(0px 0px 10px rgba(34,197,94,.45))",
            }}
          />
        </svg>

        {/* Value */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col

            items-center
            justify-center
          "
        >
          <h2
            className="
              text-5xl
              font-black
              text-white
            "
          >
            {value}
          </h2>

          <span
            className="
              mt-1
              text-sm
              text-white/60
            "
          >
            %
          </span>
        </div>
      </div>

      {/* Text */}

      <h3
        className="
          mt-6
          text-xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className="
            mt-2
            text-white/60
            text-sm
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}