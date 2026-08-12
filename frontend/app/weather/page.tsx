import DashboardLayout from "@/components/layout/DashboardLayout";
import { WeatherProvider } from "@/context/WeatherContext";

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
      <WeatherProvider>
        <div className="space-y-10">

          <WeatherHeader />

          <WeatherHero />

          {/* <WeatherHighlights /> */}

          <HourlyStrip />

          <WeeklyForecast />

          <AIWeatherAdvisor />

          <WeatherAlerts />

        </div>
      </WeatherProvider>
    </DashboardLayout>
  );
}