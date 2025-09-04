import { serwercall } from "../../axios/Axioswrapper"


const getfavorite =async(resource:string) => {
    const result = await serwercall.get(resource)
return result.data
}


export default getfavorite