import { FaRobot, FaUserCircle } from "react-icons/fa";

function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className="max-w-[75%]">

        {/* Header */}
        <div
          className={`flex items-center gap-2 mb-1 ${
            isUser ? "justify-end" : "justify-start"
          }`}
        >
          {!isUser && (
            <>
              <FaRobot className="text-blue-600" />
              <span className="font-semibold text-blue-700">
                Hospital AI
              </span>
            </>
          )}

          {isUser && (
            <>
              <span className="font-semibold text-gray-700">
                You
              </span>
              <FaUserCircle className="text-gray-600" />
            </>
          )}

          <span className="text-xs text-gray-400">
            {currentTime}
          </span>
        </div>

        {/* Message */}
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-200 text-gray-800"
          }`}
        >
          <p className="whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

      </div>
    </div>
  );
}

export default MessageBubble;