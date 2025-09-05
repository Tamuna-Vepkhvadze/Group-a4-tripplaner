import React from "react";

const SavedTrips: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Saved Trips</h3>
      <div className="text-center py-8 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mx-auto mb-4 text-gray-300"
          aria-hidden="true"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <p className="font-medium">No saved trips</p>
        <p className="text-sm">Create and save your first trip</p>
      </div>
    </div>
  );
};

export default SavedTrips;
