
import { Route, Routes } from 'react-router-dom'
import MyLayout from '../Pages/MyLayout'
import HomePage from '../Pages/HomePage/HomePage'
import ExplorePlaces from '../Pages/ExplorePlaces/ExplorePlaces'
import PavoritesPage from '../Pages/favoritesPage/favoritesPage'

const AppNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<MyLayout/>}>

            <Route index element={<HomePage/>}/>
            <Route path='ExplorePlaces' element={<ExplorePlaces/>}/>
            <Route path='PavoritesPage' element={<PavoritesPage/>}/>
          

        </Route>
    </Routes>
  )
}

export default AppNavigation