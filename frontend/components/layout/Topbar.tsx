"use client";

import {
  Search,
  Globe,
  Bell,
  Sun,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import LanguageDropdown from "../topbar/LanguageDropdown";
import NotificationDropdown from "../topbar/NotificationDropdown";
import ProfileDropdown from "../topbar/ProfileDropdown";
import SettingsDropdown from "../topbar/SettingsDropdown";

export default function Topbar() {

  const [languageOpen, setLanguageOpen] = useState(false);

  const [notificationOpen, setNotificationOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const topbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        topbarRef.current &&
        !topbarRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
        setNotificationOpen(false);
        setProfileOpen(false);
        setSettingsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className="
      fixed
      top-6
      left-[330px]
      right-8
      z-50
    "
    >
      <div
  ref={topbarRef}
  className="
  h-20
  rounded-[28px]
  border border-white/15
  bg-white/10
  backdrop-blur-3xl
  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  px-8
  flex
  items-center
  justify-between
"
>
        {/* LEFT */}

        <div className="relative w-[420px]">

          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70"
          />

          <input
            type="text"
            placeholder="Search crops, weather, diseases..."
            className="
            w-full
            h-14
            rounded-2xl
            border
            border-white/10
            bg-white/10
            pl-14
            pr-6
            text-white
            placeholder:text-white/60
            outline-none
            backdrop-blur-xl
            transition-all
            duration-300
            focus:w-[500px]
            focus:border-green-400/60
            focus:bg-white/15
            focus:shadow-[0_0_35px_rgba(34,197,94,.25)]
          "
          />
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          <div className="relative">

  <button
    onClick={() => setLanguageOpen(!languageOpen)}
    className="
      flex
      items-center
      gap-3
      h-14
      px-6
      rounded-2xl
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      hover:bg-white/15
      hover:border-green-400/40
      transition-all
      duration-300
    "
  >
    <Globe size={21} />

    <span className="text-white">
      English
    </span>

    <ChevronDown
  size={18}
  className={`transition-transform duration-300 ${
    languageOpen ? "rotate-180" : ""
  }`}
/>
  </button>

  <LanguageDropdown open={languageOpen} />

</div>

          <div className="relative">

  <button
    onClick={() => setNotificationOpen(!notificationOpen)}
    className="
      relative
      w-14
      h-14
      rounded-2xl
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <Bell
  size={21}
  className={`mx-auto text-white transition-transform duration-300 ${
    notificationOpen ? "scale-110" : ""
  }`}
/>

    <span
      className="
        absolute
        top-3
        right-3
        h-2.5
        w-2.5
        rounded-full
        bg-green-400
        animate-pulse
      "
    />
  </button>

  <NotificationDropdown open={notificationOpen} />

</div>
          {/* Theme */}

<button
  aria-label="Toggle Theme"
  onClick={() => setDarkMode(!darkMode)}
  className="
    w-14
    h-14
    rounded-2xl
    border
    border-white/10
    bg-white/10
    backdrop-blur-xl
    hover:bg-white/15
    transition-all
    duration-300
  "
>
  <Sun
    size={21}
    className={`mx-auto text-white transition-transform duration-500 ${
      darkMode ? "rotate-0" : "rotate-180"
    }`}
  />
</button>
          {/* Settings */}

<div className="relative">

  <button
    onClick={() => setSettingsOpen(!settingsOpen)}
    className="
      w-14
      h-14
      rounded-2xl
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <Settings
  size={21}
  className={`mx-auto text-white transition-transform duration-300 ${
    settingsOpen ? "rotate-90" : ""
  }`}
/>
  </button>

  <SettingsDropdown
    open={settingsOpen}
  />

</div>
         {/* Profile */}

<div className="relative">

  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="
      flex
      items-center
      gap-4
      h-16
      px-4
      rounded-2xl
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <img
      src="https://i.pravatar.cc/100?img=12"
      alt="Profile"
      className="
        h-11
        w-11
        rounded-full
        border
        border-green-400
      "
    />

    <div className="text-left leading-tight">

      <h4 className="text-white font-semibold">
        Farmer
      </h4>

      <p className="text-xs text-white/60">
        Smart Farming
      </p>

    </div>

    <ChevronDown
  size={18}
  className={`text-white/70 transition-transform duration-300 ${
    profileOpen ? "rotate-180" : ""
  }`}
/>

  </button>

  <ProfileDropdown
    open={profileOpen}
  />

</div>
        </div>

      </div>

    </header>
  );
}