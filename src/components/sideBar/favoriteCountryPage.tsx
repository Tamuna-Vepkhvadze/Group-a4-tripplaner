import useDelete from "../../hooks/uzeDelete"
import type { countryrowdata, DataType } from "../../Pages/ExplorePlaces/Interface"
import { BasketIcon } from "../../Pages/HomePage/Icons"

interface MyPlanType {
    Data: countryrowdata[]
}
const favoriteCountryPage:React.FC<MyPlanType> = ({Data}) => {
    const {mutate} = useDelete("favoritecountrygroup")
    const delPlan = (id: string) => {
        mutate(id)
    }


        const planData: DataType[] = Data?.map(item => ({
            id: item.id,
            resource: item.resource,
            time: item.createdAt,
            cardsname: item.data.cardsname ,
            cardData: item.data.cardData              
        })) ?? [];

  return (
    <section>
        {
           planData.map(item =>
            <div key={item.id}>
            <button onClick={() => delPlan(item.id)}>
                <BasketIcon  />
            </button>
                <p>{item.cardsname}</p>
                <p>{item.cardData.length}</p>
                <p>{item.time}</p>
                <div>
                    {item.cardData.map(img =>
                        <img key={img.name.common} src={img.flags.png} alt="" />
                    )}
                </div>
            </div>
           )
        }
    </section>
  )
}
export default favoriteCountryPage


















