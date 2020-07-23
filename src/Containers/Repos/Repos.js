import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Private from "../../Components/Private/Private";
import Public from "../../Components/Public/Public";
import "./Repos.css";
const Repos = ({ match, title }) => {
  const { path } = match;
  const matchWithHooks = useRouteMatch();
  const hookPath = matchWithHooks.path;
  return (
    <div>
      <h1>{title}</h1>
      <ul className="sub-menu">
        <li className="sub-menu__item">
          <NavLink to={`${path}/public`} className="sub-menu__link">
            Public
          </NavLink>
        </li>
        <li className="sub-menu__item">
          <NavLink to={`${hookPath}/private`} className="sub-menu__link">
            Private
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/public`} component={Public} />
        <Route path={`${hookPath}/private`} component={Private} />
      </Switch>
    </div>
  );
};

export default Repos;
