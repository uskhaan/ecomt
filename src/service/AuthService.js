import axios from "axios";
import {
  HTTP_CLIENT,
  ENDPOINTS,
  header,
  BASE_URL,
  GetToken,
} from "../utilities";

export const loginApi = async (params) => {
  // return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${await GetToken()}`,
    },
  });
  return res;
};

export const logoutApi = async (params) => {
  // return HTTP_CLIENT.post(ENDPOINTS.LOGOUT, params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGOUT}`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${await GetToken()}`,
    },
  });
  return res;
};
