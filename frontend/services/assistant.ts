const API = "http://127.0.0.1:8000";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function askAssistant(
  question: string,
  history: ChatMessage[] = []
) {
  const response = await fetch(`${API}/assistant/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      history,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Assistant request failed (${response.status})`
    );
  }

  return response.json();
}