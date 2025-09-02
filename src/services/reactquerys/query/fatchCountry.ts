import { CountryWrapper } from "../../axios/Axioswrapper"

export const fatchCountry = async() => {
    const result = await CountryWrapper.get("v3.1/all?fields=name,flags,continents,capital,population,area,currencies,languages,region")
    return result.data
    

}


