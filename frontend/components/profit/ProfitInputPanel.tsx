"use client";

import { useState } from "react";
import {
  Calculator,
  MapPin,
  Sprout,
  Loader2,
} from "lucide-react";

type ProfitInputPanelProps = {
  onComplete: (result: any) => void;
};

export default function ProfitInputPanel({
  onComplete,
}: ProfitInputPanelProps) {

  const [crop, setCrop] = useState("Soybean");
  const [state, setState] = useState("Maharashtra");
  const [district, setDistrict] = useState("Pune");
  const [area, setArea] = useState("2");
  const [yieldPerAcre, setYieldPerAcre] = useState("10");
  const [cost, setCost] = useState("25000");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/profit/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            crop,
            state,
            district,
            area_acres: Number(area),
            yield_per_acre: Number(yieldPerAcre),
            cultivation_cost: Number(cost),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.detail ||
          "Unable to calculate profit."
        );
      }

      onComplete(data);

    } catch (err: any) {

      setError(
        err?.message ||
        "Unable to connect to the AgriSense AI backend."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-[32px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_20px_60px_rgba(0,0,0,.18)] backdrop-blur-2xl md:p-9">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15">
          <Calculator className="text-green-400" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Farm Profit Calculator
          </h2>

          <p className="mt-1 text-sm text-white/50">
            Enter your current farming details
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-7"
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Crop
            </label>

            <div className="relative">
              <Sprout
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400"
              />

              <input
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                placeholder="Soybean"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-white outline-none transition focus:border-green-400/40"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              State
            </label>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Maharashtra"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-white outline-none transition focus:border-cyan-400/40"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              District
            </label>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Pune"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-white outline-none transition focus:border-cyan-400/40"
              />
            </div>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Farm Area (acres)
            </label>

            <input
              type="number"
              min="0.01"
              step="0.01"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none focus:border-green-400/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Expected Yield / Acre
            </label>

            <input
              type="number"
              min="0.01"
              step="0.01"
              value={yieldPerAcre}
              onChange={(e) => setYieldPerAcre(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none focus:border-green-400/40"
            />

            <p className="mt-2 text-xs text-white/35">
              Enter yield in the same unit used by your market price calculation.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Cultivation Cost (₹)
            </label>

            <input
              type="number"
              min="0"
              step="1"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none focus:border-green-400/40"
            />
          </div>

        </div>

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
        >

          {loading ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Fetching Live Market Data...
            </>
          ) : (
            <>
              <Calculator size={20} />
              Calculate Live Profit
            </>
          )}

        </button>

      </form>
    </section>
  );
}