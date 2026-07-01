import { Link } from "react-router-dom";

function ServiceCard({ icon, title, description, path }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-200">
      
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <Link
        to={path}
        className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Open
      </Link>

    </div>
  );
}

export default ServiceCard;