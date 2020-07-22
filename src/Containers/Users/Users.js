import React, { Component } from "react";
import queryString from "query-string";
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
    const { location } = this.props;
    const params = queryString.parse(location.search);
    if (Object.keys(params).length) {
      this.getUsers(params.userName);
    } else {
      this.getUsers();
    }
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
    this.setState((prev) => ({
      users: [...prev.users, ...users],
    }));
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

  inputHandler = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  resetForm = () => {
    this.setState({
      search: "",
    });
  };

  render() {
    const { loader, error, users, search } = this.state;
    return (
      <div>
        {loader && <Loader type="ThreeDots" />}
        {!loader && !error && (
          <>
            <Form
              search={search}
              inputHandler={this.inputHandler}
              getUsers={this.getUsers}
              resetForm={this.resetForm}
            />
            <List users={users} />
          </>
        )}
        {error && <h1>Something went wrong, try again later</h1>}
      </div>
    );
  }
}

export default Users;
