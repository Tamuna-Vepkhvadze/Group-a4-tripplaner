import { useState, type ChangeEvent } from "react"
import usesentcerd from "../../hooks/usesentcerd"
import type { sentDataType } from "../../Pages/ExplorePlaces/Interface"
import { useTripStore } from "../../ZustandStore/CurrentTripList.store"



interface prop {
    changebutton:(el:boolean) => void
}
const AddData: React.FC<prop> = ({changebutton}) => {
    const {mutate} = usesentcerd("favoritecountrygroup")
    const {clearAll, tripCountries} = useTripStore()

    const [Data, setData] = useState<sentDataType>()
    const [ofenclose, setofenclose] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        const name = e.target.value

        if(name) 

        setofenclose(name)
        setData({cardData:tripCountries, cardsname: name})
    }
    const sendPaln = () => {
        if(Data)
        mutate(Data)
        clearAll()
    }


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
                onClick={sendPaln}
                disabled={!ofenclose.trim()}
                className={`px-6 py-2 rounded-lg text-white font-medium transition-colors w-70
                ${ofenclose.trim()
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


  )
}

export default AddData