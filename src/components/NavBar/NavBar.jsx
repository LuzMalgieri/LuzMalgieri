import React from "react";
import "../styles/NavBar.css";
import { menu } from "../utiles/helpers";
import MainLogo from "../img/logo-store.png";

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
        <li className="toggle">
          <span className="bars"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

