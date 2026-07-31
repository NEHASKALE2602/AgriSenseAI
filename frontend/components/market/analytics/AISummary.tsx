"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Sparkles,
  Bot,
} from "lucide-react";

export default function AISummary() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative

        overflow-hidden

        rounded-[36px]

        border
        border-cyan-400/10

        bg-white/[0.04]

        backdrop-blur-3xl

        p-10
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute

          right-0
          bottom-0

          h-[340px]
          w-[340px]

          rounded-full

          bg-cyan-500/10

          blur-[180px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-start gap-6">

          <div
            className="
              flex

              h-20
              w-20

              items-center
              justify-center

              rounded-3xl

              bg-gradient-to-br
              from-cyan-500
              via-blue-500
              to-green-500

              shadow-[0_0_45px_rgba(6,182,212,.45)]
            "
          >

            <BrainCircuit
              size={42}
              className="text-white"
            />

          </div>

          <div>

            <div
              className="
                inline-flex

                items-center

                gap-3

                rounded-full

                border
                border-cyan-400/20

                bg-cyan-500/10

                px-5
                py-3
              "
            >

              <Sparkles
                size={18}
                className="text-cyan-300"
              />

              <span
                className="
                  text-xs

                  uppercase

                  tracking-[0.3em]

                  font-semibold

                  text-cyan-300
                "
              >
                AI Market Summary
              </span>

            </div>

            <h2
              className="
                mt-8

                text-[52px]

                font-black

                leading-none

                tracking-tight

                text-white
              "
            >
              Why AI Selected
              <br />
              This Market
            </h2>

          </div>

        </div>
                {/* AI Conversation */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mt-14

            rounded-[30px]

            border
            border-cyan-400/10

            bg-gradient-to-br
            from-cyan-500/5
            via-white/[0.03]
            to-green-500/5

            p-8
          "
        >

          <div className="flex gap-5">

            {/* AI Avatar */}

            <div
              className="
                flex

                h-16
                w-16

                shrink-0

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-cyan-500
                to-blue-600
              "
            >

              <Bot
                size={34}
                className="text-white"
              />

            </div>

            {/* AI Message */}

            <div className="flex-1">

              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.3em]

                  text-cyan-300
                "
              >
                AI Analysis
              </p>

              <h3
                className="
                  mt-3

                  text-2xl

                  font-bold

                  text-white
                "
              >
                Neural Market Intelligence Report
              </h3>

              <p
                className="
                  mt-6

                  text-lg

                  leading-10

                  text-white/70
                "
              >
                Our AI has analyzed more than
                <span className="font-bold text-cyan-300">
                  {" "}4.2 million historical price records
                </span>,
                regional demand, crop arrivals,
                weather forecasts, transportation cost,
                mandi performance and seasonal trends.

                <br /><br />

                Based on these factors, the system predicts
                that
                <span className="font-bold text-green-300">
                  {" "}soybean prices will continue to rise
                </span>
                over the next
                <span className="font-bold text-white">
                  {" "}5 days
                </span>
                because arrivals are decreasing while
                demand from processing industries remains
                consistently high.

              </p>

            </div>

          </div>

        </motion.div>
                {/* AI Insights */}

        <div
          className="
            mt-10

            grid

            gap-6

            md:grid-cols-2
          "
        >

          <div
            className="
              rounded-2xl

              border
              border-green-400/10

              bg-green-500/5

              p-6
            "
          >

            <p
              className="
                text-xs

                uppercase

                tracking-[0.25em]

                text-green-300
              "
            >
              Key Opportunity
            </p>

            <h3
              className="
                mt-4

                text-2xl

                font-bold

                text-white
              "
            >
              Sell within
              <span className="text-green-300">
                {" "}24 Hours
              </span>
            </h3>

            <p
              className="
                mt-4

                leading-8

                text-white/65
              "
            >
              AI predicts maximum profitability if farmers
              sell before fresh arrivals increase tomorrow.
            </p>

          </div>

          <div
            className="
              rounded-2xl

              border
              border-cyan-400/10

              bg-cyan-500/5

              p-6
            "
          >

            <p
              className="
                text-xs

                uppercase

                tracking-[0.25em]

                text-cyan-300
              "
            >
              AI Forecast
            </p>

            <h3
  className="
    mt-4

    text-2xl

    font-bold

    text-white
  "
>
  Expected Growth
  <span className="text-cyan-300">
    {" "}+5.8%
  </span>
</h3>

            <p
              className="
                mt-4

                leading-8

                text-white/65
              "
            >
              Current buying pressure remains strong,
              indicating a healthy upward market movement.
            </p>

          </div>

        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-10

            flex
            flex-wrap

            items-center
            justify-between

            gap-6
          "
        >

          <p
            className="
              max-w-2xl

              text-white/60

              leading-8
            "
          >
            This report is generated automatically using our
            AI Neural Forecast Engine by combining historical
            market data, live mandi prices, seasonal demand,
            transportation cost and weather intelligence.
          </p>

          <button
            className="
              rounded-2xl

              bg-gradient-to-r
              from-green-500
              via-emerald-500
              to-cyan-500

              px-8
              py-4

              font-semibold

              text-white

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-[0_0_35px_rgba(34,197,94,.45)]
            "
          >
            Generate Fresh AI Report
          </button>

        </div>

      </div>

    </motion.div>
  );
}