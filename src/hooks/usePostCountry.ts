import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CountryType } from "../Pages/ExplorePlaces/Interface"
import { postCountry } from "../services/reactquerys/query/postCountry"


interface PostCountryResponse {
  data: string[];
}

export const usePostCountry = ()=> {
    const queryClient = useQueryClient()
    return useMutation<PostCountryResponse, Error, CountryType>({
   
    mutationFn: (country: CountryType) => postCountry(country),

   
    onSuccess: (data, variables) => {
    
      queryClient.invalidateQueries({ queryKey: ["droppedCountries"] });

      console.log("Country posted successfully:", variables.name.common);
      console.log("Server response:", data); 
    },


    onError: (error: Error) => {
      console.error("Failed to post country:", error.message);
    },
  });
};


