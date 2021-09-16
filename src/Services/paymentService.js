import http from "./httpService";
import { apiUrl } from "../config.json";

const orders  = apiUrl + "/payment/orders";
const success = apiUrl + "/payment/success";

export function Order(item) {
  return http.post(orders, item);
}

export function Success(data) {
  return http.post(success, {data});
}