"use client";

import {
  Activity,
  CalendarDays,
  MapPin,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

type Props = {
  market: any;
};

function money(value: number) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function LiveMarketCard({
  market,
}: Props) {

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-green-400/15 bg-green-500/[0.035] p-7 backdrop-blur-xl">

      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-400/10 blur-[90px]" />

      <div className="relative z-10">

        <div className="flex flex-wrap items-start justify-between gap-5">

          <div>
            <div className="flex items-center gap-2">
              <Activity
                size={19}
                className="text-green-400"
              />

              <span className="text-sm font-bold uppercase tracking-widest text-green-300">
                Live Market
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black text-white">
              {market.commodity}
            </h2>
          </div>

          <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
            ● Live Data
          </div>

        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
            <div className="flex items-center gap-2 text-white/45">
              <TrendingDown size={17} />
              Minimum
            </div>

            <p className="mt-3 text-2xl font-bold text-white">
              {money(market.min_price)}
            </p>

            <p className="mt-1 text-xs text-white/35">
              per {market.unit}
            </p>
          </div>

          <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
            <div className="flex items-center gap-2 text-green-300">
              <Activity size={17} />
              Modal Price
            </div>

            <p className="mt-3 text-3xl font-black text-green-300">
              {money(market.modal_price)}
            </p>

            <p className="mt-1 text-xs text-green-200/50">
              per {market.unit}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
            <div className="flex items-center gap-2 text-white/45">
              <TrendingUp size={17} />
              Maximum
            </div>

            <p className="mt-3 text-2xl font-bold text-white">
              {money(market.max_price)}
            </p>

            <p className="mt-1 text-xs text-white/35">
              per {market.unit}
            </p>
          </div>

        </div>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/50">

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {market.market}, {market.district}
          </span>

          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            Arrival: {market.arrival_date || "N/A"}
          </span>

        </div>

      </div>
    </section>
  );
}