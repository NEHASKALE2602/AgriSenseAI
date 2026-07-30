"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import DiseaseReportsHero from "@/components/diseaseReports/DiseaseReportsHero";
import ReportStats from "@/components/diseaseReports/ReportStats";
import ReportsTable from "@/components/diseaseReports/ReportsTable";
import RecentActivity from "@/components/diseaseReports/RecentActivity";

export default function DiseaseReportsPage() {
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
        <DiseaseReportsHero />
        <ReportStats />
        <ReportsTable />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}