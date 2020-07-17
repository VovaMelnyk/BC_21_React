import React, { Component } from "react";
import { withCredentials, request } from "../../helpers/request";
import Loader from "react-loader-spinner";
import ListItem from "../ListItem/ListItem";
import "./List.css";
class List extends Component {
  state = {
    users: [],
    loader: true,
    error: false,
    text: "",
  };

  async componentDidMount() {
    const url = withCredentials(`https://api.github.com/search/users?q=react&`);
    try {
      const result = await request("get", url);
      this.setState({
        users: result.items,
        loader: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        loader: false,
        text: error.message,
      });
    }
  }

  render() {
    const { users, loader, error, text } = this.state;

    if (error) {
      return <h1 className="error">{text}</h1>;
    }

    return (
      <div className="container">
        {loader ? (
          <Loader
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          users.map((user) => <ListItem {...user} key={user.id} />)
        )}
      </div>
    );
  }
}

export default List;
