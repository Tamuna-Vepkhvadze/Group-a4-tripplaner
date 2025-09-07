import React from 'react';
import type { CountryType } from '../../Pages/ExplorePlaces/Interface';

interface PopupProps {
  isOpen: boolean;
    onClose: () => void;
    country: CountryType;
    children: React.ReactNode;
}

const PopUp: React.FC<PopupProps> = ({ isOpen, onClose, children ,country}) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black/20  z-50" onClick={onClose}>
      <div className="w-full z-40 max-w-2xl bg-white rounded-2xl shadow-xl max-h-[80vh] overflow-y-auto" onClick={(e)=>e.stopPropagation()}>
        
        {/* Header with flag, names, and close button  */}
        <div className="relative w-full h-48" rounded-t-2xl overflow-hidden>
          <img
            src={country.flags?.png || '/fallback-flag.png'}
            alt={`${country.name.common} flag`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4  h-10 w-10 rounded-full bg-white/80 hover:bg-white z-20"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 text-white z-20">
            <h2 className="text-2xl font-bold">{country.name.common}</h2>
            <p className="text-white text-opacity-90">{country.name.official}</p>
          </div>
        </div>

{/* pop-up body */}
        <div className="p-6">
        {children}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
