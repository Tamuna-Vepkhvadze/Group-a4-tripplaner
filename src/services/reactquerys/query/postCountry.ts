
import type { CountryType } from "../../../Pages/ExplorePlaces/Interface";
import { serwercall } from "../../axios/Axioswrapper";


export const postCountry = async(country:CountryType)=> {
        try {
            const payload = {data:[country.name.common]}
        const response = await serwercall.post('resource/droppedCountries', payload);
        return response.data;
    } catch (error) {
        console.error("Error posting country:", error);
        throw error;
    }
}




