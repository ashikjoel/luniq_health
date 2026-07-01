import { useState } from "react";
import { sendChatMessage } from "../services/chatService";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text:
        "👋 Welcome to Hospital AI Assistant.\n\nI can help answer healthcare-related questions, explain medical reports, and assist with medical image analysis.\n\nHow can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    // Add user's message immediately
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      // Call FastAPI
      const aiResponse = await sendChatMessage(text);

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiResponse,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: "❌ Unable to connect to the Hospital AI server.",
      };

      setMessages((prev) => [...prev, errorMessage]);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
}