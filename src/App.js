import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
 import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ShopProvider from "./Components/Context/CartContext";
import CartContainer from "./Containers/CartContainer/CartContainer";
// import { useEffect } from "react";
// import { algoritmoGuardadoAutomático } from "./Services/guardarProductos";




function App() {

  // useEffect(() => {
  //   algoritmoGuardadoAutomático()
  //   console.log("se deberia ejecutar 1 vez")
  // },[])
  

  return (
    <>
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
      </ShopProvider>
    </div>
    </>
        
  );
}

export default App;
