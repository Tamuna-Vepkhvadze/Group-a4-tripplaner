import { useMutation } from "@tanstack/react-query"
import deletePlanFN from "../services/reactquerys/mutation/delete"
import { client } from "../services/reactquerys"

const useDelete = (resource: string ) => {
  const result = useMutation({
    mutationFn: (id: string) => deletePlanFN(resource, id),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("onSuccess")
        client.invalidateQueries({ queryKey:["fivorite"]  })
        client.invalidateQueries({ queryKey:["favoritecountrygroup"]  })
    }
  })
  return result
}

export default useDelete