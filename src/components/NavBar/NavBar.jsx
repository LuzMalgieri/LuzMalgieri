import React from "react";
import "../../attributes/styles/NavBar.css";
import MainLogo from "../../attributes/img/logo-store.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Fiction", ref: "/category/fiction" },
    { name: "Non-Fiction", ref: "/category/non-fiction" },
    { name: "FAQ", ref: "/" },
  ];

  return (
    <nav>
      <ul className="menuBar">
        <li className="logo">
          <Link to={"/"}>
            <img src={MainLogo} alt="store" />
          </Link>
        </li>
        {menu.map((item) => {
          return (
            <li className="menuItem">
              <Link to={item.ref}>{item.name}</Link>
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
