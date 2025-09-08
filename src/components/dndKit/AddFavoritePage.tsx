
import { toast } from 'react-toastify'
import usegetfavorit from '../../hooks/usegetfavorit'
import usePostFaworite from '../../hooks/usePostFaworite'
import useDelete from '../../hooks/uzeDelete'
import type { CountryType, fatchData } from '../../Pages/ExplorePlaces/Interface'
import { Card_icon_1, Card_icon_2, Deelicon_1, InsideHeart } from '../../Pages/HomePage/Icons'
import { useTripStore } from '../../ZustandStore/CurrentTripList.store'
import { useSidebarStore } from '../../ZustandStore/SideBar.store'

interface prop {
  data:CountryType
}

  const AddFavoritePage:React.FC<prop> = ({data}) => {
   const modalOpen = useSidebarStore((state) => state.modalOpen);
  

  const {mutate} = usePostFaworite("FavoriteResource")
  const { addCountry,tripCountries } = useTripStore();


  const metodpost =(e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  mutate(data)
  
  }

  
  const {data:fdata} =usegetfavorit("FavoriteResource")
  const infodata:fatchData[] =  fdata?.map(item => ({...item.data, id:item.id})) ?? []
  const favorites = infodata?.some(f => 
    f.name.common === data.name.common
  ) 
const handleAddToTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      
      const validCard = tripCountries.some(item => item.name.common === data.name.common)
    if(validCard) {
        return toast.info("Country already added ")
    } else {
       addCountry(data);
        toast.success(" Country added")
    }
    };


 const {mutate:deletefn} = useDelete("FavoriteResource")

 const deletefavorite = (e: React.MouseEvent<HTMLButtonElement>,name:string) => {
e.stopPropagation()
const cenceldata =infodata.find(n => 
  n.name.common === name
)


if(cenceldata) 
 deletefn(cenceldata?.id)
 }

 
  return (
            <div className='absolute flex items-center gap-2  top-3 right-3'>
              {
              favorites ? (
                <button onClick={(e) => deletefavorite(e, data.name.common)} className='cursor-pointer'>
                <InsideHeart/>
              </button>
              ): (
                <button onClick={ metodpost} className='cursor-pointer'>
                  <Card_icon_1/>
                </button>
              )
              }
        

        {
        modalOpen ? null : <button onClick={handleAddToTrip} className='cursor-pointer'>
                            <Card_icon_2/>
                          </button>
                          
        }
       

              
          
        </div>

  )
}

export default AddFavoritePage


