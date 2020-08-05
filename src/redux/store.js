import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// import logger from "redux-logger";
// import { ownLogger } from "../logger";

// const middlewares = [logger];

// const rootMiddlewares = applyMiddleware(...middlewares);

// const compose = composeWithDevTools(rootMiddlewares);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });

export default store;
