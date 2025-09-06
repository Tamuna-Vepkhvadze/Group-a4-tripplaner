import React, { useState } from 'react'
import type { CountryType } from './Interface'
import { Ardlocation, Capital, People } from '../HomePage/Icons'
import AddFavoritePage from '../../components/dndKit/AddFavoritePage'
import CountryModal from '../../components/cardPopUp/CountryModal'
import { useSidebarStore } from '../../ZustandStore/SideBar.store'


interface cardsProp {
    data:CountryType[] | undefined
}


const Cards:React.FC<cardsProp> = ({data}) => {

    //State for pop-up
    const[selectedCard, setSelectedCard]= useState<CountryType | null>(null)
    const modalOpen = useSidebarStore((state) => state.modalOpen);

    
    const formatPopulation = (population: number) :string=> {
        if(population >= 1000000) {
            return (population / 1000000).toFixed(1) + "M"
        } else if (population >= 1000) {
            return (population / 1000).toFixed(1) + "K"
        }
        return population.toString()
    }

 
    
  return (
    <section   className="mx-auto p-4 sm:p-6 gap-6 grid transition-all duration-300"
  style={{
    maxWidth: modalOpen
      ? 'clamp(0px, calc(100% - 20rem), 1200px)'
      : '1200px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  }}>
        {data?.map((card, ind) => (
            <div
            key={ind}
             className={`overflow-hidden bg-white rounded-lg shadow-md flex flex-col cursor-pointeroverflow-hidden transform transition-all duration-300${modalOpen ? "scale-95 max-h-[12rem]" : "scale-100 max-h-[40rem]"}`}
            onClick={()=>setSelectedCard(card)}
            >
                <div className={`w-full relative 
                    ${modalOpen ? "max-h-24" : "max-h-40"} aspect-[4/3]`}>
                <AddFavoritePage data={card}/>
                    <img
                    src={card.flags.png}
                    alt="Country_Flags"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold ">{card.name.common}</h2>
                    <p className="text-gray-600 flex items-center gap-2"><Ardlocation/>{card.continents[0]}</p>
                    <p className="text-gray-700 flex items-center gap-2"><Capital/>Capital: {card.capital?.[0]}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-2"><People/>
                    {formatPopulation(card.population)} people
                    </p>
                </div>
                <p className="bg-blue-100 text-blue-900 py-1 px-4 rounded-2xl ml-3 mt-2 mb-4 self-start text-left text-xs">
                    {card.continents[0]}
                </p>
            </div>
           
        ))}
        {selectedCard && <CountryModal isOpen={!!selectedCard} onClose={()=>setSelectedCard(null)}  country={selectedCard}/>}
    </section>
  )
}




              // const Cards:React.FC<cardsProp> = ({data}) => {

              //   return (
              //     <section className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              //         {data?.map((card) => (
              //             <DragableCard key={card.name.common} card={card} />
              //         ))}
              //     </section>






              //   )
              // }

export default Cards