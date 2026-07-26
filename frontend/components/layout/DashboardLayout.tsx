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
    <div
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* Background */}

      <AnimatedBackground />

      {/* Sidebar */}

      <Sidebar />

      {/* Topbar */}

      <Topbar />

      {/* Scrollable Content */}

      <main
        className="
          absolute

          left-[290px]
          right-0

          top-[72px]
          bottom-0

          overflow-y-auto
          overflow-x-hidden

          px-10
          pb-12

          z-10

          scrollbar-thin
          scrollbar-thumb-white/15
          scrollbar-track-transparent
        "
      >
        {children}
      </main>

    </div>
  );
}