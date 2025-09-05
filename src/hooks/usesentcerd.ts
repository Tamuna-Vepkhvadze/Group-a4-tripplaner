import { useMutation } from "@tanstack/react-query"
import senCards from "../services/reactquerys/mutation/sendCards"
import type { sentDataType } from "../Pages/ExplorePlaces/Interface"

const usesentcerd = (resource: string) => {
  const result = useMutation({
    mutationFn: (data: sentDataType) => senCards(resource, data),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("success")
       
    }
  })
  return result
}
export default usesentcerd