import type { sentDataType } from "../../../Pages/ExplorePlaces/Interface";
import { serwercall } from "../../axios/Axioswrapper";
;

const sendCards = async (resource: string, senddata: sentDataType) => {
  try {
    const response = await serwercall.post(`resource/${resource}`, { data: [senddata] });
  
    if (!response.status.toString().startsWith('2')) {
      throw new Error('Failed to send cards');
    }
    return response.data;
  } catch (error) {
    console.error('Error in sendCards:', error);
    throw error; 
  }
};

export default sendCards;