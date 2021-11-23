import React from "react";
import "../../attributes/styles/Cart.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="container">
        <div>
          <h3 className="noProductsTitle">
            The page you are looking for does not exist.
          </h3>
          <Link to="/">
            <button className="noItemsBtn">Continue Shopping</button>
          </Link>
        </div>
      </section>
    )
}

export default NotFound