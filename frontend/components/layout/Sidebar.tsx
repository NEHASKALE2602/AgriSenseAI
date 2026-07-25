"use client";

import {
  LayoutDashboard,
  CloudSun,
  Sprout,
  ShieldCheck,
  FileText,
  IndianRupee,
  Newspaper,
  Bot,
  CalendarDays,
  TrendingUp,
  Landmark,
  User,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CloudSun, label: "Weather" },
  { icon: Sprout, label: "Crop Recommendation" },
  { icon: ShieldCheck, label: "Disease Detection" },
  { icon: FileText, label: "Disease Reports" },
  { icon: IndianRupee, label: "Market Prices" },
  { icon: Newspaper, label: "Agriculture News" },
  { icon: Bot, label: "AI Assistant" },
  { icon: CalendarDays, label: "Crop Calendar" },
  { icon: TrendingUp, label: "Profit Prediction" },
  { icon: Landmark, label: "Government Schemes" },
  { icon: User, label: "Farmer Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="
      fixed
      left-6
      top-6
      bottom-6
      w-[290px]
      rounded-[34px]
      border border-white/15
      bg-white/[0.05]
      backdrop-blur-3xl
      shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      flex
      flex-col
      overflow-hidden
      z-50
    "
    >
      {/* Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="relative px-7 pt-7 pb-4 flex-shrink-0">
        <h1 className="text-[32px] font-bold leading-none text-white">
          AgriSense <span className="text-green-400">AI</span>
        </h1>

        <p className="mt-2 text-sm text-white/60">
          Smart Farming Platform
        </p>
      </div>

      {/* Menu */}
      <nav
        className="
        flex-1
        overflow-y-auto
        px-4
        pb-4
        space-y-1.5
        scrollbar-thin
        scrollbar-thumb-white/20
        scrollbar-track-transparent
      "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`
              group
              flex
              items-center
              gap-4
              w-full
              rounded-2xl
              px-4
              py-3
              transition-all
              duration-300

              ${
                item.active
                  ? "bg-green-500/20 border border-green-400/30 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }
            `}
            >
              <Icon
                size={19}
                className={
                  item.active
                    ? "text-green-400"
                    : "text-white/70 group-hover:text-green-300"
                }
              />

              <span className="text-[14px] font-medium flex-1 text-left">
                {item.label}
              </span>

              {item.active && (
                <ChevronRight size={16} className="text-green-300" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 flex-shrink-0">
        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          p-3
        "
        >
          <div
            className="
            h-12
            w-12
            rounded-full
            bg-gradient-to-br
            from-green-400
            to-green-700
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
          >
            F
          </div>

          <div className="flex-1">
            <h3 className="text-white text-sm font-semibold">
              Farmer
            </h3>

            <p className="text-white/60 text-xs">
              Smart Farming
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}