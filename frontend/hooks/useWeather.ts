"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  humidity: number;
  rainfall: number;
  weatherCode: number;
};

export default function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain&hourly=rain&timezone=auto`
          );

          if (!response.ok) {
            throw new Error("Weather API request failed.");
          }

          const data = await response.json();

          setWeather({
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            rainfall: data.current.rain,
            weatherCode: data.current.weather_code ?? 0,
          });

          setError("");
        } catch (err) {
          console.error("Weather error:", err);
          setError("Unable to fetch weather data.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Location error:", error);
        setError("Location permission was not granted.");
        setLoading(false);
      }
    );
  }, []);

  return {
    weather,
    loading,
    error,
  };
}