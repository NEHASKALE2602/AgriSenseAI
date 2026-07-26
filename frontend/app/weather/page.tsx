import DashboardLayout from "@/components/layout/DashboardLayout";

import WeatherHeader from "@/components/weather/WeatherHeader";
import WeatherHero from "@/components/weather/WeatherHero";
import WeatherHighlights from "@/components/weather/WeatherHighlights";
import HourlyStrip from "@/components/weather/HourlyStrip";
import WeeklyForecast from "@/components/weather/WeeklyForecast";
import AIWeatherAdvisor from "@/components/weather/AIWeatherAdvisor";
import WeatherAlerts from "@/components/weather/WeatherAlerts";

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <WeatherHeader />

      <WeatherHero />

      <WeatherHighlights />

      <HourlyStrip />

      <WeeklyForecast />

      <AIWeatherAdvisor />

      <WeatherAlerts />
    </DashboardLayout>
  );
}