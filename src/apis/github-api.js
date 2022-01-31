import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.timeout = 5000;
axios.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(error))
);

export const API = {
  fetchUsers: async () => await axios('/users'),
  getUserByName: async name => await axios(`/users/${name}`),
  getUserById: async id => await axios(`/user?id=${id}`),
};
