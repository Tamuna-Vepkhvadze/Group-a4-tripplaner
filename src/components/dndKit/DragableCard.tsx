import React from 'react'
import type { CountryType } from '../../Pages/ExplorePlaces/Interface'
import { useDraggable } from '@dnd-kit/core'
import { Ardlocation, Capital,  People } from '../../Pages/HomePage/Icons'
import AddFavoritePage from './AddFavoritePage'



interface DraggableCardProps {
    card: CountryType,
    modalOpen: boolean;
    onClick: (card: CountryType) => void;
    formatPopulation: (population: number) => string;
}


const DragableCard:React.FC<DraggableCardProps> = ({card, modalOpen,onClick,formatPopulation}) => {

     const{attributes, listeners, setNodeRef, transform} = useDraggable({
        id:card.name.common //unique identifier for DnD
     })


     
const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    touchAction: "none",
    cursor: "grab",
};



  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`overflow-hidden bg-white rounded-lg shadow-md flex flex-col cursor-pointer transform transition-all duration-300 ${
        modalOpen ? 'scale-95 max-h-[12rem]' : 'scale-100 max-h-[40rem]'
      }`}
      onClick={() => onClick(card)}
    >
      <div className={`w-full relative ${modalOpen ? 'max-h-24' : 'max-h-40'} aspect-[4/3]`}>
        <AddFavoritePage data={card} />
        <img src={card.flags.png} alt="Country_Flags" className="w-full h-full object-cover" />
      </div>
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{card.name.common}</h2>
        <p className="text-gray-600 flex items-center gap-2">
          <Ardlocation />
          {card.continents[0]}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Capital /> Capital: {card.capital?.[0]}
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          <People /> {formatPopulation(card.population)} people
        </p>
      </div>
      <p className="bg-blue-100 text-blue-900 py-1 px-4 rounded-2xl ml-3 mt-2 mb-4 self-start text-left text-xs">
        {card.continents[0]}
      </p>
    </div>
  )
}

export default DragableCard
