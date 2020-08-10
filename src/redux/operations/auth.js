import axios from "axios";
import { loaderOff, loaderOn } from "../actions/loaderActions";
import { setError, resetError } from "../actions/errorActions";
import { setToken, resetToken } from "../actions/tokeAction";

export const registerOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/signup",
      userData
    );
    console.log("registerResult", result);
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("register error"));
  } finally {
    dispatch(loaderOff());
  }
};

export const loginOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/login",
      userData
    );
    console.log("loginResult", result);
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("login error"));
  } finally {
    dispatch(loaderOff());
  }
};

export const logOutOperation = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "https://goit-phonebook-api.herokuapp.com/users/logout",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("logoutResult", result);
    dispatch(resetToken());
  } catch (error) {
    dispatch(setError("login error"));
  } finally {
    dispatch(loaderOff());
  }
};
