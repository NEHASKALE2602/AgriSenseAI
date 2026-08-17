import os

from groq import Groq
from dotenv import load_dotenv


# Load environment variables
load_dotenv(
    r"C:\Users\HP\OneDrive\Desktop\AgriSenseAI\backend\.env",
    override=True
)


# Get Groq API key
API_KEY = os.getenv("GROQ_API_KEY")

if not API_KEY:
    raise Exception("GROQ_API_KEY not found")


# Create Groq client
client = Groq(api_key=API_KEY)


def ask_assistant(question: str, history=None):

    if history is None:
        history = []

    messages = [
        {
            "role": "system",
            "content": """
You are AgriSense AI, an intelligent agricultural assistant for farmers.

Your job is to provide clear, practical and easy-to-understand
agricultural guidance.

You can help with:

- crop selection
- soil health
- fertilizer
- irrigation
- crop diseases
- pests
- weather
- rainfall
- farming practices
- harvesting
- crop market prices
- selling decisions
- agricultural government schemes

Important rules:

1. Understand the farmer's previous conversation when answering
   the current question.

2. Maintain conversational context.
   If the farmer says "my crop", "this crop", "it", "that problem",
   etc., use the previous messages to understand what they mean.

3. Give practical advice that a farmer can understand.

4. Do not invent exact market prices or weather data.

5. If current/live data is required, clearly tell the farmer that
   live data should be checked.

6. Do not pretend to have access to live weather, market or
   government data unless it is actually provided.

7. If important information is missing, ask a short follow-up
   question instead of making assumptions.

8. Keep answers organized and useful.

9. For farming recommendations, mention important precautions
   when necessary.
"""
        }
    ]

    # Add previous conversation messages
    for message in history:

        role = message.get("role")
        content = message.get("content")

        if role in ["user", "assistant"] and content:

            messages.append(
                {
                    "role": role,
                    "content": content
                }
            )

    # Add current farmer question
    messages.append(
        {
            "role": "user",
            "content": question
        }
    )

    # Ask Groq AI
    response = client.chat.completions.create(

        # UPDATED MODEL
        model="openai/gpt-oss-20b",

        messages=messages,

        temperature=0.3,
    )

    # Return AI response
    return response.choices[0].message.content.strip()