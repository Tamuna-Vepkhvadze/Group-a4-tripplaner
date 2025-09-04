import React from 'react'
import type { CountryType } from '../../Pages/ExplorePlaces/Interface'
import { useDraggable } from '@dnd-kit/core'
import { Ardlocation, Capital, People } from '../../Pages/HomePage/Icons'



interface DraggableCardProps {
    card: CountryType
}
const DragableCard:React.FC<DraggableCardProps> = ({card}) => {

     const{attributes, listeners, setNodeRef, transform} = useDraggable({
        id:card.name.common //unique identifier for DnD
     })


     
const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    touchAction: "none",
    cursor: "grab",
};


const formatPopulation = (population: number) :string=> {
    if(population >= 1000000) {
        return (population / 1000000).toFixed(1) + "M"
    } else if (population >= 1000) {
        return (population / 1000).toFixed(1) + "K"
    }
    return population.toString()
}



  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="w-full aspect-[4/3] max-h-40">
        <img src={card.flags.png} alt="Country_Flags" className="w-full h-full object-cover" />
      </div>
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{card.name.common}</h2>
        <p className="text-gray-600 flex items-center gap-2">
          <Ardlocation /> {card.continents[0]}
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
