import React, { Component } from "react";
import { withCredentials, request } from "../../helpers/request";
import Loader from "react-loader-spinner";
import ListItem from "../ListItem/ListItem";
import Form from "../Form/Form";
import Pagination from "@material-ui/lab/Pagination";

import "./List.css";

class List extends Component {
  state = {
    users: [],
    loader: true,
    error: false,
    currentPage: 1,
    perPage: 10,
    totalItemsCount: 1000,
  };

  async componentDidMount() {
    const { currentPage, perPage } = this.state;
    const url = withCredentials(
      `https://api.github.com/search/users?q=react&page=${currentPage}&per_page=${perPage}&`
    );
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
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, perPage } = this.state;
    const oldCurrentPage = prevState.currentPage;
    if (currentPage !== oldCurrentPage) {
      this.refreshUsers(currentPage, perPage);
    }
  }

  // componentDidMount() {
  //   const url = withCredentials(`https://api.github.com/search/users?q=react&`);
  //   request("get", url)
  //     .then((result) => {
  //       this.setState({
  //         users: result.items,
  //         loader: false,
  //       });
  //     })
  //     .catch(() => {
  //       this.setState({
  //         error: true,
  //         loader: false,
  //       });
  //     });
  // }

  refreshUsers = (currentPage, perPage) => {
    const url = withCredentials(
      `https://api.github.com/search/users?q=react&page=${currentPage}&per_page=${perPage}&`
    );
    this.loaderToggle(true);
    request("get", url)
      .then((result) => {
        this.updateUsers(result.items);
      })
      .catch((error) => {
        this.errorToggle(true);
      })
      .finally(() => {
        this.loaderToggle(false);
      });
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

  handleChange = (event, value) => {
    this.setState({
      currentPage: value,
    });
  };

  render() {
    const {
      users,
      loader,
      error,
      currentPage,
      totalItemsCount,
      perPage,
    } = this.state;

    return (
      <>
        <Form
          updateUsers={this.updateUsers}
          loaderToggle={this.loaderToggle}
          errorToggle={this.errorToggle}
        />
        <div className="container">
          {error && (
            <h1 className="error">
              Oppps something went wrong, try again later
            </h1>
          )}
          {loader && (
            <Loader
              type="Audio"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
          {!loader &&
            !error &&
            users.map((user) => <ListItem {...user} key={user.id} />)}
        </div>
        <Pagination
          count={Math.floor(totalItemsCount / perPage)}
          color="secondary"
          page={currentPage}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default List;
