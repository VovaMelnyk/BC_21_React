import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Registration from "./Containers/Registration/Registration";
import { navigation } from "./constants";
import "./App.css";
import Login from "./Containers/Login/Login";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.token);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push(navigation.home);
    } else {
      history.push(navigation.login);
    }
  }, [history, token]);

  return (
    <div className="App">
      <>
        <Header />
        <Switch>
          <Route exact path={navigation.home} component={Home} />
          <Route path={navigation.registration} component={Registration} />
          <Route path={navigation.login} component={Login} />
        </Switch>
      </>
    </div>
  );
}

export default App;
