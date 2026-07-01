import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text:
        "👋 Welcome to Hospital AI Assistant.\n\nI can help answer healthcare-related questions, explain medical reports, and assist with medical image analysis.\n\nHow can I help you today?",
    },
  ]);

  const sendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
  };

  return {
    messages,
    sendMessage,
  };
}