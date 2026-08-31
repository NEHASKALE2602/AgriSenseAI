"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import ProfitHero from "@/components/profit/ProfitHero";
import ProfitInputPanel from "@/components/profit/ProfitInputPanel";
import LiveMarketCard from "@/components/profit/LiveMarketCard";
import ProfitOverview from "@/components/profit/ProfitOverview";
import FinancialChart from "@/components/profit/FinancialChart";
import MarketComparisonChart from "@/components/profit/MarketComparisonChart";

export default function ProfitPredictionPage() {

  const [prediction, setPrediction] = useState<any>(null);

  return (
    <DashboardLayout>

      <div className="mx-auto w-full max-w-[1500px] space-y-10 pb-20">

        <ProfitHero />

        <ProfitInputPanel
          onComplete={(result) => {
            setPrediction(result);
          }}
        />

        {prediction && (
          <div className="space-y-10">

            <LiveMarketCard
              market={prediction.live_market}
            />

            <ProfitOverview
              financial={prediction.financial}
            />

            <div className="grid gap-8 xl:grid-cols-2">

              <FinancialChart
                data={prediction.financial_breakdown}
              />

              <MarketComparisonChart
                data={prediction.market_comparison}
              />

            </div>

            <section className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 text-sm text-white/45">

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>
                  <p className="font-semibold text-white">
                    Analysis Information
                  </p>

                  <p className="mt-1">
                    {prediction.markets_found} market record(s) were used
                    for this calculation.
                  </p>
                </div>

                <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-green-300">
                  Live Market Profit Mode
                </div>

              </div>

            </section>

          </div>
        )}

      </div>

    </DashboardLayout>
  );
}