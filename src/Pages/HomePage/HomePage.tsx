
import DiscoverCountries from "./DiscoverCountries"
import PlanAdventure from "./PlanAdventure"
import PlanYourTrip from "./PlanYourTrip"


const HomePage = () => {
  return (
    <main className="bg-blue-50 min-h-screen">
          <PlanAdventure/>
          <DiscoverCountries/>
          <PlanYourTrip/>

   </main>
  )

}

export default HomePage