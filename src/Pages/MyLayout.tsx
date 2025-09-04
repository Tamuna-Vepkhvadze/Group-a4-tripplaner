import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { useState } from "react";
import SideBar from "../components/sideBar/SideBar";


const MyLayout = () => {

  //State for Modal
  const [modalOpen, setModalOpen]= useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  //function to open modal
    const openPop_up = ()=> {
     if(location.pathname==='/ExplorePlaces'){
       setModalOpen(true)
     } else {
      navigate('/ExplorePlaces')
     }
    }
    
  //function to close modal
  const closePop_up = () => {
    setModalOpen(false)
  }



  return (
    <main className="min-h-screen bg-gray-50">
      <Header openModal={openPop_up} />
      {modalOpen? <SideBar onClick={closePop_up}/> : null}
        <Outlet />
     
    </main>
  );
};

export default MyLayout;
