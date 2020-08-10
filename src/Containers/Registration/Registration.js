import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";
import { useDispatch } from "react-redux";
import { registerOperation } from "../../redux/operations/auth";
import "./Registration.css";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(registerOperation(form));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className="register-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={inputHandler}
          value={form.name}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={inputHandler}
          value={form.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={inputHandler}
          value={form.password}
        />
        <button>Sign up</button>
        <p>
          If you already have an account please{" "}
          <NavLink to={navigation.login}>log in</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Registration;
