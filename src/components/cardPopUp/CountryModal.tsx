import React from 'react';
import type { CountryType } from '../../Pages/ExplorePlaces/Interface';
import PopUp from './PopUp';
import ActionButtons from './ActionButtons';
import CountryInfoDiv from './CountryInfoDiv';

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: CountryType;
}

const CountryModal: React.FC<CountryModalProps> = ({ isOpen, onClose, country }) => {


  return (
    <PopUp isOpen={isOpen} onClose={onClose} country={country}>
        <ActionButtons />
        <div className="mt-4">
          <CountryInfoDiv {...country} />
        </div>
     
    </PopUp>
  );
};

export default CountryModal;
