import { useQuery } from "@tanstack/react-query"
import { fatchCountry } from "../services/reactquerys/query/fatchCountry"
import type { CountryType } from "../Pages/ExplorePlaces/interface"

export const useFatchCountry = () => {
    const result = useQuery<CountryType[]>({
        queryKey:["country"],
        queryFn: () => fatchCountry()
    })
    return result
}

