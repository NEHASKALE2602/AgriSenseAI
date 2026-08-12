"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getWeather,
  getForecast,
  getWeatherAdvisor,
  getWeatherAlerts,
} from "@/services/weather";

type WeatherContextType = {
  selectedState: string;
  selectedDistrict: string;
  city: string;

  weather: any;
  forecast: any;
  advisor: any;
  alerts: any;

  loading: boolean;

  setSelectedState: (v: string) => void;
  setSelectedDistrict: (v: string) => void;

  updateLocation: () => Promise<void>;
};

const WeatherContext =
  createContext<WeatherContextType | null>(null);

export function WeatherProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedState, setSelectedState] =
    useState("Maharashtra");

  const [selectedDistrict, setSelectedDistrict] =
    useState("Pune");

  const [city, setCity] =
    useState("Pune");

  const [weather, setWeather] =
    useState<any>(null);

  const [forecast, setForecast] =
    useState<any>(null);

  const [advisor, setAdvisor] =
    useState<any>(null);

  const [alerts, setAlerts] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  async function load(cityName: string) {
    try {
      setLoading(true);

      const [
        weatherData,
        forecastData,
        advisorData,
        alertsData,
      ] = await Promise.all([
        getWeather(cityName),
        getForecast(cityName),
        getWeatherAdvisor(cityName),
        getWeatherAlerts(cityName),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
      setAdvisor(advisorData);
      setAlerts(alertsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function updateLocation() {
    setCity(selectedDistrict);
    await load(selectedDistrict);
  }

  useEffect(() => {
    load(city);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        selectedState,
        selectedDistrict,
        city,

        weather,
        forecast,
        advisor,
        alerts,

        loading,

        setSelectedState,
        setSelectedDistrict,

        updateLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(
      "useWeather must be used inside WeatherProvider"
    );
  }

  return context;
}