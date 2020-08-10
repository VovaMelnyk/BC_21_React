import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Registration from "./Containers/Registration/Registration";
import { navigation } from "./constants";
import "./App.css";
import Login from "./Containers/Login/Login";
import Header from "./Components/Header/Header";

function App() {
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
