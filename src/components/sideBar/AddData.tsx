import { useState, type ChangeEvent } from "react";

import type { sentDataType } from "../../Pages/ExplorePlaces/Interface"; 
import { useTripStore } from "../../ZustandStore/CurrentTripList.store";
import useSentCard from "../../hooks/usesentcerd";

interface Prop { 
  changebutton: (el: boolean) => void;
}


const AddData: React.FC<Prop> = ({ changebutton }) => {
  const { mutate } = useSentCard("favoritecountrygroup");
  const { clearAll, tripCountries } = useTripStore();

  const [ofenclose, setOfenclose] = useState("");
  const [data, setData] = useState<sentDataType>({ cardsname: "", cardData: [] }); 
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setOfenclose(name);
    setData({ cardData: tripCountries, cardsname: name }); 
  };

  const sendPlan = () => {
    if (data.cardsname.trim() && data.cardData.length > 0) { 
      mutate(data, {
        onSuccess: () => {
          clearAll();
          setOfenclose("");
          setData({ cardsname: "", cardData: [] });
          changebutton(false); 
        },
        onError: (error) => {
          console.error('Failed to save plan:', error); 
        },
      });
    }
  };

  return (
    <div className="flex my-10 flex-col gap-3.5">
      <input
        type="text"
        placeholder="Enter trip name..."
        value={ofenclose}
        onChange={onChange}
        className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className='flex gap-3.5'>
        <button
          onClick={sendPlan}
          disabled={!ofenclose.trim() || !tripCountries.length} 
          className={`px-6 py-2 rounded-lg text-white font-medium transition-colors w-70
            ${ofenclose.trim() && tripCountries.length
              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Save
        </button>
        <button
          onClick={() => changebutton(false)}
          className="px-6 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddData;