import React from 'react';
import CurrentTrip from './CurrentTrip';
import SavedTrips from './SavedTrips';
import SideBarHeader from './SideBarHeader';
import type { CountryType } from '../../Pages/ExplorePlaces/Interface';
import { useTripStore } from '../../ZustandStore/CurrentTripList.store';
import useCountry from '../../hooks/useFcounrty';
import FavoriteCountryPage from './favoriteCountryPage';


interface SideBarProps {
  onClick: () => void;
  isOpen: boolean;
}

const Side_Bar: React.FC<SideBarProps> = ({ isOpen, onClick }) => {
 
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  // Drag leave handler
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragover');
  };

  // Drop handler
  const addCountry = useTripStore((state) => state.addCountry); 
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const cardData = e.dataTransfer.getData('application/json');
    if (cardData) {
      const card: CountryType = JSON.parse(cardData);
      addCountry(card); 
    }
  };

 
  const { data = [], isLoading, isError } = useCountry("favoritecountrygroup");

  return (
<div
    className={`fixed top-0 right-0 z-30 transform transition-transform duration-300 w-120 bg-white shadow-xl 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <div className="flex flex-col h-screen">
      <SideBarHeader onClick={onClick} />
      {/* ეს div სქროლს იჭერს */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <CurrentTrip />
        {isLoading ? (
          <p>ჩატვირთვა...</p>
        ) : isError ? (
          <p>შეცდომა მონაცემების ჩატვირთვისას</p>
        ) : data.length > 0 ? (
          <FavoriteCountryPage Data={data} />
        ) : (
          <SavedTrips /> 
        )}
      </div>
    </div>
  </div>
  );
};

export default Side_Bar;
