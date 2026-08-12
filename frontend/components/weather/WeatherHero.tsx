"use client";

import { useWeather } from "@/context/WeatherContext";
import LocationSearch from "@/components/LocationSearch";

import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";

export default function WeatherHero() {
  const {
    weather,
    loading,
  } = useWeather();

  if (!weather) {
    return (
      <section className="w-full h-full min-h-[520px] rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-2xl p-10">
        <div className="animate-pulse space-y-5">
          <div className="h-10 w-72 rounded bg-white/10"></div>
          <div className="h-20 w-40 rounded bg-white/10"></div>
          <div className="h-6 w-56 rounded bg-white/10"></div>
        </div>
      </section>
    );
  }

  let WeatherIcon = Sun;

  switch (weather.condition) {
    case "Clouds":
      WeatherIcon = Cloud;
      break;

    case "Rain":
      WeatherIcon = CloudRain;
      break;

    case "Thunderstorm":
      WeatherIcon = CloudLightning;
      break;

    default:
      WeatherIcon = Sun;
  }

  return (
    <section className="space-y-8">

      <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-stretch">

        <div className="h-full">
          <LocationSearch />
        </div>

        <div
          className="
        relative
        h-full
        min-h-[430px]
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-3xl
        p-8
        "
        >

            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />

            <div className="flex justify-between items-start">

              <div>

                <div className="flex items-center gap-2 text-green-400">

                  <MapPin size={18} />

                  <span className="font-medium">
                    {loading ? "..." : weather.city}
                  </span>

                </div>

                <h2 className="mt-6 text-[90px] leading-none font-black text-white">
                  {loading ? "..." : Math.round(weather.temperature)}°
                </h2>

                <p className="mt-3 text-3xl font-semibold text-white">
                  {loading ? "..." : weather.condition}
                </p>

                <p className="mt-3 text-green-400">
                  Feels like {loading ? "..." : Math.round(weather.feels_like)}°
                </p>

              </div>

              <WeatherIcon
                size={120}
                className="text-yellow-300 drop-shadow-[0_0_35px_rgba(255,220,0,.75)]"
              />

            </div>

            <div className="mt-10 grid grid-cols-4 gap-6">

              <div className="rounded-2xl bg-neutral-900/30 border border-white/10 p-5">

                <Thermometer
                  className="text-red-400 mb-3"
                  size={26}
                />

                <p className="text-white/50 text-sm">
                  Feels Like
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {loading ? "..." : Math.round(weather.feels_like)}°
                </h3>

              </div>

              <div className="rounded-2xl bg-neutral-900/30 border border-white/10 p-5">

                <Droplets
                  className="text-cyan-400 mb-3"
                  size={26}
                />

                <p className="text-white/50 text-sm">
                  Humidity
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {loading ? "..." : weather.humidity}%
                </h3>

              </div>

              <div className="rounded-2xl bg-neutral-900/30 border border-white/10 p-5">

                <Wind
                  className="text-green-400 mb-3"
                  size={26}
                />

                <p className="text-white/50 text-sm">
                  Wind
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {loading ? "..." : weather.wind_speed}
                </h3>

              </div>

              <div className="rounded-2xl bg-neutral-900/30 border border-white/10 p-5">

                <Sun
                  className="text-yellow-300 mb-3"
                  size={26}
                />

                <p className="text-white/50 text-sm">
                  UV Index
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {loading ? "..." : weather.uv_index}
                </h3>

              </div>

            </div>

          </div>
        </div>
    
    </section >
  );
}