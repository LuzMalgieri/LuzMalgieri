import React from "react";
import "../../attributes/styles/NavBar.css";
import MainLogo from "../../attributes/img/logo-store.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="menuBar">
        <li className="logo">
          <Link to={"/"}>
            <img src={MainLogo} alt="store" />
          </Link>
        </li>

        <li className="menuItem">
          <Link to={"/category/fiction"}>Fiction</Link>
        </li>
        <li className="menuItem">
          <Link to={"/category/non-fiction"}>Non-Fiction</Link>
        </li>
        <li className="menuItem">
          <Link to={"/"}>FAQ</Link>
        </li>
        <CartWidget />
        <li className="toggle">
          <span className="bars"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
