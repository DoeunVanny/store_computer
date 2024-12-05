import { Route,  Routes } from "react-router-dom"
import Homepage from "./page/Homepage"
import MainLayout from "./components/MainLayout"
import Login from "./page/login"
import Accessory from "./page/CategoryOfProduct/productOfComputer/Accessory"
import Cpu from "./page/CategoryOfProduct/productOfComputer/Cpu"
import Combo from "./page/CategoryOfProduct/productOfComputer/Combo"
import Controller from "./page/CategoryOfProduct/productOfComputer/Controller"
import Cooler from "./page/CategoryOfProduct/productOfComputer/Cooler"
import Coolingpad from "./page/CategoryOfProduct/productOfComputer/Coolingpad"
import CustomPC from "./page/CategoryOfProduct/productOfComputer/CustomPC"
import DIY from "./page/CategoryOfProduct/productOfComputer/DIY"


function App() {
  
  return (
    <>
        <Routes>
                   <Route path="/"  element={<MainLayout/>} >
                       <Route path='/' element={<Homepage/>} />
                       <Route path='category/accessory' element={<Accessory/>} />
                       <Route path='category/cpu' element={<Cpu/>} />
                       <Route path='category/combo' element={<Combo/>} />
                       <Route path='category/controller' element={<Controller/>} />
                       <Route path='category/cooler' element={<Cooler/>} />
                       <Route path='category/coolingpad' element={<Coolingpad/>} />
                       <Route path='category/diy' element={<DIY/>} />
                   </Route>
                    <Route path="/login" element={<Login/>} />
        </Routes>
    </>
  )
}

export default App
