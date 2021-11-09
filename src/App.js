import "./index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={["/", "/category/:id"]}>
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
