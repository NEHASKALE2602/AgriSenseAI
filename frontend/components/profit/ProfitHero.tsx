"use client";

import { BarChart3, TrendingUp, IndianRupee, Activity } from "lucide-react";

export default function ProfitHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_20px_70px_rgba(0,0,0,.22)] backdrop-blur-2xl md:p-10">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10">

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15">
            <BarChart3 className="text-green-400" size={25} />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Live Profit Intelligence
            </p>

            <p className="mt-1 text-sm text-white/45">
              Real-time market based profitability analysis
            </p>
          </div>
        </div>

        <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
          Know Your Farm's
          <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Live Profit Potential
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
          Enter your crop and farm details to calculate expected revenue,
          cultivation cost and estimated profit using live agricultural market
          prices.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <IndianRupee className="text-green-400" size={21} />
            <p className="mt-3 text-sm text-white/45">Live Market Data</p>
            <p className="mt-1 font-semibold text-white">Data.gov.in</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <TrendingUp className="text-cyan-400" size={21} />
            <p className="mt-3 text-sm text-white/45">Profit Analysis</p>
            <p className="mt-1 font-semibold text-white">Revenue vs Cost</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <Activity className="text-yellow-300" size={21} />
            <p className="mt-3 text-sm text-white/45">Market Comparison</p>
            <p className="mt-1 font-semibold text-white">Min / Modal / Max</p>
          </div>

        </div>
      </div>
    </section>
  );
}