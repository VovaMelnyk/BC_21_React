import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink to={navigation.login} className="nav__link">
          Login
        </NavLink>
        <NavLink to={navigation.registration} className="nav__link">
          Register
        </NavLink>
        <NavLink to={navigation.home} className="nav__link">
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
