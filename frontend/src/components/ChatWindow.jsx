import MessageBubble from "./MessageBubble";

function ChatWindow() {
  const messages = [
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your AI Assistant. How can I help you today?",
    },
    {
      id: 2,
      sender: "user",
      text: "What is Artificial Intelligence?",
    },
    {
      id: 3,
      sender: "ai",
      text: "Artificial Intelligence (AI) is the simulation of human intelligence by machines.",
    },
  ];

  return (
    <div className="flex-1 bg-white rounded-xl shadow-md p-5 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;