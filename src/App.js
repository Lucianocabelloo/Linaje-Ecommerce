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
import ShopProvider from "./Components/Context/cartContext";
import CartContainer from "./Containers/CartContainer/CartContainer";




function App() {

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
