const API = "http://127.0.0.1:8000";

export type NewsArticle = {
  title: string;
  description: string | null;
  url: string;
  image: string | null;
  source: string | null;
  publishedAt: string | null;
};

export async function getAgricultureNews(): Promise<NewsArticle[]> {
  const response = await fetch(`${API}/news/agriculture`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`News request failed (${response.status})`);
  }

  const data = await response.json();

  if (!data.articles) {
    throw new Error("No news articles received from backend");
  }

  return data.articles;
}