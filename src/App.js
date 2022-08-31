import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";
import Cards from "./Components/Cards/Cards";



function App() {

  return (
    <>
    <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/>
    <NavBar/>
    <ItemListContainer novedades={"Novedades del Mes"}/>
    <Cards/>
    <div className="App">
    </div>


        </>
  );
}

export default App;
