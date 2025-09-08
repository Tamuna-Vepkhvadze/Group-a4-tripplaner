import { ToastContainer } from "react-toastify";
import AppNavigation from "./AppNavigation/AppNavigation";

function App() {
  
  return (

    <>
        <AppNavigation/>
    <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    
    </>

   
  )
}

export default App
