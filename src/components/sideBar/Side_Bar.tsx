import React from 'react'
import CurrentTrip from './CurrentTrip';
import SavedTrips from './SavedTrips';
import SideBarHeader from './SideBarHeader';



interface SideBarProps {
  onClick: () => void;
  isOpen: boolean;
}

const Side_Bar:React.FC<SideBarProps> = ({isOpen,onClick}) => {

  return (
    
      <div className="inset-y-0 right-0 flex max-w-full pointer-events-none absolute z-50">
      <div
        className={`pointer-events-auto w-120 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col bg-white shadow-xl">
          <SideBarHeader onClick={onClick} />
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <CurrentTrip  />
            <SavedTrips />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Side_Bar
