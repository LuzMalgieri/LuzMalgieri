import "./index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemList from "./components/ItemList/ItemList"


function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer>
          <ItemList />
        </ItemListContainer>
      
    </div>
  );
}

export default App;
