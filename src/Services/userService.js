import http from "./httpService";
import { apiUrl } from "../config.json";

const registerUser = apiUrl + "/user/add";
const loginUser = apiUrl + "/user/login";
const forgotUser = apiUrl + "/user/forgot";
const resetUser = apiUrl + "/user/reset";

export function register(user) {
  return http.post(registerUser, {
    email: user.email,
    password: user.password,
    name: user.name,
    terms : user.terms
  });
}

export function login (user) {
  return http.post(loginUser, {
    email : user.email,
    password : user.password
  });
}

export function forgot (user) {
  return http.post(forgotUser, {
    email : user.email
  });
}

export function reset (user) {
  return http.post(`${resetUser}/${user.id}`, {
    password : user.password,
    ConfirmPassword : user.ConfirmPassword
  });
}