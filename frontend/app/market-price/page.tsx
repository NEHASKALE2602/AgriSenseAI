"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import MarketHero from "@/components/market/MarketHero";
import MarketFilterBar from "@/components/market/MarketFilterBar";
import AIMarketInsight from "@/components/market/insight/AIMarketInsight";
import BestSellingOpportunity from "@/components/market/opportunity/BestSellingOpportunity";
import MarketAnalyticsDashboard from "@/components/market/analytics/MarketAnalyticsDashboard";

import FloatingAIButton from "@/components/market/assistant/FloatingAIButton";
import AssistantPanel from "@/components/market/assistant/AssistantPanel";

import {
  getMarketPrices,
  MarketRecord,
} from "@/services/market";

export default function MarketPricePage() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  const [marketData, setMarketData] = useState<MarketRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("soybean");

  const handleAnalyze = async (
    crop: string,
    state: string,
    district: string
  ) => {
    try {
      setLoading(true);
      setError("");

      const data = await getMarketPrices(
        crop,
        state,
        district
      );

      setSelectedCrop(crop);

      setMarketData(data);
    } catch (err) {
      setMarketData([]);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch market prices"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10">

        {/* Hero */}
        <MarketHero />

        {/* Filter */}
        <MarketFilterBar
          onAnalyze={handleAnalyze}
        />

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-white/70">
            Loading live market prices...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-red-300">
            {error}
          </div>
        )}

        {/* Market Results */}
        {marketData.length > 0 && (
          <section className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8">
            <h2 className="text-2xl font-bold text-white">
              Live Market Prices
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-white/50">
                    <th className="px-4 py-3">Commodity</th>
                    <th className="px-4 py-3">Market</th>
                    <th className="px-4 py-3">District</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Min</th>
                    <th className="px-4 py-3">Max</th>
                    <th className="px-4 py-3">Modal</th>
                  </tr>
                </thead>

                <tbody>
                  {marketData.map((record, index) => (
                    <tr
                      key={`${record.market}-${record.arrival_date}-${index}`}
                      className="border-b border-white/5 text-white/80"
                    >
                      <td className="px-4 py-4">
                        {record.commodity}
                      </td>

                      <td className="px-4 py-4">
                        {record.market}
                      </td>

                      <td className="px-4 py-4">
                        {record.district}
                      </td>

                      <td className="px-4 py-4">
                        {record.arrival_date}
                      </td>

                      <td className="px-4 py-4">
                        ₹{record.min_price}
                      </td>

                      <td className="px-4 py-4">
                        ₹{record.max_price}
                      </td>

                      <td className="px-4 py-4 font-semibold text-green-300">
                        ₹{record.modal_price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* AI Insight */}
        <AIMarketInsight 
	    marketData={marketData}
	    crop={selectedCrop}
	/>

        {/* Best Selling */}
        <BestSellingOpportunity />

        {/* Analytics */}
        <MarketAnalyticsDashboard />

        <FloatingAIButton
          onClick={() => setAssistantOpen(true)}
        />

        <AssistantPanel
          open={assistantOpen}
          onClose={() => setAssistantOpen(false)}
        />

      </div>
    </DashboardLayout>
  );
}