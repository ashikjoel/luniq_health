import { NavLink } from "react-router-dom";
import { FaComments, FaImage, FaFilePdf, FaRobot } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-700">
        <FaRobot size={28} />
        <h1 className="text-xl font-bold">AI Assistant</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaComments />
          <span>Chat</span>
        </NavLink>

        <NavLink
          to="/image"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaImage />
          <span>Image Q&A</span>
        </NavLink>

        <NavLink
          to="/pdf"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaFilePdf />
          <span>PDF Q&A</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;