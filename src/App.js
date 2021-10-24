import "./index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.jsx";
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
