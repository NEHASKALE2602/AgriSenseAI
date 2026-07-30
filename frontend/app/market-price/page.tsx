import DashboardLayout from "@/components/layout/DashboardLayout";

import MarketHero from "@/components/market/MarketHero";
import MarketFilterBar from "@/components/market/MarketFilterBar";
import AIMarketInsight from "@/components/market/insight/AIMarketInsight";
import BestSellingOpportunity from "@/components/market/opportunity/BestSellingOpportunity";


export default function MarketPricePage() {
  return (
    <DashboardLayout>
      <div className="space-y-10">

        {/* Hero */}
        <MarketHero />

        {/* Smart Filter Panel */}
        <MarketFilterBar />

        <AIMarketInsight />

        <BestSellingOpportunity />
        

      </div>
    </DashboardLayout>
  );
}