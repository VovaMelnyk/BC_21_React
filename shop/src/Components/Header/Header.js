import React from "react";
// import "./Header.css";

const headerStyle = {
  minHeight: "60px",
  backgroundColor: "#000",
};

const titleStyle = {
  color: "#fff",
};

const Header = () => {
  return (
    <header className="header" style={headerStyle}>
      <h1 style={titleStyle}>Shop Header</h1>
    </header>
  );
};

export default Header;
