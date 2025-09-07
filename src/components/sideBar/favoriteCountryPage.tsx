
import useDelete from "../../hooks/uzeDelete";
import type { countryrowdata, DataType } from "../../Pages/ExplorePlaces/Interface";
import { BasketIcon } from "../../Pages/HomePage/Icons";

interface MyPlanType {
  Data: countryrowdata[] | undefined;
}

const FavoriteCountryPage: React.FC<MyPlanType> = ({ Data }) => {
  const { mutate } = useDelete("favoritecountrygroup");

  const delPlan = (id: string) => {
    mutate(id);
  };


  const planData: DataType[] =
    Data?.filter(item => item?.data) 
      .map(item => ({
        id: item.id,
        resource: item.resource,
        time: item.createdAt,
        cardsname: item.data?.cardsname ?? "Unknown", 
        cardData: item.data?.cardData ?? [], 
      })) ?? [];

  return (
    <section className="space-y-4">
      {planData.length > 0 ? (
        planData.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm flex flex-col gap-2"> 
<div className="flex justify-between items-start">


            <p className="font-semibold text-lg">{item.cardsname}</p>
            
            <button onClick={() => delPlan(item.id)} className="text-red-500 hover:text-red-600"> 
              <BasketIcon />
            </button>
</div>



            
            


            <p className="text-gray-500 text-sm">{item.cardData.length}  countries • {new Date(item.time).toLocaleDateString()}</p>
            
            
             <div className="flex items-center gap-1">
        {item.cardData.slice(0, 3).map((img) => (
          <img
            key={img.name.common}
            src={img.flags.png}
            alt={img.name.common}
            className="w-6 h-4 rounded-sm object-cover border"
          />
        ))}
        {item.cardData.length > 3 && (
          <span className="text-gray-500 text-sm">
            +{item.cardData.length - 3} more
          </span>
        )}
      </div>
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Load Trip
          </button>
        </div>

          
        ))
      ) : (
   null
      )}
    </section>
  );
};

export default FavoriteCountryPage;




  
     
    
   
 
       
      
      
    
