import { createBrowserHistory } from "history";
import axios from "axios";

export const TOKEN_KEY = "token";
const history = createBrowserHistory();

axios.defaults.baseURL = "https://conduit.productionready.io/api";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        history.push("/register");
        break;
      case 404:
      case 403:
        history.push("/");
        break;
    }
    return Promise.reject(error.response);
  }
);

export function setToken(token: string | null) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

type JWTPayload = {
  id: string;
  username: string;
  exp: number;
};

export function isTokenValid(token: string) {
  try {
    const decoded_jwt: any = token;
    const current_time = Date.now().valueOf() / 1000;
    return decoded_jwt.exp > current_time;
  } catch (error) {
    return false;
  }
}

export default axios;
