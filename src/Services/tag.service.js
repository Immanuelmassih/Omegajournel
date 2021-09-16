import http from "./httpService";
import { apiUrl } from "../config.json";

const tag = apiUrl + "/tag/";
const tagDetail = apiUrl + "/tag/detail/";

export function tagList ( ) {
  return http.get(tag);
}

export function tagDetails ( id ) {
  return http.get(`${tagDetail}${id}`);
}