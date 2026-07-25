import { ReactNode } from "react";
import AnimatedBackground from "../background/AnimatedBackground";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <AnimatedBackground />

      <Sidebar />

      <Topbar />

      <main
        className="
          relative
          z-10
          ml-[320px]
          pt-28
          px-10
        "
      >
        {children}
      </main>

    </div>
  );
}