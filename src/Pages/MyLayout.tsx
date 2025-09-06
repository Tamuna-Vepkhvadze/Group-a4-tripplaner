import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { usePostCountry } from "../hooks/usePostCountry";
import { useFatchCountry } from "../hooks/useFatchCountry";
import { useSidebarStore } from "../ZustandStore/SideBar.store";
import Side_Bar from "../components/sideBar/Side_Bar";


const MyLayout = () => {

  const {mutate:postCountry} = usePostCountry()
  const { data } = useFatchCountry();

  //State for Modal
  const {modalOpen,setModalOpen} =useSidebarStore()
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

  //DragFunction
    const handleDrag = (event:DragEndEvent)=> {
      const {active, over } = event
      console.log('Dragged item:', active.id)
      console.log('Dropped over:', over?.id)

      if(over?.id === 'drop-zone'){
        const country = data?.find(country =>country.name.common === active.id)
        if(country){
          postCountry(country)
          
        }
      }
    }
const stoppropagation = (e:React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation()
closePop_up()

}
  return (
    <main className="min-h-screen bg-gray-50">
      <Header openModal={openPop_up} />
      <DndContext onDragEnd={handleDrag}>
      <div className="flex">
        {modalOpen && <Side_Bar onClick={closePop_up} isOpen={modalOpen}/>}
        <div onClick={stoppropagation}  className={`flex-1 transition-all duration-300 ${modalOpen ? "mr-80" : "mr-0"}`}>
          <Outlet />
        </div>
      </div>
      </DndContext>
    </main>
  );
};

export default MyLayout;
