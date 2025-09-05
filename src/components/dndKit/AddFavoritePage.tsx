
import usePostFaworite from '../../hooks/usePostFaworite'
import type { CountryType } from '../../Pages/ExplorePlaces/Interface'
import { Card_icon_1, Card_icon_2 } from '../../Pages/HomePage/Icons'
import { useTripStore } from '../../ZustandStore/CurrentTripList.store'

interface prop {
  data:CountryType
}

const AddFavoritePage:React.FC<prop> = ({data}) => {

  const {mutate} = usePostFaworite("FavoriteResource")
  const { addCountry } = useTripStore();


  const metodpost =(e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  mutate(data)
  alert("sucsess")
  }

  const handleAddToTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      addCountry(data);
    };


  return (
            <div className='absolute flex items-center gap-2  top-3 right-3'>
        <button onClick={ metodpost} className='cursor-pointer'>
          <Card_icon_1/>
        </button>


        <button onClick={handleAddToTrip} className='cursor-pointer'>
          <Card_icon_2/>
        </button>

              
          
        </div>

  )
}

export default AddFavoritePage