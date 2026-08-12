const API = "http://127.0.0.1:8000";

async function request(endpoint: string) {
    const response = await fetch(`${API}${endpoint}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
    }

    return response.json();
}

export function getWeather(city: string) {
    return request(`/weather/${city}`);
}

export function getForecast(city: string) {
    return request(`/weather/forecast/${city}`);
}

export function getWeatherAdvisor(city: string) {
    return request(`/weather/advisor/${city}`);
}

export function getWeatherAlerts(city: string) {
    return request(`/weather/alerts/${city}`);
}