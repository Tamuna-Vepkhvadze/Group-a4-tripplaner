import type { CountryType } from "../../../Pages/ExplorePlaces/Interface"
import { serwercall } from "../../axios/Axioswrapper"


const sentFavorite =async(resource:string, senddata:CountryType) => {
 const responce = await serwercall.post(resource, {data:[senddata]})

 return responce.data
}

export default sentFavorite