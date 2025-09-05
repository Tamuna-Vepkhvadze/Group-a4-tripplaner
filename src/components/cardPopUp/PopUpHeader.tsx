import React from 'react';

export interface CountryHeaderProps {
  commonName: string;
  officialName: string;
  flagUrl: string;
}

const PopUpHeader: React.FC<CountryHeaderProps> = ({ flagUrl, commonName, officialName }) => {
  return (
    <div className="relative w-full h-48">
      <img
        src={flagUrl}
        alt={`${commonName} flag`}
        className="w-full h-full object-cover rounded-t-2xl relative z-0"
      />
      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-2xl z-10" />
      {/* Text content */}
      <div className="absolute bottom-4 left-4 text-white z-20">
        <h2 className="text-2xl font-bold">{commonName}</h2>
        <p className="text-white text-opacity-90">{officialName}</p>
      </div>
    </div>
  );
};

export default PopUpHeader;
