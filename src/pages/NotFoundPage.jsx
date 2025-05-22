import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4 text-center">
      <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Page Not Found</h2>
      <p className="text-xl text-gray-600 max-w-lg mb-10">
        We're sorry, the page you requested could not be found. It may have been
        moved, renamed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Return Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
