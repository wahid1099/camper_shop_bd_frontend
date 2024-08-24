// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import notFoundImage from "@/assets/404.jpg"; // Adjust the path to your image

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="w-full max-w-md h-auto mb-6"
      />

      <p className="text-2xl mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-lg text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
