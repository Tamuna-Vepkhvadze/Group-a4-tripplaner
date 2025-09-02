
import { Route, Routes } from 'react-router-dom'
import MyLayout from '../Pages/MyLayout'
import HomePage from '../Pages/HomePage/HomePage'
import ExplorePlaces from '../Pages/ExplorePlaces/ExplorePlaces'

const AppNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<MyLayout/>}>

            <Route index element={<HomePage/>}/>
            <Route path='ExplorePlaces' element={<ExplorePlaces/>}/>
          

        </Route>
    </Routes>
  )
}

export default AppNavigation