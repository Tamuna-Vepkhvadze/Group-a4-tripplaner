import { useQuery } from "@tanstack/react-query"
import getfavorite from "../services/reactquerys/query/getfavorite"
import type { CountryType, rowData } from "../Pages/ExplorePlaces/Interface"


const usegetfavorit = (resource:string) => {
const result = useQuery<rowData[]>({
    queryKey:["fivorite"],
    queryFn: () => getfavorite(resource)
})
 return result
}

export default usegetfavorit