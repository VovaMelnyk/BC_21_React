import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import logger from "redux-logger";
// import { ownLogger } from "../logger";

// const middlewares = [logger];

// const rootMiddlewares = applyMiddleware(...middlewares);

// const compose = composeWithDevTools(rootMiddlewares);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });
