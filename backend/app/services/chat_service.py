from app.services.gemini_service import generate_response


def generate_chat_response(message: str) -> str:
    """
    Generate an AI response using Gemini.
    """

    return generate_response(message)