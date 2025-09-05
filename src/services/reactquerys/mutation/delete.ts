import { serwercall } from "../../axios/Axioswrapper"

const deletePlanFN = async (resource: string, id: string) => {
  const result = await serwercall.delete(`/resource/${resource}/${id}`)
  return result.data
}
export default deletePlanFN