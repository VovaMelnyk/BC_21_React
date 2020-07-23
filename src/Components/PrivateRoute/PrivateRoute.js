import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ markup, ...rest }) => {
  const Interface = markup;
  const isAuth = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Interface {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
