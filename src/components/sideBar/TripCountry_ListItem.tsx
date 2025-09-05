import React from "react";
import type { CountryType } from "../../Pages/ExplorePlaces/Interface";
import { GripVertical, Trash2 } from "lucide-react";
import { useTripStore } from "../../ZustandStore/CurrentTripList.store";

interface TripCountryItemProps {
  country: CountryType;
}

const TripCountryItem: React.FC<TripCountryItemProps> = ({ country }) => {
  const removeCountry = useTripStore((state) => state.removeCountry)

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg transition-all duration-200">
      {/* Left side: grip + flag + info */}
      <div className="flex items-center space-x-3">
        {/* Grip handle */}
        <div
          role="button"
          tabIndex={0}
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded"
        >
          <GripVertical className="h-4 w-4" />
        </div>

        {/* Flag */}
        <img
          src={country.flags?.svg || country.flags?.png}
          alt={`Flag of ${country.name?.common}`}
          className="w-8 h-6 object-cover rounded border"
        />

        {/* Name + region */}
        <div>
          <h4 className="font-medium text-gray-900">{country.name?.common}</h4>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>
      </div>

      {/* Delete button */}
      <button onClick={() => removeCountry(country.name.common)}
        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors duration-200"
        aria-label="Remove country"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </li>
  );
};

export default TripCountryItem;
