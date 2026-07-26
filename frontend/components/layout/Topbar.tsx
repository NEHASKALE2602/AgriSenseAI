"use client";

import { motion } from "framer-motion";

import {
  Bell,
  Globe,
  Moon,
  User,
  Sun,
} from "lucide-react";

export default function Topbar() {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (

    <motion.header

      initial={{ opacity: 0, y: -30 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      className="
        fixed
        top-7
        left-[260px]
        right-8
        z-40

        flex
        items-center
        justify-between
      "
    >

      {/* LEFT */}

      <div
        className="
          flex
          items-center
          gap-8
        "
      >

        {/* Greeting */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <span className="text-2xl">
            👋
          </span>

          <h2
            className="
              text-white
              text-[18px]
              font-semibold
              drop-shadow-lg
            "
          >
            Good Morning,
            <span className="text-green-400 ml-2">
              Neha
            </span>
          </h2>

        </div>

        {/* Date */}

        <p
          className="
            text-white/65
            text-sm
          "
        >
          {today}
        </p>

        {/* Weather */}

        <div
          className="
            flex
            items-center
            gap-2
            text-white/80
            text-sm
          "
        >

          <Sun
            size={17}
            className="
              text-yellow-300
              animate-pulse
            "
          />

          <span>
            28°C
          </span>

          <span className="text-white/45">
            Pune
          </span>

        </div>

        {/* AI Status */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-green-400
              animate-pulse
              shadow-[0_0_10px_rgba(34,197,94,.8)]
            "
          />

          <span
            className="
              text-green-300
              text-sm
              font-medium
            "
          >
            AI System Online
          </span>

        </div>

      </div>

      {/* RIGHT */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <TopButton>
          <Bell size={18}/>
        </TopButton>

        <TopButton>
          <Globe size={18}/>
        </TopButton>

        <TopButton>
          <Moon size={18}/>
        </TopButton>

        <TopButton>
          <User size={18}/>
        </TopButton>

      </div>

    </motion.header>

  );

}

function TopButton({
  children,
}:{
  children: React.ReactNode;
}){

  return(

    <button

      className="
        h-11
        w-11

        rounded-full

        bg-white/8

        backdrop-blur-xl

        border

        border-white/10

        flex

        items-center

        justify-center

        text-white/85

        transition-all

        duration-300

        hover:scale-110

        hover:border-green-400/50

        hover:text-green-300

        hover:bg-white/12

        hover:shadow-[0_0_20px_rgba(34,197,94,.35)]
      "

    >

      {children}

    </button>

  );

}