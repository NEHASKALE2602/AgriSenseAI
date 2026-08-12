"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import CropHero from "@/components/crop/CropHero";
import FarmLocationSelector from "@/components/crop/FarmLocationSelector";
import FarmInputPanel from "@/components/crop/FarmInputPanel";
import RecommendationResult from "@/components/crop/RecommendationResult";
import AlternativeCrops from "@/components/crop/AlternativeCrops";
import AIDecisionReport from "@/components/crop/AIDecisionReport";
import SmartFarmAnalytics from "@/components/crop/SmartFarmAnalytics";
import MarketIntelligence from "@/components/crop/MarketIntelligence";
import AIActionPlan from "@/components/crop/AIActionPlan";

export default function CropRecommendationPage() {
  const [prediction, setPrediction] = useState<any>(null);

  const [location, setLocation] = useState({
    state: "",
    district: "",
  });

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

        <FarmLocationSelector
          onLocationChange={setLocation}
        />

        <FarmInputPanel
          state={location.state}
          district={location.district}
          onComplete={(result) => setPrediction(result)}
        />

        {prediction && (
          <>
            <RecommendationResult
              prediction={prediction}
            />

            <AlternativeCrops
              prediction={prediction}
            />

            <AIDecisionReport
              prediction={prediction}
            />

            <SmartFarmAnalytics
              prediction={prediction}
            />

            <MarketIntelligence
              prediction={prediction}
            />

            <AIActionPlan prediction={prediction} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}