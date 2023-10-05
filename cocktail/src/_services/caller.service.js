import axios from "axios";
import { accountService } from "./account.service";

const Axios = axios.create({
  baseURL: "https://localhost:8000/api",
});
/**
 * Intercepteur pour le token
 */
Axios.interceptors.request.use((request) => {
  if (accountService.isLogged()) {
    request.headers.Authorization = "Bearer " + accountService.getToken();
  }
  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accountService.logout();
      // on redirige vers la page de login
      window.location.href = "/auth/login";
    } else {
      return Promise.reject(error);
    }
  }
);
export default Axios;
