"use client";

import { motion } from "framer-motion";

import {
  Activity,
  ShieldAlert,
  Leaf,
  Download,
} from "lucide-react";

const activities = [

  {
    icon: ShieldAlert,
    color: "text-red-300",
    title: "Early Blight detected",
    crop: "Tomato Crop",
    time: "10:32 AM",
  },

  {
    icon: Leaf,
    color: "text-green-300",
    title: "Healthy Crop",
    crop: "Rice Field",
    time: "09:45 AM",
  },

  {
    icon: Download,
    color: "text-cyan-300",
    title: "Report Downloaded",
    crop: "Disease Report",
    time: "Yesterday",
  },

];

export default function RecentActivity() {

  return (

    <section

      className="
        mt-12

        rounded-[36px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-3xl

        p-8
      "

    >

      <div className="flex items-center gap-4">

        <div
          className="
            rounded-2xl
            bg-cyan-500/10
            p-4
          "
        >

          <Activity
            size={28}
            className="text-cyan-300"
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            Recent Activity
          </h2>

          <p className="mt-2 text-white/55">
            Latest AI disease detection history
          </p>

        </div>

      </div>
            <div className="mt-10 space-y-6">

        {activities.map((activity, index) => {

          const Icon = activity.icon;

          return (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{ once: true }}

              transition={{
                duration: 0.45,
                delay: index * 0.15,
              }}

              className="
                flex
                items-center
                justify-between

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]

                px-8
                py-6

                transition

                hover:border-green-400/20
                hover:bg-white/[0.05]
              "
            >

              <div className="flex items-center gap-6">

                <div
                  className="
                    rounded-2xl
                    bg-white/[0.05]
                    p-4
                  "
                >

                  <Icon

                    size={28}

                    className={activity.color}

                  />

                </div>

                <div>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {activity.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-white/55
                    "
                  >
                    {activity.crop}
                  </p>

                </div>

              </div>

              <div
                className="
                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-2

                  text-sm
                  text-white/60
                "
              >

                {activity.time}

              </div>

            </motion.div>

          );

        })}
              </div>

      {/* Bottom Summary */}

      <div
        className="
          mt-10

          rounded-[30px]

          border
          border-white/10

          bg-gradient-to-r
          from-green-500/10
          via-emerald-500/5
          to-cyan-500/10

          px-8
          py-6
        "
      >

        <div
          className="
            flex
            flex-col
            gap-4

            lg:flex-row
            lg:items-center
            lg:justify-between
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
              AI Activity Summary
            </h3>

            <p
              className="
                mt-2
                text-white/60
                leading-8
              "
            >
              AgriSense AI continuously records disease
              detections, healthy crop scans and exported
              reports, providing a complete activity history
              for every farmer.
            </p>

          </div>

          <div
            className="
              rounded-2xl

              border
              border-green-400/20

              bg-green-500/10

              px-8
              py-5
            "
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-green-300
              "
            >
              Today's Activity
            </p>

            <h2
              className="
                mt-2
                text-4xl
                font-black
                text-white
              "
            >
              12
            </h2>

          </div>

        </div>

      </div>

    </section>

  );

}