
import { useState } from 'react'
import { Filter, Heart, SerchBar } from '../HomePage/Icons'
import type { CountryType } from './Interface'
import Cards from './cards'
import { Link } from 'react-router-dom'

interface serchProp {
    data:CountryType[] | undefined
}

const Serch:React.FC <serchProp>= ({data}) => {

const regions = Array.from(new Set(data?.map((item) => item.region)));

const [serch, useserch] =useState("")
const [serchregion, setserchregion] =useState("All")

const filterData = data?.filter(name =>{ 
    const countryName = name.name.common.toLowerCase().includes(serch)
    const continent = serchregion === "All" || name.region === serchregion;
    return countryName && continent
  
    
})

  return (
    
    <main>
        <div className='w-full bg-white'>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-4 p-4">
        
                <label className="flex items-center  rounded-md px-3 py-2 border border-gray-500 w-110 " >
                    <SerchBar  />
                    <input
                    type="text"
                    placeholder="Search countries..."
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 "
                    onChange={(e) => useserch(e.target.value)}
                    />
                </label>


                <div className="relative flex items-center rounded-md px-3 py-2 border border-gray-500 w-110  ">
                    <Filter />
                    <select
                    value={serchregion}
                    onChange={(e) => setserchregion(e.target.value)}
                className="appearance-none rounded-md pl-10 pr-3 w-full text-gray-700 outline-none"
                    >
                    <option className='w-full' value="All">All</option>
                    {regions.map((reg, index) => (
                        <option key={index} value={reg} className='w-full'>
                        {reg}
                        </option>
                    ))}
                    </select>
                </div>

            
                <label className="flex items-center gap-2 text-gray-700">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                   <Heart/>
                    <Link to={"/PavoritesPage"} >Show favorites only</Link>
                </label>

         </div>
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center  pl-4 pb-4 text-gray-500">
                     Showing {filterData?.length || 0} of {data?.length || 0} countries
                </div>
      </div>




         <Cards data={filterData}/>
     </main>
  )
}

export default Serch