"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import Select from "react-select";
import { MapPin, Search } from "lucide-react";
import { useWeather } from "@/context/WeatherContext";

interface DistrictRow {
  state: string;
  district: string;
}

export default function LocationSearch() {
  const {
    selectedState,
    selectedDistrict,
    setSelectedState,
    setSelectedDistrict,
    updateLocation,
  } = useWeather();

  const [rows, setRows] = useState<DistrictRow[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Papa.parse("/data/districts.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        const data = (result.data as any[]).map((row) => ({
          state: row["State Name (In English)"],
          district: row["District Name(In English)"],
        }));

        setRows(data);
      },
    });
  }, []);

  const stateOptions = useMemo(() => {
    return [...new Set(rows.map((r) => r.state))]
      .sort()
      .map((state) => ({
        value: state,
        label: state,
      }));
  }, [rows]);

  const districtOptions = useMemo(() => {
    return rows
      .filter((r) => r.state === selectedState)
      .map((r) => ({
        value: r.district,
        label: r.district,
      }));
  }, [rows, selectedState]);

  async function handleSearch() {
    setLoading(true);

    updateLocation();

    await new Promise((r) => setTimeout(r, 500));

    setLoading(false);
  }

  const customStyles = {
    control: (base: any) => ({
      ...base,
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: 18,
      minHeight: 58,
      color: "white",
      boxShadow: "none",
      cursor: "pointer",
    }),

    menu: (base: any) => ({
      ...base,
      background: "#0F172A",
      borderRadius: 16,
      zIndex: 9999,
    }),

    option: (base: any, state: any) => ({
      ...base,
      background: state.isFocused ? "#1E293B" : "#0F172A",
      color: "white",
      cursor: "pointer",
    }),

    singleValue: (base: any) => ({
      ...base,
      color: "white",
    }),

    input: (base: any) => ({
      ...base,
      color: "white",
    }),

    placeholder: (base: any) => ({
      ...base,
      color: "#94A3B8",
    }),
  };

  return (
    <div className="w-full">

      <div
        className="
          flex
          flex-col
          justify-between
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-3xl
          p-8
          min-h-[430px]
        "
      >

        <div className="flex items-center gap-3 mb-6">

          <MapPin className="text-green-400" size={22} />

          <div>

            <h3 className="text-white font-bold text-lg">
              Select Location
            </h3>

            <p className="text-white/50 text-sm">
              Choose your farming location
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <Select
            styles={customStyles}
            options={stateOptions}
            value={
              selectedState
                ? {
                  value: selectedState,
                  label: selectedState,
                }
                : null
            }
            onChange={(value) => {
              setSelectedState(value?.value || "");
              setSelectedDistrict("");
            }}
            placeholder="Select State"
          />

          <Select
            styles={customStyles}
            options={districtOptions}
            isDisabled={!selectedState}
            value={
              selectedDistrict
                ? {
                  value: selectedDistrict,
                  label: selectedDistrict,
                }
                : null
            }
            onChange={(value) => {
              setSelectedDistrict(value?.value || "");
            }}
            placeholder="Select District"
          />

        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="
          mt-6
          w-full
          h-14
          rounded-2xl
          bg-gradient-to-r
          from-green-500
          via-emerald-500
          to-cyan-500
          text-white
          font-semibold
          flex
          items-center
          justify-center
          gap-3
          hover:scale-[1.02]
          transition-all
          duration-300
          disabled:opacity-60
        "
        >
          <Search size={20} />

          {loading ? "Updating Weather..." : "Get Weather"}
        </button>

      </div>

    </div>
  );
}