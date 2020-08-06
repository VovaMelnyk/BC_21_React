export const userSelector = (state) => state.user;

export const userNameSelector = (state) => userSelector(state).name;

export const userCountrySelector = (state) => userSelector(state).country.name;

export const userZipCodeSelector = (state) =>
  userSelector(state).country.zipCode;
