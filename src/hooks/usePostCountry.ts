import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CountryType } from "../Pages/ExplorePlaces/Interface"
import { postCountry } from "../services/reactquerys/query/postCountry"


interface PostCountryResponse {
  data: string[];
}

export const usePostCountry = ()=> {
    const queryClient = useQueryClient()
    return useMutation<PostCountryResponse, Error, CountryType>({
    // call API
    mutationFn: (country: CountryType) => postCountry(country),

    // called when request succeeds
    onSuccess: (data, variables) => {
      // invalidate droppedCountries query so UI refreshes
      queryClient.invalidateQueries({ queryKey: ["droppedCountries"] });

      console.log("Country posted successfully:", variables.name.common);
      console.log("Server response:", data); 
    },

    // called if request fails
    onError: (error: Error) => {
      console.error("Failed to post country:", error.message);
    },
  });
};

