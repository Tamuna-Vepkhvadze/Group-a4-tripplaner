import React from 'react'

const ActionButtons:React.FC = () => {
  return (
    <div className="flex space-x-3 mb-6">
    <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white">
      ❤️ Add to Favorites
    </button>
    <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
     + Add to Trip
    </button>
  </div>
  )
}

export default ActionButtons
