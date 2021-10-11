import React from "react";
import "../../attributes/styles/NavBar.css";
import MainLogo from "../../attributes/img/logo-store.png";
import { menu } from "../utiles/helpers";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul className="menuBar">
        <li className="logo">
          <a href="*">
            <img src={MainLogo} alt="store" />
          </a>
        </li>
        {menu.map((item) => {
          return (
            <li className="menuItem">
              <a href={item.ref}>{item.name}</a>
            </li>
          );
        })}
        <CartWidget />
        <li className="toggle">
          <span className="bars"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
