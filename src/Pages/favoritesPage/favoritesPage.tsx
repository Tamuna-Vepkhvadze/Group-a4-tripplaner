
import usegetfavorit from '../../hooks/usegetfavorit'
import type { fatchData } from '../ExplorePlaces/Interface';
import Contant from './Contant/Contant'
import FavoriteCard from './FavoriteCard';

const PavoritesPage = () => {
  const {data, isLoading} =usegetfavorit("FavoriteResource")
    if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-center text-xl font-semibold">Loading ❤️...</h1>
      </div>
    );
    console.log(data)
    const Fdata:fatchData[] =  data?.map(item => ({...item.data, id:item.id})) ?? [] 
    

    

  return (

    <div>
    {
      data ?  <FavoriteCard data={Fdata}/> : <Contant/> 
    }
    </div>
   
  )
}

export default PavoritesPage