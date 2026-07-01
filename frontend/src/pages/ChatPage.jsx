import Layout from "../components/Layout";

// Chat Components
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

// Custom Hook
import { useChat } from "../hooks/useChat";

function ChatPage() {
  const { messages, sendMessage } = useChat();

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-140px)]">
        <ChatWindow messages={messages} />
        <ChatInput onSend={sendMessage} />
      </div>
    </Layout>
  );
}

export default ChatPage;