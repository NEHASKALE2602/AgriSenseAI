const API_URL = "http://127.0.0.1:8000";

export interface MarketRecord {
  commodity: string;
  market: string;
  district: string;
  state: string;
  arrival_date: string;
  min_price: number;
  max_price: number;
  modal_price: number;
}

export async function getMarketPrices(
  crop: string,
  state?: string,
  district?: string
): Promise<MarketRecord[]> {
  const params = new URLSearchParams();

  if (state) {
    params.append("state", state);
  }

  if (district) {
    params.append("district", district);
  }

  const query = params.toString();

  const response = await fetch(
    `${API_URL}/market/${encodeURIComponent(crop)}${query ? `?${query}` : ""}`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.detail ||
        data?.error ||
        `Market request failed (${response.status})`
    );
  }

  if (!Array.isArray(data)) {
    throw new Error("Invalid market data received from backend");
  }

  return data;
}