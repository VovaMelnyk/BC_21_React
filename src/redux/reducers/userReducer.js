const initialState = {
  name: "Bob",
  age: 23,
  country: {
    id: 45,
    name: "Brazil",
    zipCode: 123567,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
