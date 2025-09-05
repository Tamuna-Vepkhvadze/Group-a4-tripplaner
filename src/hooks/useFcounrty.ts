import { useQuery } from "@tanstack/react-query"
import getcountyufavorite from "../services/reactquerys/query/getcountyufavorite"
import type { countryrowdata } from "../Pages/ExplorePlaces/Interface"


const useFcounrty = (resource:string) => {
const result = useQuery<countryrowdata[]>({
    queryKey:["country"],
    queryFn: () => getcountyufavorite(resource) 
})
 return result
  
}

export default useFcounrty