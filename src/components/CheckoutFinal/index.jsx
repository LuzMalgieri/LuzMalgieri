import React from "react";
import "../../attributes/styles/Cart.css";
const CheckoutFinal = (name,id) => {

    return(
        <section className="container">
        <div>
          <h3 className="noProductsTitle">
            Thanks for shopping with us, {name}!
            Your order number is {id}
          </h3>
          {/* <Link to="/">
            <button className="noItemsBtn">Continue Shopping</button>
          </Link> */}
        </div>
      </section>
    )
}

export default CheckoutFinal