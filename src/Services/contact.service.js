import http from "./httpService";
import { apiUrl } from "../config.json";

const contact = apiUrl + "/contact/message";

export function sendEmail (user) {
  return http.post(contact, {
    username : user.username,
    email : user.email,
    subject : user.subject,
    message : user.message
  });
}