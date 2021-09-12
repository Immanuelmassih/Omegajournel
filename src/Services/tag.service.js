import http from "./httpService";
import { apiUrl } from "../config.json";

const tag = apiUrl + "/tag/";

export function tagList ( ) {
  return http.get(tag);
}