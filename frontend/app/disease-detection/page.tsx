"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import AIVisionScanner from "@/components/disease/AIVisionScanner";

export default function DiseaseDetectionPage() {
  return (
    <DashboardLayout>
      <div
        className="
          relative
          w-full
          max-w-[1550px]
          mx-auto
          pb-24
          space-y-16
        "
      >
        <AIVisionScanner />
      </div>
    </DashboardLayout>
  );
}