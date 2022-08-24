import "./App.css";
import NavBar from "./Components/NavBar";



function App() {

    let numeroDeClase = 40

  return (
    <>
    <NavBar/>
    <div className="App">
      {
        <p style={
          {
            color: "salmon",
            padding: "10px"
          }
        }>
          Bienvenidos a la clase {numeroDeClase}</p>
        }
    </div>
        </>
  );
}

export default App;
