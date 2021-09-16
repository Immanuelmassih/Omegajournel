import http from "./httpService";
import { apiUrl } from "../config.json";

const registerUser = apiUrl + "/user/add";
const loginUser = apiUrl + "/user/login";
const forgotUser = apiUrl + "/user/forgot";
const resetUser = apiUrl + "/user/reset";
const ProfileUser = apiUrl + "/user/avatar/";

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

export function uploadImage (user) {
  const config = {headers: {'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Cache-Control': 'max-age=0','Cookie': document.cookie}}
  let data = new FormData();
  data.append('image', user.image);
  return http.post(`${ProfileUser}${user.authorId}`, data , config);
}