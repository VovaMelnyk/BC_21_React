import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";
import { logOutOperation } from "../../redux/operations/auth";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const logOut = () => {
    dispatch(logOutOperation(token));
  };
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
        <button onClick={logOut}>Log out</button>
      </nav>
    </header>
  );
};

export default Header;
