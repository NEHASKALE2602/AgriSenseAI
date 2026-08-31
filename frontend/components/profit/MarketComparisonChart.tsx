"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  data: any[];
};

function money(value: number) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function MarketComparisonChart({
  data,
}: Props) {

  return (
    <section className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Market Intelligence
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Market Price Comparison
        </h2>

        <p className="mt-2 text-sm text-white/45">
          Compare available market prices for the selected crop.
        </p>
      </div>

      <div className="mt-8 h-[360px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 40,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,.08)"
            />

            <XAxis
              dataKey="market"
              stroke="rgba(255,255,255,.45)"
              angle={-20}
              textAnchor="end"
              height={70}
            />

            <YAxis
              stroke="rgba(255,255,255,.45)"
              tickFormatter={(value) =>
                `₹${Number(value).toLocaleString("en-IN")}`
              }
            />

            <Tooltip
              formatter={(value, name) => [
                money(Number(value)),
                String(name).replace("_", " ").toUpperCase(),
              ]}
              contentStyle={{
                background: "#101814",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Legend />

            <Bar
              dataKey="min_price"
              name="Minimum"
              fill="#64748b"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="modal_price"
              name="Modal"
              fill="#22c55e"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="max_price"
              name="Maximum"
              fill="#06b6d4"
              radius={[5, 5, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}