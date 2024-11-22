// src/components/Error/ErrorPage.jsx

import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react"; // assuming you are using Lucide icons

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
      <div className="text-center space-y-6 px-6 max-w-lg">
        <h1 className="text-6xl font-extrabold text-orange-500">Oops!</h1>
        <p className="text-lg">
          Sorry, an unexpected error has occurred. But don’t worry, we’re here to help.
        </p>
        <div className="text-gray-300">
          <p className="text-sm italic">Error Code: 404</p>
          <p>Page not found</p>
        </div>
        
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 mt-6 text-base font-medium text-gray-800 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
          <HomeIcon className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
