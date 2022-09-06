import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";




function App() {

  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Linaje Argentino"}/>
    </div>
    </>
        
  );
}

export default App;
