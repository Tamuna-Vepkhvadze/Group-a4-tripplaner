
import { useFatchCountry } from "../../hooks/useFatchCountry";

import Serch from "./srch";

const ExplorePlaces: React.FC = () => {
  const { data, isLoading } = useFatchCountry();
  

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-center text-xl font-semibold">Loading ❤️...</h1>
      </div>
    );

 return(
  <>
  <Serch data={data} />

  </>

 )
};

export default ExplorePlaces;
