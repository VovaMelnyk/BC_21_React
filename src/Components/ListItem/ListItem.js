import React from "react";
import { useHistory } from "react-router-dom";
import "./ListItem.css";
const ListItem = ({ avatar_url, login, type, name, owner }) => {
  const history = useHistory();

  const redirectToUserPage = () => {
    history.push(`/users/${login}`);
  };

  return (
    <div className="card" onClick={redirectToUserPage}>
      <img
        src={avatar_url ? avatar_url : owner.avatar_url}
        alt={login ? login : name}
        className="card__img"
      />
      <h2 className="card__title">{login ? login : name}</h2>
      <p className="card__text">{type ? type : owner.login}</p>
    </div>
  );
};

export default ListItem;
