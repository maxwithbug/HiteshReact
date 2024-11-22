// src/components/ServiceUnavailable.jsx

import { RefreshCwIcon } from "lucide-react"; // assuming you are using Lucide icons

export default function ServiceUnavailable() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
      <div className="text-center space-y-6 px-6 max-w-lg">
        <h1 className="text-6xl font-extrabold text-red-500">503</h1>
        <h2 className="text-2xl font-bold">Service Unavailable</h2>
        <p className="text-lg">
          Sorry, the service you are trying to access is currently unavailable. 
          Please try again later.
        </p>
        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
          >
            <RefreshCwIcon className="w-5 h-5" />
            Refresh
          </button>
          <button
            onClick={() => window.location.href = "/"} // or use Link if you have react-router
            className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
