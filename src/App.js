import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
 import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/> */}
      {/* <ItemDetailContainer/> */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
        
  );
}

export default App;
