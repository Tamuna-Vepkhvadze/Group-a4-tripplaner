import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <>
            <Link to={"/ExplorePlaces"} className="bg-blue-500 text-white px-15 py-2 rounded hover:bg-blue-600 transition">
            Explore Places
            </Link>
                <Link to={""} className="bg-blue-500 text-white px-15 py-2 rounded hover:bg-blue-600 transition">
            Learn More
            </Link>
     </>
  )

}

export default HomePage