import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage";
import ImagePage from "./pages/ImagePage";
import PdfPage from "./pages/PdfPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/image" element={<ImagePage />} />
      <Route path="/pdf" element={<PdfPage />} />
    </Routes>
  );
}

export default App;