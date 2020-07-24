import React from "react";
import withAuth from "../../hoc/withAuth";
import "./Header.css";
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

// export default withAuth(Header);

export default Header;
