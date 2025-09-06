import { useMutation } from "@tanstack/react-query"
import sentFavorite from "../services/reactquerys/mutation/sentFavorite"
import type { CountryType } from "../Pages/ExplorePlaces/Interface"
import { client } from "../services/reactquerys"


const usePostFaworite = (resource:string) => {
const result = useMutation({
    mutationFn: (data:CountryType) => sentFavorite(resource,data ),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("onSuccess")
        client.invalidateQueries({queryKey:["fivorite"]})
    }
    
})
return result
}

export default usePostFaworite