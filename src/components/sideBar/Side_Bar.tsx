import React from 'react';
import CurrentTrip from './CurrentTrip';
import SavedTrips from './SavedTrips';
import SideBarHeader from './SideBarHeader';

import type { CountryType } from '../../Pages/ExplorePlaces/Interface';
import { useTripStore } from '../../ZustandStore/CurrentTripList.store';

interface SideBarProps {
  onClick: () => void;
  isOpen: boolean;
}

const Side_Bar: React.FC<SideBarProps> = ({ isOpen, onClick }) => {
  // Drag over handler
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  // Drag leave handler
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragover');
  };

  // Drop handler
  const addCountry = useTripStore((state) => state.addCountry); // Use addCountry from useTripStore
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const cardData = e.dataTransfer.getData('application/json');
    if (cardData) {
      const card: CountryType = JSON.parse(cardData);
      addCountry(card); // Add country to Zustand store
    }
  };

  return (
    <div className="inset-y-0 right-0 flex max-w-full pointer-events-none absolute z-50">
      <div
        className={`pointer-events-auto w-120 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex h-full flex-col bg-white shadow-xl">
          <SideBarHeader onClick={onClick} />
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <CurrentTrip />
            <SavedTrips />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_Bar;