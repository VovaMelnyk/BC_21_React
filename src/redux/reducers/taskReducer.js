import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants/taskConstant";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((task) => task.id !== action.payload);
    case EDIT_ITEM:
      return state.map((el) =>
        el.id !== action.payload ? el : { ...el, status: true }
      );
    default:
      return state;
  }
};
