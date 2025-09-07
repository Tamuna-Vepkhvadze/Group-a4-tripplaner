import { useMutation } from "@tanstack/react-query";
import sendCards from "../services/reactquerys/mutation/sendCards"; 
import type { sentDataType } from "../Pages/ExplorePlaces/Interface"; 
import { client } from "../services/reactquerys";


const useSentCard = (resource: string) => {
  const result = useMutation({
    mutationFn: (data: sentDataType) => sendCards(resource, data),
    onError: (error) => {
      console.error('Mutation error:', error); 
    },
    onSuccess: () => {
      console.log("success"); 
      client.invalidateQueries({queryKey:["favoritecountrygroup"]})
     
    }
  });
  return result;
};

export default useSentCard;