import { serwercall } from "../../axios/Axioswrapper"


const getCountryFavorite = async (resource: string) => {
  try {
    const result = await serwercall.get(`resource/${resource}`);
   
    if (!result.status.toString().startsWith('2')) {
      throw new Error('Failed to fetch favorite countries');
    }
    return result.data;
  } catch (error) {
    console.error('Error in getCountryFavorite:', error);
    throw error;
  }
};

export default getCountryFavorite;