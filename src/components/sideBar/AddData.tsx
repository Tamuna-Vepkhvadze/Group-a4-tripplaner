import type { CountryType } from "../../Pages/ExplorePlaces/Interface"


interface prop {
   data:CountryType[] | null
}
const AddData: React.FC<prop> = ({data}) => {

  return (
    <div>
        {
            data?.map(itrm => 
                    <div key={itrm.name.common}>
                        <div>
                            <img src={itrm.flags.png} alt="" />
                        </div>

                          <div>
                            <h2>{itrm.name.common}</h2>
                            <p>{itrm.continents[0]}</p>
                        </div>
                    </div>
            )
        }
    </div>

  )
}

export default AddData