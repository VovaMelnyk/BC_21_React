import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
// import Home from "./Containers/Home/Home";
// import Users from "./Containers/Users/Users";
// import Repos from "./Containers/Repos/Repos";
// import SingleUser from "./Components/SingleUser/SingleUser";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import "./App.css";

const Home = lazy(() => import("./Containers/Home/Home"));
const Users = lazy(() => import("./Containers/Users/Users"));
const Repos = lazy(() => import("./Containers/Repos/Repos"));
const SingleUser = lazy(() => import("./Components/SingleUser/SingleUser"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:name" component={SingleUser} />
          {/* <Route path="/repos" component={Repos} /> */}
          {/* <Route
            path="/repos"
            render={(props) => <Repos {...props} title="Github Repos Page" />}
          /> */}
          <PrivateRoute path="/repos" markup={Repos} title="" />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
