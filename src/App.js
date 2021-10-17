import "./index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer greeting="Libros de Ficción" />
      
    </div>
  );
}

export default App;
