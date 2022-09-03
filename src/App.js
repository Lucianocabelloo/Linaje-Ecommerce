import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";
import Item from "./Components/Item/Item";




function App() {

  return (
    <>
    <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/>
    <NavBar/>
    <ItemListContainer novedades={"Novedades del Mes"}/>
    <Item/>
    <div className="App">
    </div>


        </>
  );
}

export default App;
