import "./index.css";
import NavBar from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import ItemDetailContainer from "./containers/ItemDetailContainer/index";
import Cart from "./components/Cart/index";
import NotFound from "./components/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext/index";

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
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
