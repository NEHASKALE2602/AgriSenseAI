const API_URL = "http://127.0.0.1:8000";

export interface DiseaseResult {
  success?: boolean;
  disease: string;
  confidence: number;
  severity: string;
  description: string;
  treatment: string;
  prevention: string;
}

export async function detectDisease(
  file: File
): Promise<DiseaseResult> {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/disease/predict`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.detail ||
      data?.error ||
      "Disease detection failed"
    );
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
}