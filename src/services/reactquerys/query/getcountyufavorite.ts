import { serwercall } from "../../axios/Axioswrapper"


const getcountyufavorite =async(resource:string) => {
    const result = await serwercall.get(`resource/${resource}`)
return result.data
}


export default getcountyufavorite