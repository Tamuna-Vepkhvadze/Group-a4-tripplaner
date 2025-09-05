import React from "react";

interface SideBarHeaderProps {
  onClick: () => void;
}

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ onClick }) => (
  <div className="bg-blue-600 px-4 py-6 sm:px-6">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-medium text-white">Trip Planner</h2>
      <button
        onClick={onClick}
        className="rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>
    <p className="text-blue-100 text-sm mt-2">
      Drag countries here to add them to your trip
    </p>
  </div>
);

export default SideBarHeader;
