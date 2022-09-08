import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
// import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";




function App() {

  return (
    <>
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/> */}
      <ItemDetailContainer/>
    </div>
    </>
        
  );
}

export default App;
