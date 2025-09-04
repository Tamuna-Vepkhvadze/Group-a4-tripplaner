import React from 'react'

interface SideBarProps{
  onClick: ()=> void
}

const SideBar:React.FC<SideBarProps> = ({onClick}) => {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 z-50">
      <div className="pointer-events-auto w-screen max-w-md">
        <div className="flex h-full flex-col bg-white shadow-xl">
          {/* Header */}
          <div className="bg-blue-600 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Trip Planner</h2>
              <button className="rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={onClick}
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

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 sm:px-6">
              {/* Current Trip */}
              <div className="mb-8 min-h-[200px] border-2 border-dashed rounded-lg p-4 transition-colors duration-200 border-blue-300 bg-blue-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Current Trip</h3>
                </div>
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
                    className="h-12 w-12 mx-auto mb-4 text-blue-300"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="font-medium">Drop countries here</p>
                  <p className="text-sm">Drag countries from the list to add them to your trip</p>
                </div>
              </div>

              {/* Saved Trips */}
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
                  <p>No saved trips</p>
                  <p className="text-sm">Create and save your first trip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
