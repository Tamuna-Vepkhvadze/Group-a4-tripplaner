import { useQuery } from "@tanstack/react-query";
 
import type { countryrowdata } from "../Pages/ExplorePlaces/Interface"; 
import getCountryFavorite from "../services/reactquerys/query/getcountyufavorite";


const useCountry = (resource: string) => {
  return useQuery<countryrowdata[]>({
    queryKey: ['favoritecountrygroup'], 
    queryFn: async () => {
      const result = await getCountryFavorite(resource);
      
      const apiData = result.data || result; 
      if (Array.isArray(apiData)) {
        return apiData.map((item: any, index: number) => ({
          id: item.id || `generated-id-${index}`, 
          resource: item.resource || resource,
          createdAt: item.createdAt || new Date().toISOString(),
          updatedAt: item.updatedAt || new Date().toISOString(),
          data: {
            cardsname: item.cardsname || item.data?.cardsname || 'Unknown', 
            cardData: item.cardData || item.data?.cardData || [], 
          },
        }));
      }
      return []; 
    },
  });
};

export default useCountry;