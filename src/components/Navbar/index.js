import { LogoSVG } from "assets/images";
import Signin from "components/Signin";
import React from "react";
import { Link } from "react-router-dom";
import routes from "routes";
import "styles/Navbar.scss";

function GetRoutesList() {
  return (
    <>
      {routes.map((route) => (
        <li className="header__list-item" key={route.title}>
          <Link className="header__link" to={route.path}>
            {route.title}
          </Link>
        </li>
      ))}
    </>
  );
}

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__wrapper">
          <Link to="/" className="header__logo">
            <LogoSVG />
          </Link>
          <ul className="header__list">
            {GetRoutesList()}
            <Signin />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
