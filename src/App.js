import "./index.css";
import NavBar from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import ItemDetailContainer from "./containers/ItemDetailContainer/index";
import Cart from "./components/Cart/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/index";

function App() {
  return (
    <CartProvider>
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
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
