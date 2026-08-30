"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CloudRain,
  Droplets,
  Leaf,
  MapPin,
  Search,
  Sparkles,
  Sprout,
  Sun,
  Wheat,
  ShieldCheck,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
  CROP_CALENDAR_DATA,
  type ActivityType,
  type Crop,
} from "@/data/cropCalendarData";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEK_DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

type RecommendationType =
  | "sowing"
  | "irrigation"
  | "fertilizer"
  | "health"
  | "harvest";

/* =========================================================
   CROP IMAGE PATHS
   These paths match:
   public/crops/
========================================================= */

const CROP_IMAGE_PATHS: Record<string, string> = {
  Rice: "/crops/rice.png",
  Wheat: "/crops/wheat.png",
  Maize: "/crops/maize.png",
  Soybean: "/crops/soybean.png",
  Cotton: "/crops/cotton.png",
  Sugarcane: "/crops/sugarcane.png",
  Tomato: "/crops/tomato.png",
  Potato: "/crops/potato.png",
  Onion: "/crops/onion.png",
  Chickpea: "/crops/chickpea.png",
  "Pigeon Pea": "/crops/pigeon-pea.png",
  Groundnut: "/crops/groundnut.png",
  Bajra: "/crops/bajra.png",
  Jowar: "/crops/jowar.png",
  Mustard: "/crops/mustard.png",
  "Green Gram": "/crops/green-gram.png",
  "Black Gram": "/crops/black-gram.png",
  Chilli: "/crops/chilli.png",
  Brinjal: "/crops/brinjal.png",
  Cabbage: "/crops/cabbage.png",
  Carrot: "/crops/carrot.png",
  Sunflower: "/crops/sunflower.png",
  Turmeric: "/crops/turmeric.png",
  Banana: "/crops/banana.png",
};

/* =========================================================
   FALLBACK IMAGE PATH GENERATOR
========================================================= */

function getCropImage(crop: Crop): string {
  // First use explicit image if available
  if (crop.image) {
    return crop.image;
  }

  // Otherwise use our fixed crop image mapping
  if (CROP_IMAGE_PATHS[crop.name]) {
    return CROP_IMAGE_PATHS[crop.name];
  }

  // Final fallback for any future crop
  const slug = crop.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  return `/crops/${slug}.png`;
}

const ACTIVITY_META: Record<
  ActivityType,
  {
    label: string;
    short: string;
    icon: React.ElementType;
    color: string;
    bg: string;
  }
> = {
  preparation: {
    label: "Land Preparation",
    short: "Preparation",
    icon: Sprout,
    color: "text-amber-300",
    bg: "bg-amber-400/15 border-amber-400/25",
  },

  sowing: {
    label: "Sowing",
    short: "Sowing",
    icon: Leaf,
    color: "text-green-300",
    bg: "bg-green-400/15 border-green-400/25",
  },

  growth: {
    label: "Crop Growth",
    short: "Growth",
    icon: Wheat,
    color: "text-emerald-300",
    bg: "bg-emerald-400/15 border-emerald-400/25",
  },

  irrigation: {
    label: "Irrigation",
    short: "Irrigation",
    icon: Droplets,
    color: "text-cyan-300",
    bg: "bg-cyan-400/15 border-cyan-400/25",
  },

  fertilizer: {
    label: "Fertilization",
    short: "Fertilizer",
    icon: Sparkles,
    color: "text-violet-300",
    bg: "bg-violet-400/15 border-violet-400/25",
  },

  flowering: {
    label: "Flowering",
    short: "Flowering",
    icon: Sun,
    color: "text-yellow-300",
    bg: "bg-yellow-400/15 border-yellow-400/25",
  },

  health: {
    label: "Crop Health",
    short: "Health Check",
    icon: CheckCircle2,
    color: "text-blue-300",
    bg: "bg-blue-400/15 border-blue-400/25",
  },

  harvest: {
    label: "Harvest",
    short: "Harvest",
    icon: Wheat,
    color: "text-orange-300",
    bg: "bg-orange-400/15 border-orange-400/25",
  },
};

