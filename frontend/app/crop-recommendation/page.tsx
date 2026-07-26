"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import CropHero from "@/components/crop/CropHero";
import FarmInputPanel from "@/components/crop/FarmInputPanel";
import RecommendationResult from "@/components/crop/RecommendationResult";
import AlternativeCrops from "@/components/crop/AlternativeCrops";
import AIDecisionReport from "@/components/crop/AIDecisionReport";
import SmartFarmAnalytics from "@/components/crop/SmartFarmAnalytics";
import MarketIntelligence from "@/components/crop/MarketIntelligence";
import AIActionPlan from "@/components/crop/AIActionPlan";

export default function CropRecommendationPage() {

  const [showResult, setShowResult] = useState(false);

  return (

    <DashboardLayout>

      <div
        className="
          w-full
          max-w-[1500px]
          mx-auto
          pb-20
          space-y-14
        "
      >

        <CropHero />

        <FarmInputPanel
          onComplete={() => setShowResult(true)}
        />

        {showResult && (

          <>
            <RecommendationResult />

            <AlternativeCrops />

            <AIDecisionReport />

            <SmartFarmAnalytics />

            <MarketIntelligence />

            <AIActionPlan />
          </>

        )}

      </div>

    </DashboardLayout>

  );

}