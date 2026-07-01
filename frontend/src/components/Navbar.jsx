function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Multi-Modal AI Assistant
        </h2>
        <p className="text-sm text-gray-500">
          Chat • Image Q&A • PDF Q&A
        </p>
      </div>

      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        A
      </div>
    </header>
  );
}

export default Navbar;