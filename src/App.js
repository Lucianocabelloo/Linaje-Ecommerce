import "./App.css";
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";



function App() {

  return (
    <>
    <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/>
    <NavBar/>
    

    <ItemListContainer novedades={"Novedades del Mes"}/>


    <div className="App">
    </div>


        </>
  );
}

export default App;
