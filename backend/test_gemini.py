from app.services.gemini_service import generate_response

response = generate_response("What are the symptoms of dengue fever?")

print("\nGemini Response:\n")
print(response)