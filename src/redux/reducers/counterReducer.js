import { RESET, DECREMENT, INCREMENT } from "../constants/counterConstants";

const initialState = 120;

// action = {
//   type: RESET,
// }

const count = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return 0;
    case DECREMENT:
      return state - action.payload;
    case INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
};

export default count;
