import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useState } from "react";
import SideBar from "../components/sideBar/SideBar";


const MyLayout = () => {

  //State for Modal
  const [modalOpen, setModalOpen]= useState(false)
  //function for modal opening
    const openPop_up = ()=> {
      console.log('It\'s open')
      setModalOpen(true)
    }
  

  return (
    <main className="min-h-screen bg-gray-50">
      <Header openModal={openPop_up} />
      {modalOpen? <SideBar /> : null}
        <Outlet />
     
    </main>
  );
};

export default MyLayout;
