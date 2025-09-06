import React, { useState } from 'react'
import type { CountryType } from './Interface'

import CountryModal from '../../components/cardPopUp/CountryModal'
import { useSidebarStore } from '../../ZustandStore/SideBar.store'
import DragableCard from '../../components/dndKit/DragableCard'


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
        {data?.map((card) => (
            <DragableCard key={card.name.common} card={card} modalOpen={modalOpen} onClick={setSelectedCard} formatPopulation={formatPopulation}/>
        ))}
        {selectedCard && <CountryModal isOpen={!!selectedCard} onClose={()=>setSelectedCard(null)}  country={selectedCard}/>}
    </section>
  )
}




export default Cards