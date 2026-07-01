from fastapi import FastAPI
from app.api.routes.chat import router as chat_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hospital AI Assistant API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "application": "Hospital AI Assistant",
        "status": "Running"
    }


app.include_router(
    chat_router,
    prefix="/api/v1",
    tags=["Chat"]
)