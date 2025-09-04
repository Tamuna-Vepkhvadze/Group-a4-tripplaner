
import usePostFaworite from '../../hooks/usePostFaworite'
import type { CountryType } from '../../Pages/ExplorePlaces/Interface'
import { Card_icon_1, Card_icon_2 } from '../../Pages/HomePage/Icons'

interface prop {
  data:CountryType
}

const AddFavoritePage:React.FC<prop> = ({data}) => {

  const {mutate} = usePostFaworite("FavoriteResource")

  const metodpost =(e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  mutate(data)
  alert("sucsess")
  }

const getLocal = () => {
  try {
    const locData =[data] 
    const storageData = JSON.stringify(locData)
    localStorage.setItem("storage",storageData )
    
  } catch (error) {
    console.log("error")
    
  }
}


  return (
            <div className='absolute flex items-center gap-2  top-3 right-3'>
        <button onClick={ metodpost} className='cursor-pointer'>
          <Card_icon_1/>
        </button>


        <button onClick={getLocal} className='cursor-pointer'>
          <Card_icon_2/>
        </button>

              
          
        </div>

  )
}

export default AddFavoritePage