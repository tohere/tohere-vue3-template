import axios from "axios";

console.log(import.meta);
const http = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
});

http.interceptors.request.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
