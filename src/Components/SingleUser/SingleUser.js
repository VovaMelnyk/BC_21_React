/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { request, createSingleUserUrl } from "../../helpers/request";
import "./SingleUser.css";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const userName = useParams().name;
  const history = useHistory();

  useEffect(() => {
    const url = createSingleUserUrl(userName);
    request("get", url)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="user-container">
      <img
        src="/img/Back_Arrow.png"
        alt="arrow"
        className="back"
        onClick={goBack}
      />
      <h1>{user.login}</h1>
      <h3>{user.name}</h3>
      <h4>
        Email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </h4>
      <img src={user.avatar_url} alt={user.login} />
      {user.location && <p>Location: {user.location}</p>}
      <ul>
        <li>followers: {user.followers}</li>
        <li>following: {user.following}</li>
        <li>public repos: {user.public_repos}</li>
      </ul>
    </div>
  );
};

export default SingleUser;

// ["/user", "/repos/", "/user"];
