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

export default function MarketPricePage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="space-y-10">

        {/* Hero */}
        <MarketHero />

        {/* Filter */}
        <MarketFilterBar />

        {/* AI Insight */}
        <AIMarketInsight />

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