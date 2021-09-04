import http from "./httpService";
import { apiUrl } from "../config.json";

const orders  = apiUrl + "/payment/orders";
const success = apiUrl + "/payment/success";

export function Order() {
  return http.post(orders);
}

export function Success(data) {
  return http.post(success, {data});
}