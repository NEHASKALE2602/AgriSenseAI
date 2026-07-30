"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ReportDetails from "./ReportDetails";

import {
  Search,
  Eye,
  Download,
  Filter,
} from "lucide-react";

export default function ReportsTable() {
  const [open, setOpen] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const reports = [

    {
      id: "#001",
      crop: "Tomato",
      disease: "Early Blight",
      confidence: "98%",
      date: "29 Jul 2026",
      status: "High Risk",
    },

    {
      id: "#002",
      crop: "Rice",
      disease: "Healthy",
      confidence: "100%",
      date: "28 Jul 2026",
      status: "Healthy",
    },

    {
      id: "#003",
      crop: "Potato",
      disease: "Late Blight",
      confidence: "96%",
      date: "27 Jul 2026",
      status: "Medium",
    },

    {
      id: "#004",
      crop: "Cotton",
      disease: "Leaf Spot",
      confidence: "94%",
      date: "26 Jul 2026",
      status: "Low",
    },

  ];

  return (

    <section
      className="
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        p-8
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Disease Reports
          </h2>

          <p className="mt-2 text-white/55">
            View every crop disease detected by AgriSense AI.
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-3

            rounded-2xl

            bg-green-500/15

            px-6
            py-3

            text-green-300

            transition

            hover:bg-green-500/25
          "
        >

          <Download size={18} />

          Export

        </button>

      </div>
            {/* Search & Filter */}

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-4">

        {/* Search */}

        <div
          className="
            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-white/10

            bg-white/[0.05]

            px-5
            py-4
          "
        >

          <Search
            size={18}
            className="text-white/50"
          />

          <input
            type="text"
            placeholder="Search Reports..."
            className="
              w-full
              bg-transparent
              text-white
              placeholder:text-white/40
              outline-none
            "
          />

        </div>

        {/* Crop */}

        <select
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/[0.05]

            px-5
            py-4

            text-white
            outline-none
          "
        >

          <option className="bg-[#0b1722]">
            All Crops
          </option>

          <option className="bg-[#0b1722]">
            Tomato
          </option>

          <option className="bg-[#0b1722]">
            Rice
          </option>

          <option className="bg-[#0b1722]">
            Potato
          </option>

        </select>

        {/* Disease */}

        <select
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/[0.05]

            px-5
            py-4

            text-white
            outline-none
          "
        >

          <option className="bg-[#0b1722]">
            All Diseases
          </option>

          <option className="bg-[#0b1722]">
            Healthy
          </option>

          <option className="bg-[#0b1722]">
            Early Blight
          </option>

          <option className="bg-[#0b1722]">
            Leaf Spot
          </option>

        </select>

        {/* Filter */}

        <button
          className="
            flex
            items-center
            justify-center
            gap-3

            rounded-2xl

            bg-cyan-500/15

            py-4

            text-cyan-300

            transition

            hover:bg-cyan-500/25
          "
        >

          <Filter size={18} />

          Apply Filter

        </button>

      </div>

      {/* Table */}

      <div className="mt-10 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="py-5 text-left text-white/45">
                Scan ID
              </th>

              <th className="py-5 text-left text-white/45">
                Crop
              </th>

              <th className="py-5 text-left text-white/45">
                Disease
              </th>

              <th className="py-5 text-left text-white/45">
                Confidence
              </th>

              <th className="py-5 text-left text-white/45">
                Date
              </th>

              <th className="py-5 text-left text-white/45">
                Status
              </th>

              <th className="py-5 text-center text-white/45">
                Action
              </th>

            </tr>

          </thead>

          <tbody>
                        {reports.map((report, index) => (

              <motion.tr

                key={report.id}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{ once: true }}

                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}

                className="
                  border-b
                  border-white/5

                  transition

                  hover:bg-white/[0.03]
                "
              >

                <td className="py-6 font-semibold text-cyan-300">
                  {report.id}
                </td>

                <td className="py-6 text-white">
                  {report.crop}
                </td>

                <td className="py-6 text-white/80">
                  {report.disease}
                </td>

                <td className="py-6 font-semibold text-green-300">
                  {report.confidence}
                </td>

                <td className="py-6 text-white/60">
                  {report.date}
                </td>

                <td className="py-6">

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-semibold

                      ${
                        report.status === "Healthy"
                          ? "bg-green-500/15 text-green-300"
                          : report.status === "High Risk"
                          ? "bg-red-500/15 text-red-300"
                          : report.status === "Medium"
                          ? "bg-yellow-500/15 text-yellow-300"
                          : "bg-cyan-500/15 text-cyan-300"
                      }
                    `}
                  >

                    {report.status}

                  </span>

                </td>

                <td className="py-6">

                  <div className="flex justify-center gap-3">

                    <button

  onClick={() => {

  setOpen(true);

  setTimeout(() => {

    reportRef.current?.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  }, 100);

}}

  className="
    rounded-xl
    bg-cyan-500/15
    p-3
    text-cyan-300
    transition
    hover:bg-cyan-500/25
  "

>

  <Eye size={18} />

</button>

                    <button
                      className="
                        rounded-xl
                        bg-green-500/15
                        p-3
                        text-green-300
                        transition
                        hover:bg-green-500/25
                      "
                    >

                      <Download size={18} />

                    </button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

</div>

{/* Report Details */}

<ReportDetails

  visible={open}

  reportRef={reportRef}

/>

</section>

);

}