export const SET_ERROR = "@error/set";
export const RESET_ERROR = "@error/reset";

export const setError = (text) => ({
  type: SET_ERROR,
  payload: text,
});

export const resetError = () => ({
  type: RESET_ERROR,
});
