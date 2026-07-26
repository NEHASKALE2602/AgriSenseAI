"use client";

import { ArrowUpRight } from "lucide-react";

const crops = [
  {
    name: "Maize",
    match: "94%",
    profit: "High",
    image: "/images/maize.png",
  },
  {
    name: "Wheat",
    match: "91%",
    profit: "Medium",
    image: "/images/wheat.png",
  },
  {
    name: "Cotton",
    match: "88%",
    profit: "High",
    image: "/images/cotton.png",
  },
];

export default function AlternativeCrops() {
  return (
    <section className="mt-10">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Alternative Crop Suggestions
          </h2>

          <p className="mt-2 text-white/65">
            Other crops that closely match your farm conditions.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {crops.map((crop) => (

          <div
            key={crop.name}
            className="
              group

              relative

              overflow-hidden

              rounded-[28px]

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-7

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-green-400/25
              hover:shadow-[0_20px_45px_rgba(0,0,0,.28)]
            "
          >

            {/* Glow */}

            <div
              className="
                absolute

                right-0
                top-0

                h-40
                w-40

                rounded-full

                bg-green-500/10

                blur-[80px]

                opacity-0

                group-hover:opacity-100

                transition-all
              "
            />

            <div className="relative z-10">

              <div className="flex justify-center">

                <img
                  src={crop.image}
                  alt={crop.name}
                  className="
                    h-36

                    object-contain

                    transition-all
                    duration-500

                    group-hover:scale-110
                  "
                />

              </div>

              <h3
                className="
                  mt-6

                  text-2xl

                  font-bold

                  text-white

                  text-center
                "
              >
                {crop.name}
              </h3>

              <div className="mt-5 flex justify-center gap-3">

                <span
                  className="
                    rounded-full

                    bg-green-500/15

                    px-4
                    py-2

                    text-green-300

                    text-sm
                    font-semibold
                  "
                >
                  {crop.match} Match
                </span>

                <span
                  className="
                    rounded-full

                    bg-yellow-500/15

                    px-4
                    py-2

                    text-yellow-300

                    text-sm
                    font-semibold
                  "
                >
                  {crop.profit} Profit
                </span>

              </div>

              <button
                className="
                  mt-8

                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  py-4

                  flex
                  items-center
                  justify-center
                  gap-3

                  text-white

                  transition-all
                  duration-300

                  hover:bg-white/[0.08]
                "
              >

                View Details

                <ArrowUpRight size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}