const RECOMMENDATION_META: Record<
  RecommendationType,
  {
    title: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    description: string;
  }
> = {
  sowing: {
    title: "Best Sowing Period",
    icon: Sprout,
    color: "text-green-300",
    bg: "border-green-400/15 bg-green-400/[0.05]",
    description:
      "This is the recommended sowing window according to the selected crop calendar.",
  },

  irrigation: {
    title: "Irrigation Period",
    icon: Droplets,
    color: "text-cyan-300",
    bg: "border-cyan-400/15 bg-cyan-400/[0.05]",
    description:
      "Pay attention to soil moisture and provide water according to crop requirements.",
  },

  fertilizer: {
    title: "Fertilizer Stage",
    icon: Sparkles,
    color: "text-violet-300",
    bg: "border-violet-400/15 bg-violet-400/[0.05]",
    description:
      "Nutrient management is especially important during this stage of the crop cycle.",
  },

  health: {
    title: "Crop Health Monitoring",
    icon: ShieldCheck,
    color: "text-blue-300",
    bg: "border-blue-400/15 bg-blue-400/[0.05]",
    description:
      "Monitor the crop for pests, diseases and other health-related issues during this period.",
  },

  harvest: {
    title: "Expected Harvest",
    icon: Wheat,
    color: "text-orange-300",
    bg: "border-orange-400/15 bg-orange-400/[0.05]",
    description:
      "The calendar indicates this period as the expected harvesting stage.",
  },
};

const TODAY = new Date();
const CURRENT_YEAR = TODAY.getFullYear();
const CURRENT_MONTH = TODAY.getMonth();
const CURRENT_DAY = TODAY.getDate();

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getActivitiesForDay(
  crop: Crop,
  month: number,
  day: number
): ActivityType[] {
  const activities = crop.months[month] || [];

  if (activities.length === 0) {
    return [];
  }

  if (day <= 5) {
    return activities.slice(0, 2);
  }

  if (day >= 25) {
    return activities.slice(-2);
  }

  return activities.slice(0, 1);
}

