import { diff } from "deep-object-diff";

export const ownLogger = (store) => (next) => (action) => {
  console.group("action", action.type);
  const prevState = store.getState();
  console.log("PrevState", prevState);
  console.info("action", action);
  next(action);
  const newState = store.getState();
  console.log("newState", newState);
  console.info("Diff", diff(prevState, newState));
  console.groupEnd();
};

// function ownLogger(store) {
//   // logic
//   return function (next) {
//     // logic next store
//     return function (action) {
//       // store, next, action
//       console.log("object");
//       return;
//     };
//   };
// }

// const  actionFetch => (info) => async (dispatch) => {
//     const result = await Axios.post(URL/info)
//     dispatch(setData)

// }
