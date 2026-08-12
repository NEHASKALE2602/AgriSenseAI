"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import Select from "react-select";
import { MapPin } from "lucide-react";

interface DistrictRow {
  state: string;
  district: string;
}

type FarmLocationSelectorProps = {
  onLocationChange: (location: {
    state: string;
    district: string;
  }) => void;
};

export default function FarmLocationSelector({
  onLocationChange,
}: FarmLocationSelectorProps) {
  const [rows, setRows] = useState<DistrictRow[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    Papa.parse("/data/districts.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        const data = (result.data as any[])
          .map((row) => ({
            state: row["State Name (In English)"],
            district: row["District Name(In English)"],
          }))
          .filter((row) => row.state && row.district);

        setRows(data);
      },
    });
  }, []);

  const stateOptions = useMemo(() => {
    return [...new Set(rows.map((row) => row.state))]
      .sort()
      .map((state) => ({
        value: state,
        label: state,
      }));
  }, [rows]);

  const districtOptions = useMemo(() => {
    return [
      ...new Set(
        rows
          .filter((row) => row.state === selectedState)
          .map((row) => row.district)
      ),
    ]
      .sort()
      .map((district) => ({
        value: district,
        label: district,
      }));
  }, [rows, selectedState]);

  useEffect(() => {
    onLocationChange({
      state: selectedState,
      district: selectedDistrict,
    });
  }, [selectedState, selectedDistrict, onLocationChange]);

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(18px)",
      border: state.isFocused
        ? "1px solid rgba(34,197,94,.5)"
        : "1px solid rgba(255,255,255,.12)",
      borderRadius: 18,
      minHeight: 58,
      color: "white",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid rgba(255,255,255,.25)",
      },
    }),

    menu: (base: any) => ({
      ...base,
      background: "#0F172A",
      borderRadius: 16,
      overflow: "hidden",
      marginTop: 6,
      zIndex: 999999,
    }),

    menuPortal: (base: any) => ({
      ...base,
      zIndex: 999999,
    }),

    menuList: (base: any) => ({
      ...base,
      background: "#0F172A",
      borderRadius: 16,
      padding: 6,
      maxHeight: 300,
    }),

    option: (base: any, state: any) => ({
      ...base,
      background: state.isFocused ? "#1E293B" : "#0F172A",
      color: "white",
      cursor: "pointer",
      borderRadius: 10,
      padding: "12px 14px",
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

    indicatorSeparator: (base: any) => ({
      ...base,
      background: "rgba(255,255,255,.2)",
    }),

    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#94A3B8",
      "&:hover": {
        color: "white",
      },
    }),
  };

  const portalTarget =
    typeof document !== "undefined" ? document.body : null;

  return (
    <div className="relative z-[100] overflow-visible">
      <div className="mb-6 flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-green-500/15
          "
        >
          <MapPin
            size={25}
            className="text-green-400"
          />
        </div>

        <div>
          <h3 className="text-white font-bold text-lg">
            Farm Location
          </h3>

          <p className="text-white/50 text-sm">
            Select the state and district where your farm is located
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
            const state = value?.value || "";

            setSelectedState(state);
            setSelectedDistrict("");
          }}
          placeholder="Select State"
          menuPortalTarget={portalTarget}
          menuPosition="fixed"
          menuPlacement="auto"
          isSearchable
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
          menuPortalTarget={portalTarget}
          menuPosition="fixed"
          menuPlacement="auto"
          isSearchable
        />
      </div>
    </div>
  );
}