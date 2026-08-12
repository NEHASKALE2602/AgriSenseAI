const API_URL = "http://127.0.0.1:8000";

export interface CropInput {
  state: string;
  district: string;

  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;

  temperature: number;
  humidity: number;
  rainfall: number;
}

export async function predictCrop(data: CropInput) {
  const response = await fetch(`${API_URL}/crop/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.detail ||
        result?.error ||
        "Failed to get crop recommendation"
    );
  }

  if (result?.error) {
    throw new Error(result.error);
  }

  return result;
}