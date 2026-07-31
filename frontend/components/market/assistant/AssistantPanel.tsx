"use client";

import { AnimatePresence, motion } from "framer-motion";

import {
  BrainCircuit,
  Sparkles,
  X,
  CircleDot,
} from "lucide-react";

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function AssistantPanel({
  open,
  onClose,
}: AssistantPanelProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 30,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
    fixed

    top-24
    bottom-6
    right-8

    z-[9999]

    w-[430px]

    max-w-[calc(100vw-32px)]

    overflow-hidden

    rounded-[36px]

    border
    border-cyan-400/20

    bg-white/[0.06]

    backdrop-blur-[35px]

    shadow-[0_0_80px_rgba(6,182,212,.18)]
"
        >

          {/* Cyan Glow */}

          <div
            className="
              absolute

              -top-36
              -right-36

              h-[420px]
              w-[420px]

              rounded-full

              bg-cyan-500/15

              blur-[160px]
            "
          />

          {/* Green Glow */}

          <div
            className="
              absolute

              -bottom-44
              -left-44

              h-[420px]
              w-[420px]

              rounded-full

              bg-green-500/10

              blur-[180px]
            "
          />

          <div
  className="
    relative

    z-10

    flex

    h-full

    flex-col

    overflow-hidden
  "
>
                      {/* ================= HEADER ================= */}

          <div
            className="
              relative

              flex
              items-center
              justify-between

              border-b
              border-white/10

              bg-white/[0.03]

              px-8
              py-6
            "
          >

            {/* Left */}

            <div className="flex items-center gap-5">

              {/* AI Avatar */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 25px rgba(34,211,238,.25)",
                    "0 0 55px rgba(34,211,238,.45)",
                    "0 0 25px rgba(34,211,238,.25)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  relative

                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-cyan-500
                  via-sky-500
                  to-green-500
                "
              >

                <BrainCircuit
                  size={32}
                  className="text-white"
                />

              </motion.div>

              {/* Title */}

              <div>

                <h2
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-white
                    to-green-300

                    bg-clip-text

                    text-2xl

                    font-black

                    text-transparent
                  "
                >
                  AI Market Assistant
                </h2>

                <div className="mt-2 flex items-center gap-3">

                  <CircleDot
                    size={10}
                    className="fill-green-400 text-green-400"
                  />

                  <span
                    className="
                      text-sm

                      font-medium

                      text-green-300
                    "
                  >
                    Neural Engine Online
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

            <motion.button

              whileHover={{
                rotate: 90,
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.9,
              }}

              onClick={onClose}

              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/5

                text-white/80

                transition-all

                hover:border-red-400/40
                hover:bg-red-500/10
                hover:text-red-300
              "
            >

              <X size={22} />

            </motion.button>

          </div>

          {/* ================ HEADER END ================ */}
          <div
  className="
    flex-1

    overflow-y-auto

    px-6

    pb-4
  "
>
                    {/* ================= WELCOME HERO ================= */}

          <div
            className="
              relative

              px-8
              pt-5
              pb-3
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                rounded-[30px]

                border
                border-white/10

                bg-gradient-to-br
                from-cyan-500/8
                via-white/[0.02]
                to-green-500/8

                p-5
              "
            >

              <div className="flex items-start gap-6">

                {/* AI Avatar */}

                <motion.div

                  animate={{
                    y: [-4, 4, -4],
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}

                  className="
                    flex

                    h-14
                    w-14

                    shrink-0

                    items-center
                    justify-center

                    rounded-3xl

                    bg-gradient-to-br
                    from-cyan-500
                    via-blue-500
                    to-green-500

                    shadow-[0_0_40px_rgba(34,211,238,.35)]
                  "
                >

                  <BrainCircuit
                    size={40}
                    className="text-white"
                  />

                </motion.div>

                {/* Content */}

                <div className="flex-1">

                  <div
                    className="
                      inline-flex

                      items-center

                      gap-2

                      rounded-full

                      border
                      border-cyan-400/20

                      bg-cyan-500/10

                      px-4
                      py-2
                    "
                  >

                    <Sparkles
                      size={14}
                      className="text-cyan-300"
                    />

                    <span
                      className="
                        text-[11px]

                        uppercase

                        tracking-[0.28em]

                        font-semibold

                        text-cyan-300
                      "
                    >
                      AI READY
                    </span>

                  </div>

                  <h2
                    className="
                      mt-3

                      text-3xl

                      font-black

                      leading-tight

                      text-white
                    "
                  >
                    Hello Farmer 👋
                  </h2>

                  <p
                    className="
                      mt-5

                      leading-7

                      text-white/65
                    "
                  >
                    I can analyze
                    <span className="font-semibold text-cyan-300">
                      {" "}live mandi prices
                    </span>,
                    predict future crop trends,
                    compare nearby markets,
                    estimate transport cost,
                    and recommend the
                    <span className="font-semibold text-green-300">
                      {" "}best selling opportunity
                    </span>
                    using AI.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* ================= END HERO ================= */}
                    {/* ================= AI QUICK ACTIONS ================= */}

          <div
            className="
              px-8
              pb-6
            "
          >

            <h3
              className="
                mb-5

                text-xs

                uppercase

                tracking-[0.35em]

                font-semibold

                text-cyan-300
              "
            >
              Smart Suggestions
            </h3>

            <div
              className="
                grid

                grid-cols-2

                gap-4
              "
            >

              {/* Card 1 */}

              <motion.button

                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="
                  rounded-[24px]

                  border
                  border-cyan-400/15

                  bg-gradient-to-br
                  from-cyan-500/10
                  to-cyan-500/5

                  p-5

                  text-left

                  transition-all

                  hover:border-cyan-300/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
                "
              >

                <div className="text-3xl">📈</div>

                <h4
                  className="
                    mt-4

                    text-lg

                    font-bold

                    text-white
                  "
                >
                  Highest Price
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    leading-6

                    text-white/60
                  "
                >
                  Find today's highest soybean market.
                </p>

              </motion.button>

              {/* Card 2 */}

              <motion.button

                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="
                  rounded-[24px]

                  border
                  border-green-400/15

                  bg-gradient-to-br
                  from-green-500/10
                  to-green-500/5

                  p-5

                  text-left

                  transition-all

                  hover:border-green-300/40
                  hover:shadow-[0_0_35px_rgba(34,197,94,.15)]
                "
              >

                <div className="text-3xl">💰</div>

                <h4
                  className="
                    mt-4

                    text-lg

                    font-bold

                    text-white
                  "
                >
                  Sell Today?
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    leading-6

                    text-white/60
                  "
                >
                  AI recommends whether you should wait.
                </p>

              </motion.button>

              {/* Card 3 */}

              <motion.button

                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="
                  rounded-[24px]

                  border
                  border-yellow-400/15

                  bg-gradient-to-br
                  from-yellow-500/10
                  to-orange-500/5

                  p-5

                  text-left

                  transition-all

                  hover:border-yellow-300/40
                "
              >

                <div className="text-3xl">🌦</div>

                <h4
                  className="
                    mt-4

                    text-lg

                    font-bold

                    text-white
                  "
                >
                  Weather Impact
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    leading-6

                    text-white/60
                  "
                >
                  Analyze weather influence on prices.
                </p>

              </motion.button>

              {/* Card 4 */}

              <motion.button

                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="
                  rounded-[24px]

                  border
                  border-purple-400/15

                  bg-gradient-to-br
                  from-purple-500/10
                  to-blue-500/5

                  p-5

                  text-left

                  transition-all

                  hover:border-purple-300/40
                "
              >

                <div className="text-3xl">🚜</div>

                <h4
                  className="
                    mt-4

                    text-lg

                    font-bold

                    text-white
                  "
                >
                  Best Market
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    leading-6

                    text-white/60
                  "
                >
                  Find the most profitable nearby mandi.
                </p>

              </motion.button>

            </div>

          </div>

          {/* ================= END QUICK ACTIONS ================= */}
          </div>
                    {/* ================= CHAT INPUT ================= */}

          <div
            className="
              mt-auto

              border-t
              border-white/10

              bg-white/[0.03]

              backdrop-blur-2xl

              p-6
            "
          >

            {/* Input Box */}

            <div
              className="
                flex

                items-center

                gap-3

                rounded-[22px]

                border
                border-white/10

                bg-white/[0.04]

                px-5
                py-4

                transition-all

                focus-within:border-cyan-400/40
                focus-within:shadow-[0_0_25px_rgba(34,211,238,.12)]
              "
            >

              {/* Attachment */}

              <button
                className="
                  flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  bg-white/5

                  text-lg

                  transition-all

                  hover:bg-cyan-500/10
                "
              >
                📎
              </button>

              {/* Input */}

              <input
                type="text"
                placeholder="Ask AI anything about today's market..."
                className="
                  flex-1

                  bg-transparent

                  text-white

                  placeholder:text-white/40

                  outline-none
                "
              />

              {/* Voice */}

              <button
                className="
                  flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  bg-white/5

                  text-lg

                  transition-all

                  hover:bg-green-500/10
                "
              >
                🎤
              </button>

              {/* Send */}

              <motion.button

                whileHover={{
                  scale: 1.08,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                  flex

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-green-500

                  text-xl

                  text-white

                  shadow-[0_0_30px_rgba(34,211,238,.25)]
                "
              >
                ➜
              </motion.button>

            </div>

            {/* Footer */}

            <div
              className="
                mt-4

                flex

                items-center
                justify-between
              "
            >

              <span
                className="
                  text-xs

                  text-white/40
                "
              >
                Powered by AgriSense AI
              </span>

              <span
                className="
                  text-xs

                  text-cyan-300
                "
              >
                AI Engine Ready
              </span>

            </div>

          </div>

          {/* ================= END CHAT INPUT ================= */}

        </div>

      </motion.div>

    )}

  </AnimatePresence>

);
}