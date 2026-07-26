"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  Wheat,
  ChevronRight,
} from "lucide-react";

const menuGroups = [
  {
    title: "MAIN",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: CloudSun,
        label: "Weather",
        href: "/weather",
      },
      {
        icon: Sprout,
        label: "Crop Recommendation",
        href: "/crop-recommendation",
      },
      {
        icon: ShieldCheck,
        label: "Disease Detection",
        href: "/disease-detection",
      },
      {
        icon: FileText,
        label: "Disease Reports",
        href: "/disease-reports",
      },
    ],
  },

  {
    title: "SMART SERVICES",
    items: [
      {
        icon: IndianRupee,
        label: "Market Prices",
        href: "/market-prices",
      },
      {
        icon: Newspaper,
        label: "Agriculture News",
        href: "/agriculture-news",
      },
      {
        icon: Bot,
        label: "AI Assistant",
        href: "/ai-assistant",
      },
      {
        icon: CalendarDays,
        label: "Crop Calendar",
        href: "/crop-calendar",
      },
      {
        icon: TrendingUp,
        label: "Profit Prediction",
        href: "/profit-prediction",
      },
      {
        icon: Landmark,
        label: "Government Schemes",
        href: "/government",
      },
    ],
  },

  {
    title: "ACCOUNT",
    items: [
      {
        icon: User,
        label: "Farmer Profile",
        href: "/profile",
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed
        left-10
        top-8
        bottom-8
        w-[250px]
        z-50
        flex
        flex-col
      "
    >
      {/* Logo */}

      <div className="mb-7">

        <div className="flex items-center gap-3">

          <div
            className="
              h-12
              w-12
              rounded-2xl
              bg-gradient-to-br
              from-green-400
              to-green-700
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(34,197,94,.45)]
            "
          >
            <Wheat
              size={24}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-[30px] font-extrabold leading-none">
  <span className="text-white">AgriSense </span>
  <span className="text-green-400">AI</span>
</h1>

          </div>

        </div>

        <p
          className="
            mt-4
            text-sm
            text-white/80
            leading-6
          "
        >
          Smart Farming Platform
        </p>

      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          overflow-y-auto
          pr-2

          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
                {menuGroups.map((group) => (
          <div key={group.title} className="mb-8">

            {/* Section Heading */}

            <h3
              className="
                mb-3
                pl-2
                text-[11px]
                font-semibold
                tracking-[0.25em]
                uppercase
                text-white/45
                font-bold
                tracking-[0.32em]
              "
            >
              {group.title}
            </h3>

            <div className="space-y-1">

              {group.items.map((item) => {

                const Icon = item.icon;

                const active =
                  pathname === item.href;

                return (

                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-5
                      rounded-xl
                      px-3
                      py-3
                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-white/10 backdrop-blur-xl"
                          : "hover:bg-white/5 hover:translate-x-1"
                      }
                    `}
                  >

                    {/* Active Indicator */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-3
                        bottom-3
                        w-[3px]
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-green-400 shadow-[0_0_18px_rgba(34,197,94,.9)]"
                            : "bg-transparent"
                        }
                      `}
                    />

                    {/* Icon */}

                    <Icon
                      size={19}
                      className={`
                        transition-all
                        duration-300

                        ${
                          active
                            ? "text-green-400"
                            : "text-white/90 group-hover:text-green-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,.35)]"
                        }
                      `}
                    />

                    {/* Label */}

                    <span
                      className={`
                        flex-1
                        text-[14px]
                        font-medium
                        transition-all
                        duration-300

                        ${
                          active
                            ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.8)]"
                            : "text-white/95 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.7)]"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    {/* Active Arrow */}

                    {active && (

                      <ChevronRight
                        size={15}
                        className="
                          text-green-300
                          animate-pulse
                        "
                      />

                    )}

                  </Link>

                );

              })}

            </div>

          </div>
        ))}

      </nav>
            {/* Bottom */}

      <div className="pt-4">

        

        <button
          className="
            group
            flex
            items-center
            gap-3
            w-full
            transition-all
            duration-300
            hover:translate-x-2
            hover:text-white
          "
        >

          {/* Avatar */}

          <div className="relative">

            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Farmer"
              className="
                h-12
                w-12
                rounded-full
                border
                border-green-400/60
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                h-3
                w-3
                rounded-full
                bg-green-400
                border-2
                border-[#0d0d0d]
                shadow-[0_0_12px_rgba(34,197,94,.8)]
              "
            />

          </div>

          {/* User */}

          <div className="flex-1 text-left">

            <h3
              className="
                text-white
                font-semibold
                text-sm
              "
            >
              Farmer
            </h3>

            <p
              className="
                text-xs
                text-white/70
              "
            >
              Smart Farming
            </p>

          </div>

        </button>

      </div>

    </aside>
  );
}
