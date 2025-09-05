import React from 'react'
import { useDroppable } from '@dnd-kit/core';

import TripCountryItem from './TripCountry_ListItem';
import { useTripStore } from '../../ZustandStore/CurrentTripList.store';



const CurrentTrip:React.FC = () => {
    const {setNodeRef, isOver} = useDroppable({ id: 'drop-zone' });
    const { tripCountries, clearAll } = useTripStore();


  return (
   <div
      ref={setNodeRef}
      className={`mb-8 min-h-[200px] border-2 border-dashed rounded-lg p-4 transition-colors duration-200 ${
        isOver ? "border-blue-600 bg-blue-100" : "border-blue-300 bg-blue-50"
      }`}
    >


      {tripCountries.length > 0 ? (
       
        <ul>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium text-gray-900">Current Trip</h3>
            <button className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
            onClick={clearAll}
            >
            Clear all
            </button>
          </div>
          {tripCountries.map((country:any, index:number) => (
            <TripCountryItem key={index} country={country}/>
          ))}
        </ul>
      ) : (
        <div className="text-center py-8 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-map-pin h-12 w-12 mx-auto mb-4 text-blue-300" aria-hidden="true" 
            data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE5NjozMA"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <p className="font-medium">Drop countries here</p>
          <p className="text-sm">Drag countries from the list to add them to your trip</p>
        </div>
      )}
    </div>
  )
}

export default CurrentTrip
