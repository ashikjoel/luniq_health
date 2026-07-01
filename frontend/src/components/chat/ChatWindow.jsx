import { useEffect, useRef } from "react";
import Disclaimer from "./Disclaimer";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <Disclaimer />

      <div className="flex-1 overflow-y-auto bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))}

          {/* Auto Scroll Target */}
          <div ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;