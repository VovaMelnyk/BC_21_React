import axios from "axios";

export const withCredentials = (url) => {
  return `${url}client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
};

export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};

export const createUserUrl = (search, page, perPage) => {
  return withCredentials(
    `https://api.github.com/search/users?q=${search}&page=${page}&per_page=${perPage}&`
  );
};

// export const request = (method, url, body = null) => {
//   return axios[method](url, body).then((response) => response.data);
// };
