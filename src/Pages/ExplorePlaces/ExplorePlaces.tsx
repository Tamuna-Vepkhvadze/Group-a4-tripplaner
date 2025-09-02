import { useFatchCountry } from "../../hooks/useFatchCountry"

const ExplorePlaces = () => {
    const {data,isLoading} = useFatchCountry()
console.log(data)
if(isLoading) return <h1>Loading ...</h1>

  return (
    <div>
        {data?.map((el,index) => 
            <div key={index}>
                <div>
                    <img src={el.flags.svg} alt="" />
                </div>
                <div>
                    <h1>{el.name.official}</h1>
                    <p>{el.continents[0]}</p>
                    <p>{el.capital?.[0]}</p>
                    <p>{el.population}</p>
                    <p>{el.continents}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default ExplorePlaces