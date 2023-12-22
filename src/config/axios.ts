import axios from "axios";
import base_url from "./env";
import LocalStorage from "@/utils/localStorage";

const server = axios.create({
  baseURL: base_url,
  // withCredentials: true,
});
// Configure outbound request interceptor logic
server.interceptors.request.use(
  (request) => {
    const jwt = LocalStorage.getItem("jwt");
    if (jwt) {
      request.headers["Authorization"] = `Bearer ${jwt}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// Configure incoming response interceptor logic
server.interceptors.response.use(
  (response) => {
    // console.log("headers:", response.headers);
    return response;
  },
  (error) => Promise.reject(error)
);
export default server;
