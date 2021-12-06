import React from "react";
import "../../attributes/styles/NavBar.css";
import MainLogo from "../../attributes/img/logo-store.png";
import CartWidget from "../CartWidget/index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Fiction", ref: "/category/fiction", id:"1" },
    { name: "Non-Fiction", ref: "/category/non-fiction", id:"2" },
    { name: "FAQ", ref: "/", id:"3" },
  ];

  return (
    <nav>
      <ul className="menuBar">
        <li className="logo">
          <Link to={"/"}>
            <img src={MainLogo} alt="store" />
          </Link>
        </li>
        {menu.map((menuItem) => {
          return (
            <li key={menuItem.id} className="menuItem">
              <Link to={menuItem.ref}>{menuItem.name}</Link>
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
