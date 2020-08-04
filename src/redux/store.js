// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
