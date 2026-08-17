from fastapi import APIRouter
from pydantic import BaseModel

from backend.services.assistant_service import ask_assistant


router = APIRouter(
    prefix="/assistant",
    tags=["AI Assistant"]
)


class ChatMessage(BaseModel):
    role: str
    content: str


class AssistantRequest(BaseModel):
    question: str
    history: list[ChatMessage] = []


@router.post("/ask")
def assistant_question(data: AssistantRequest):

    history = [
        {
            "role": message.role,
            "content": message.content
        }
        for message in data.history
    ]

    answer = ask_assistant(
        data.question,
        history
    )

    return {
        "answer": answer
    }