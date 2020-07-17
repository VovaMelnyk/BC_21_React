import React from "react";
import List from "./Components/List/List";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID);
  console.log(process.env.REACT_APP_CLIENT_SECRET);

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
