from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import generate_chat_response

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    ai_response = generate_chat_response(request.message)

    return ChatResponse(
        response=ai_response
    )