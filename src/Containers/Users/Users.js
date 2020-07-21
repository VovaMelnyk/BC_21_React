import React, { Component } from "react";
import Form from "../../Components/Form/Form";
import List from "../../Components/List/List";
import Loader from "react-loader-spinner";
import { request, createUserUrl } from "../../helpers/request";
class Users extends Component {
  state = {
    users: [],
    loader: true,
    error: false,
    search: "",
    page: 1,
    perPage: 12,
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async (search = "react") => {
    const { page, perPage } = this.state;

    const URL = createUserUrl(search, page, perPage);

    try {
      const result = await request("get", URL);
      this.updateUsers(result.items);
      this.errorToggle(false);
    } catch (error) {
      this.errorToggle(true);
    } finally {
      this.loaderToggle(false);
    }
  };

  updateUsers = (users) => {
    this.setState({
      users,
    });
  };

  loaderToggle = (status) => {
    this.setState({
      loader: status,
    });
  };

  errorToggle = (status) => {
    this.setState({
      error: status,
    });
  };

  render() {
    const { loader, error, users, search } = this.state;
    return (
      <div>
        {loader && <Loader type="ThreeDots" />}
        {!loader && !error && (
          <>
            <Form />
            <List users={users} />
          </>
        )}
        {error && <h1>Something went wrong, try again later</h1>}
      </div>
    );
  }
}

export default Users;
