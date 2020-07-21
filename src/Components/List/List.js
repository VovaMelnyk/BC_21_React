import React from "react";
import ListItem from "../ListItem/ListItem";

import "./List.css";

const List = ({ users }) => {
  return (
    <>
      <div className="container">
        {users.map((user) => (
          <ListItem {...user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default List;
