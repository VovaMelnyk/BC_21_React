import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Users from "./Containers/Users/Users";
import Repos from "./Containers/Repos/Repos";
import SingleUser from "./Components/SingleUser/SingleUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:name" component={SingleUser} />
        <Route path="/repos" component={Repos} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
