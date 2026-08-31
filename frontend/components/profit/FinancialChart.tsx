"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: any[];
};

function money(value: number) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function FinancialChart({
  data,
}: Props) {

  return (
    <section className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
          Financial Analysis
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Revenue vs Cost vs Profit
        </h2>
      </div>

      <div className="mt-8 h-[340px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,.08)"
            />

            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255,.45)"
            />

            <YAxis
              stroke="rgba(255,255,255,.45)"
              tickFormatter={(value) =>
                `₹${Number(value).toLocaleString("en-IN")}`
              }
            />

            <Tooltip
              formatter={(value) => [
                money(Number(value)),
                "Amount",
              ]}
              contentStyle={{
                background: "#101814",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="value"
              fill="#22c55e"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}