function formatDate(year: number, month: number, day: number) {
  return new Date(year, month, day).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatMonthRange(monthIndexes: number[]) {
  if (monthIndexes.length === 0) {
    return "Not specified";
  }

  const sorted = [...monthIndexes].sort((a, b) => a - b);

  if (sorted.length === 1) {
    return MONTHS[sorted[0]];
  }

  if (sorted.length === 2) {
    return `${MONTHS[sorted[0]]} - ${MONTHS[sorted[1]]}`;
  }

  const isContinuous = sorted.every(
    (month, index) =>
      index === 0 || month === sorted[index - 1] + 1
  );

  if (isContinuous) {
    return `${MONTHS[sorted[0]]} - ${
      MONTHS[sorted[sorted.length - 1]]
    }`;
  }

  return sorted.map((month) => SHORT_MONTHS[month]).join(", ");
}

function getRecommendationMonths(
  crop: Crop,
  activity: ActivityType
) {
  return Object.entries(crop.months)
    .filter(([, activities]) =>
      activities?.includes(activity)
    )
    .map(([month]) => Number(month))
    .sort((a, b) => a - b);
}

function getRecommendationText(
  crop: Crop,
  recommendation: RecommendationType
) {
  const activityMap: Record<
    RecommendationType,
    ActivityType
  > = {
    sowing: "sowing",
    irrigation: "irrigation",
    fertilizer: "fertilizer",
    health: "health",
    harvest: "harvest",
  };

  const months = getRecommendationMonths(
    crop,
    activityMap[recommendation]
  );

  return formatMonthRange(months);
}

export default function CropCalendarPage() {
  const [selectedCrop, setSelectedCrop] = useState(
    CROP_CALENDAR_DATA[0]?.name || "Rice"
  );

  const [searchQuery, setSearchQuery] = useState("");

  const [calendarYear, setCalendarYear] =
    useState(CURRENT_YEAR);

  const [calendarMonth, setCalendarMonth] =
    useState(CURRENT_MONTH);

  const [selectedDay, setSelectedDay] =
    useState(CURRENT_DAY);

  const currentCrop =
    CROP_CALENDAR_DATA.find(
      (crop) => crop.name === selectedCrop
    ) || CROP_CALENDAR_DATA[0];

  const filteredCrops = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return CROP_CALENDAR_DATA;
    }

    return CROP_CALENDAR_DATA.filter((crop) => {
      const searchableText = [
        crop.name,
        crop.season,
        ...crop.searchTerms,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const daysInMonth = getDaysInMonth(
    calendarYear,
    calendarMonth
  );

  const firstDay = getFirstDay(
    calendarYear,
    calendarMonth
  );

  const calendarCells = useMemo(() => {
    const cells: Array<number | null> = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(day);
    }

    while (cells.length % 7 !== 0) {
      cells.push(null);
    }

    return cells;
  }, [firstDay, daysInMonth]);

  const selectedActivities = getActivitiesForDay(
    currentCrop,
    calendarMonth,
    selectedDay
  );

  const activeMonths = Object.keys(currentCrop.months)
    .map(Number)
    .sort((a, b) => a - b);

  const currentMonthActivities =
    currentCrop.months[calendarMonth] || [];

  const currentStage =
    currentMonthActivities.length > 0
      ? currentMonthActivities[0]
      : "health";

  const currentStageMeta =
    ACTIVITY_META[currentStage];

  const recommendationTypes: RecommendationType[] = [
    "sowing",
    "irrigation",
    "fertilizer",
    "health",
    "harvest",
  ];

  const changeMonth = (direction: number) => {
    setSelectedDay(1);

    if (direction < 0) {
      if (calendarMonth === 0) {
        setCalendarMonth(11);
        setCalendarYear((year) => year - 1);
      } else {
        setCalendarMonth((month) => month - 1);
      }
    } else {
      if (calendarMonth === 11) {
        setCalendarMonth(0);
        setCalendarYear((year) => year + 1);
      } else {
        setCalendarMonth((month) => month + 1);
      }
    }
  };

  const goToToday = () => {
    setCalendarYear(CURRENT_YEAR);
    setCalendarMonth(CURRENT_MONTH);
    setSelectedDay(CURRENT_DAY);
  };

  const handleCropChange = (cropName: string) => {
    setSelectedCrop(cropName);

    const crop = CROP_CALENDAR_DATA.find(
      (item) => item.name === cropName
    );

    if (!crop) {
      return;
    }

    const cropMonths = Object.keys(crop.months)
      .map(Number)
      .sort((a, b) => a - b);

    if (
      cropMonths.length > 0 &&
      !cropMonths.includes(calendarMonth)
    ) {
      setCalendarMonth(cropMonths[0]);
      setSelectedDay(1);
    }
  };

  return (
    <DashboardLayout>
      <main className="min-h-screen w-full px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1550px]">

          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="relative mb-8 overflow-hidden rounded-[32px] border border-white/[0.06] bg-transparent">

            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-green-500/[0.06] blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-emerald-400/[0.035] blur-[110px]" />

            <div className="relative p-6 sm:p-8 lg:p-10">

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-3xl">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/[0.05]">
                      <CalendarDays className="h-5 w-5 text-green-300" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-green-300/80">
                      AgriSense AI • Smart Farming
                    </span>

                  </div>

                  <h1 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-[56px]">
                    Crop Calendar
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    Plan your crop season month by month. Track preparation,
                    sowing, growth, irrigation, fertilization, flowering,
                    health and harvest activities.
                  </p>

                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/[0.06] px-4 py-3">

                  <MapPin className="h-4 w-4 text-green-300" />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Planning Region
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/80">
                      Maharashtra, India
                    </p>
                  </div>

                </div>

              </div>

              {/* HERO SUMMARY */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-white/[0.07] bg-black/[0.035] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Selected Crop
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    {currentCrop.name}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/[0.035] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Growing Season
                  </p>

                  <p className="mt-2 text-lg font-bold text-green-300">
                    {currentCrop.season}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/[0.035] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Crop Duration
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    {currentCrop.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-green-400/[0.12] bg-green-400/[0.025] p-4">

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Current Calendar Stage
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <currentStageMeta.icon
                      className={`h-5 w-5 ${currentStageMeta.color}`}
                    />

                    <p className="text-base font-bold text-white">
                      {currentStageMeta.label}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =====================================================
              CROP SELECTION
          ===================================================== */}

          <section className="mb-8">

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Step 01
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Choose Your Crop
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  Search or select a crop to view its complete seasonal calendar.
                </p>

              </div>

              {/* SEARCH */}

              <div className="relative w-full max-w-xl">

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-green-400/[0.04] blur-xl" />

                <div className="relative flex items-center rounded-2xl border border-white/[0.14] bg-white/[0.055] backdrop-blur-xl transition-all focus-within:border-green-400/40 focus-within:bg-white/[0.075] focus-within:shadow-[0_0_30px_rgba(34,197,94,0.08)]">

                  <Search className="ml-4 h-5 w-5 shrink-0 text-green-300" />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    placeholder="Search any crop... e.g. Rice, Wheat, Tomato"
                    className="h-14 w-full bg-transparent px-4 text-sm font-medium text-white outline-none placeholder:text-white/40"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg text-white/35 transition hover:bg-white/[0.08] hover:text-white"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}

                </div>
              </div>

            </div>

            {/* =====================================================
                REALISTIC FULL IMAGE CROP CARDS
            ===================================================== */}

            <div className="relative">

              <div className="flex gap-4 overflow-x-auto pb-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

                {filteredCrops.length > 0 ? (

                  filteredCrops.map((crop) => {

                    const active =
                      crop.name === selectedCrop;

                    const cropImage =
                      getCropImage(crop);

                    return (

                      <button
                        key={crop.name}
                        type="button"
                        onClick={() =>
                          handleCropChange(crop.name)
                        }
                        className={`
                          group relative h-[235px] w-[175px] min-w-[175px]
                          shrink-0 overflow-hidden rounded-[22px]
                          border text-left
                          transition-all duration-300
                          hover:-translate-y-1
                          ${
                            active
                              ? "border-green-400/70 shadow-[0_18px_45px_rgba(34,197,94,0.20)]"
                              : "border-white/[0.12] hover:border-green-300/40"
                          }
                        `}
                      >

                        {/* =================================================
                            FALLBACK BACKGROUND
                        ================================================= */}

                        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-slate-900 to-black" />

                        {/* =================================================
                            FULL CROP IMAGE
                        ================================================= */}

                        <img
                          src={cropImage}
                          alt={`${crop.name} crop`}
                          loading="lazy"
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                          "
                          onError={(event) => {
                            const image =
                              event.currentTarget;

                            image.style.display = "none";
                          }}
                        />

                        {/* =================================================
                            IMAGE COLOR OVERLAY
                        ================================================= */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black
                            via-black/45
                            to-black/10
                          "
                        />

                        {/* TOP LIGHT */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            top-0
                            h-24
                            bg-gradient-to-b
                            from-white/[0.14]
                            to-transparent
                          "
                        />

                        {/* SELECTED INDICATOR */}

                        {active && (
                          <div
                            className="
                              absolute
                              right-3
                              top-3
                              z-10
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-green-300/40
                              bg-green-400/20
                              shadow-[0_0_20px_rgba(34,197,94,0.25)]
                              backdrop-blur-md
                            "
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-300" />
                          </div>
                        )}

                        {/* CROP INFORMATION */}

                        <div
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            z-10
                            p-4
                          "
                        >

                          <div className="mb-2 flex items-center gap-2">

                            <div
                              className="
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/10
                                bg-black/40
                                backdrop-blur-md
                              "
                            >
                              <Wheat className="h-3.5 w-3.5 text-green-300" />
                            </div>

                            <span
                              className="
                                max-w-[100px]
                                truncate
                                rounded-full
                                border
                                border-green-300/20
                                bg-green-400/10
                                px-2
                                py-1
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-green-300
                                backdrop-blur-md
                              "
                            >
                              {crop.season}
                            </span>

                          </div>

                          <h3
                            className="
                              text-lg
                              font-black
                              tracking-tight
                              text-white
                              drop-shadow-lg
                            "
                          >
                            {crop.name}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              font-semibold
                              text-white/65
                            "
                          >
                            {crop.duration}
                          </p>

                        </div>

                        {/* ACTIVE BORDER GLOW */}

                        {active && (
                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-[22px]
                              ring-1
                              ring-inset
                              ring-green-400/30
                            "
                          />
                        )}

                      </button>
                    );

                  })

                ) : (

                  <div
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-8
                      text-center
                    "
                  >

                    <Search className="mx-auto h-6 w-6 text-white/30" />

                    <p className="mt-3 font-semibold text-white/80">
                      No crop found
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Try another crop name or search term.
                    </p>

                  </div>

                )}

              </div>

            </div>

          </section>

          {/* =====================================================
              STEP 02 — SMART RECOMMENDATIONS
          ===================================================== */}

          <section className="relative mb-8 overflow-hidden rounded-[32px] border border-green-400/[0.12] bg-green-400/[0.025] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">

            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-400/[0.06] blur-[100px]" />

            <div className="relative p-6 sm:p-8">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                    Step 02 • Smart Recommendations
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Smart Farming Recommendations
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                    AgriSense AI converts the selected crop's
                    calendar data into simple farming recommendations.
                  </p>

                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.05] px-4 py-2">

                  <Sparkles className="h-4 w-4 text-green-300" />

                  <span className="text-xs font-bold text-green-300">
                    {currentCrop.name} • AI Guidance
                  </span>

                </div>

              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                {recommendationTypes.map(
                  (recommendation) => {

                    const meta =
                      RECOMMENDATION_META[
                        recommendation
                      ];

                    const Icon = meta.icon;

                    const period =
                      getRecommendationText(
                        currentCrop,
                        recommendation
                      );

                    return (

                      <div
                        key={recommendation}
                        className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${meta.bg}`}
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.08]">

                            <Icon
                              className={`h-5 w-5 ${meta.color}`}
                            />

                          </div>

                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider ${meta.color}`}
                          >
                            AI
                          </span>

                        </div>

                        <p
                          className={`mt-4 text-xs font-bold uppercase tracking-wide ${meta.color}`}
                        >
                          {meta.title}
                        </p>

                        <p className="mt-2 text-base font-black text-white">
                          {period}
                        </p>

                        <p className="mt-3 text-[11px] leading-5 text-white/45">
                          {meta.description}
                        </p>

                      </div>

                    );
                  }
                )}

              </div>

              {/* AI SUMMARY */}

              <div className="mt-5 rounded-2xl border border-white/[0.07] bg-black/[0.08] p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/[0.07]">

                    <Sparkles className="h-4 w-4 text-green-300" />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-white">
                      AI Planning Summary
                    </p>

                    <p className="mt-2 text-xs leading-6 text-white/50">

                      For{" "}

                      <span className="font-bold text-green-300">
                        {currentCrop.name}
                      </span>

                      , the calendar indicates{" "}

                      <span className="font-semibold text-white/70">
                        {currentCrop.season}
                      </span>{" "}

                      season cultivation with an expected
                      crop duration of{" "}

                      <span className="font-semibold text-white/70">
                        {currentCrop.duration}
                      </span>
                      . Use the activity periods above to
                      plan sowing, water management, nutrient
                      management, health monitoring and harvest.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              STEP 03 — SEASON TIMELINE
          ===================================================== */}

          <section className="mb-8 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">

            <div className="border-b border-white/[0.07] p-6 sm:p-8">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                    Step 03 • Yearly Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    {currentCrop.name} Season Timeline
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                    Follow each farming activity across the year. Active
                    months contain a clear activity label.
                  </p>

                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.05] px-4 py-2">

                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  <span className="text-xs font-bold text-green-300">
                    {currentCrop.season} Season
                  </span>

                </div>

              </div>

            </div>

            <div className="p-5 sm:p-7">

              {/* DESKTOP TIMELINE */}

              <div className="hidden overflow-x-auto md:block">

                <div className="min-w-[1000px]">

                  <div className="grid grid-cols-[180px_repeat(12,minmax(65px,1fr))] gap-1">

                    <div className="flex items-end pb-3">

                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                        Activity
                      </span>

                    </div>

                    {SHORT_MONTHS.map(
                      (month, index) => {

                        const active =
                          activeMonths.includes(
                            index
                          );

                        return (

                          <button
                            key={month}
                            type="button"
                            onClick={() => {
                              setCalendarMonth(index);
                              setSelectedDay(1);
                            }}
                            className={
                              "rounded-xl px-1 py-3 text-center text-xs font-bold transition " +
                              (
                                active
                                  ? "bg-green-400/[0.07] text-green-300"
                                  : "text-white/40 hover:bg-white/[0.03] hover:text-white/70"
                              )
                            }
                          >
                            {month}
                          </button>

                        );
                      }
                    )}

                    {(Object.keys(
                      ACTIVITY_META
                    ) as ActivityType[]).map(
                      (activityType) => {

                        const meta =
                          ACTIVITY_META[
                            activityType
                          ];

                        const Icon = meta.icon;

                        return (

                          <div
                            key={activityType}
                            className="contents"
                          >

                            <div className="flex items-center gap-2 border-t border-white/[0.05] px-2 py-4">

                              <Icon
                                className={`h-4 w-4 ${meta.color}`}
                              />

                              <span className="text-xs font-semibold text-white/90">
                                {meta.label}
                              </span>

                            </div>

                            {MONTHS.map(
                              (_, monthIndex) => {

                                const active =
                                  currentCrop
                                    .months[
                                    monthIndex
                                  ]?.includes(
                                    activityType
                                  ) ?? false;

                                return (

                                  <button
                                    key={`${activityType}-${monthIndex}`}
                                    type="button"
                                    disabled={!active}
                                    onClick={() => {
                                      if (active) {
                                        setCalendarMonth(
                                          monthIndex
                                        );
                                        setSelectedDay(
                                          1
                                        );
                                      }
                                    }}
                                    className={
                                      "m-1 min-h-[48px] rounded-xl border px-1 transition " +
                                      (
                                        active
                                          ? `${meta.bg} ${meta.color} hover:scale-[1.02]`
                                          : "border-white/[0.04] bg-white/[0.012]"
                                      )
                                    }
                                    aria-label={`${meta.label} - ${MONTHS[monthIndex]}`}
                                  >

                                    {active && (
                                      <span className="text-[9px] font-bold">
                                        {meta.short}
                                      </span>
                                    )}

                                  </button>

                                );
                              }
                            )}

                          </div>

                        );
                      }
                    )}

                  </div>

                </div>

              </div>

              {/* MOBILE TIMELINE */}

              <div className="space-y-3 md:hidden">

                {MONTHS.map(
                  (month, monthIndex) => {

                    const activities =
                      currentCrop.months[
                        monthIndex
                      ] || [];

                    if (
                      activities.length === 0
                    ) {
                      return null;
                    }

                    return (

                      <button
                        key={month}
                        type="button"
                        onClick={() => {
                          setCalendarMonth(
                            monthIndex
                          );
                          setSelectedDay(1);
                        }}
                        className="w-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-left transition hover:border-green-400/20"
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <p className="text-sm font-bold text-white">
                              {month}
                            </p>

                            <p className="mt-1 text-[10px] text-white/45">
                              Farming activities
                            </p>

                          </div>

                          <ChevronRight className="h-4 w-4 text-white/30" />

                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">

                          {activities.map(
                            (activity) => {

                              const meta =
                                ACTIVITY_META[
                                  activity
                                ];

                              const Icon =
                                meta.icon;

                              return (

                                <span
                                  key={activity}
                                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-bold ${meta.bg} ${meta.color}`}
                                >

                                  <Icon className="h-3 w-3" />

                                  {meta.short}

                                </span>

                              );
                            }
                          )}

                        </div>

                      </button>

                    );
                  }
                )}

              </div>

              {/* LEGEND */}

              <div className="mt-7 border-t border-white/[0.07] pt-5">

                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Activity Guide
                </p>

                <div className="flex flex-wrap gap-2">

                  {(Object.keys(
                    ACTIVITY_META
                  ) as ActivityType[]).map(
                    (activityType) => {

                      const meta =
                        ACTIVITY_META[
                          activityType
                        ];

                      const Icon = meta.icon;

                      return (

                        <div
                          key={activityType}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[10px] font-bold ${meta.bg} ${meta.color}`}
                        >

                          <Icon className="h-3.5 w-3.5" />

                          {meta.label}

                        </div>

                      );
                    }
                  )}

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              STEP 04 — MONTHLY CALENDAR
          ===================================================== */}

          <section className="mb-8 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">

            <div className="border-b border-white/[0.07] p-6 sm:p-8">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                    Step 04 • Monthly Planner
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    {MONTHS[calendarMonth]}{" "}
                    {calendarYear}
                  </h2>

                  <p className="mt-2 text-sm text-white/70">
                    Select any date to see the recommended activity.
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={goToToday}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-bold text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    Today
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      changeMonth(-1)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      changeMonth(1)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                </div>

              </div>

            </div>

            <div className="p-3 sm:p-6">

              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">

                {WEEK_DAYS.map((day) => (

                  <div
                    key={day}
                    className="py-2 text-center text-[9px] font-bold uppercase tracking-wider text-white/85 sm:text-[10px]"
                  >
                    {day}
                  </div>

                ))}

                {calendarCells.map(
                  (day, index) => {

                    if (day === null) {

                      return (
                        <div
                          key={`empty-${index}`}
                          className="min-h-[80px] rounded-2xl sm:min-h-[105px]"
                        />
                      );

                    }

                    const activities =
                      getActivitiesForDay(
                        currentCrop,
                        calendarMonth,
                        day
                      );

                    const selected =
                      day === selectedDay;

                    const today =
                      calendarYear ===
                        CURRENT_YEAR &&
                      calendarMonth ===
                        CURRENT_MONTH &&
                      day === CURRENT_DAY;

                    return (

                      <button
                        key={day}
                        type="button"
                        onClick={() =>
                          setSelectedDay(day)
                        }
                        className={
                          "group min-h-[80px] rounded-2xl border p-2 text-left transition-all sm:min-h-[105px] sm:p-3 " +
                          (
                            selected
                              ? "border-green-400/30 bg-green-400/[0.08] shadow-[0_15px_35px_rgba(34,197,94,0.07)]"
                              : "border-white/[0.07] bg-white/[0.018] hover:border-white/[0.14] hover:bg-white/[0.035]"
                          )
                        }
                      >

                        <div className="flex items-center justify-between">

                          <span
                            className={
                              "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold " +
                              (
                                today
                                  ? "bg-green-400 text-slate-950"
                                  : selected
                                    ? "bg-green-400/15 text-green-300"
                                    : "text-white/65"
                              )
                            }
                          >
                            {day}
                          </span>

                          {today && (
                            <span className="hidden text-[8px] font-bold uppercase tracking-wider text-green-300 sm:block">
                              Today
                            </span>
                          )}

                        </div>

                        <div className="mt-3 space-y-1">

                          {activities
                            .slice(0, 2)
                            .map((activity) => {

                              const meta =
                                ACTIVITY_META[
                                  activity
                                ];

                              const Icon =
                                meta.icon;

                              return (

                                <div
                                  key={activity}
                                  className={`flex items-center gap-1 rounded-md border px-1.5 py-1 text-[7px] font-bold sm:text-[9px] ${meta.bg} ${meta.color}`}
                                >

                                  <Icon className="h-2.5 w-2.5 shrink-0" />

                                  <span className="truncate">
                                    {meta.short}
                                  </span>

                                </div>

                              );

                            })}

                        </div>

                      </button>

                    );

                  }
                )}

              </div>

            </div>

          </section>

          {/* =====================================================
              SELECTED DATE + AI INSIGHT
          ===================================================== */}

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">

            {/* SELECTED DATE */}

            <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/10 bg-green-400/[0.06]">

                  <CalendarDays className="h-6 w-6 text-green-300" />

                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                    Selected Date
                  </p>

                  <h2 className="mt-1 text-lg font-black text-white sm:text-xl">

                    {formatDate(
                      calendarYear,
                      calendarMonth,
                      selectedDay
                    )}

                  </h2>

                </div>

              </div>

              <div className="mt-7">

                {selectedActivities.length > 0 ? (

                  <div className="space-y-3">

                    {selectedActivities.map(
                      (activity) => {

                        const meta =
                          ACTIVITY_META[
                            activity
                          ];

                        const Icon =
                          meta.icon;

                        return (

                          <div
                            key={activity}
                            className={`rounded-2xl border p-4 ${meta.bg}`}
                          >

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/[0.08]">

                                <Icon
                                  className={`h-5 w-5 ${meta.color}`}
                                />

                              </div>

                              <div>

                                <p
                                  className={`text-sm font-bold ${meta.color}`}
                                >
                                  {meta.label}
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-white/45">
                                  Recommended farming activity for this crop stage.
                                </p>

                              </div>

                            </div>

                          </div>

                        );
                      }
                    )}

                  </div>

                ) : (

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6">

                    <p className="font-semibold text-white">
                      No scheduled activity
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      No predefined activity is scheduled for this date.
                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* AI INSIGHT */}

            <div className="relative overflow-hidden rounded-[32px] border border-green-400/[0.12] bg-green-400/[0.035] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.16)] sm:p-8">

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-400/[0.07] blur-[100px]" />

              <div className="relative">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-green-400/10 bg-green-400/[0.07]">

                    <Sparkles className="h-6 w-6 text-green-300" />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-300">
                      AgriSense AI Insight
                    </p>

                    <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      Smart guidance for{" "}
                      {currentCrop.name}
                    </h2>

                  </div>

                </div>

                <p className="mt-6 text-sm leading-7 text-white/55">
                  {currentCrop.insight}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl border border-white/[0.07] bg-black/[0.08] p-4">

                    <Droplets className="h-5 w-5 text-cyan-300" />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-white/35">
                      Water
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/75">
                      Monitor moisture
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-black/[0.08] p-4">

                    <Leaf className="h-5 w-5 text-green-300" />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-white/35">
                      Crop Health
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/75">
                      Inspect crop
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-black/[0.08] p-4">

                    <CloudRain className="h-5 w-5 text-blue-300" />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-white/35">
                      Weather
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/75">
                      Watch conditions
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              FOOTER STATUS
          ===================================================== */}

          <section className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/[0.06]">

                <CalendarDays className="h-5 w-5 text-green-300" />

              </div>

              <div>

                <p className="text-sm font-bold text-white">
                  {currentCrop.name} calendar ready
                </p>

                <p className="text-xs text-white/40">
                  {currentCrop.season} •{" "}
                  {currentCrop.duration} • Maharashtra
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-green-300">

              <CheckCircle2 className="h-4 w-4" />

              Smart seasonal planning enabled

            </div>

          </section>

        </div>
      </main>
    </DashboardLayout>
  );
}