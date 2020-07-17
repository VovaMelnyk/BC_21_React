import React from "react";
import "./ListItem.css";
const ListItem = ({ avatar_url, login, type }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt={login} className="card__img" />
      <h2 className="card__title">{login}</h2>
      <p className="card__text">{type}</p>
    </div>
  );
};

export default ListItem;
