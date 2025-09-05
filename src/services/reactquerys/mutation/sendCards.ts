import type {  sentDataType } from "../../../Pages/ExplorePlaces/Interface"
import { serwercall } from "../../axios/Axioswrapper"
   

const senCards =async(resource:string, senddata:sentDataType) => {
 const responce = await serwercall.post(`resource/${resource}`, {data:[senddata]})

 return responce.data
}

export default senCards
