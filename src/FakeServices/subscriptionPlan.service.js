import http from "./httpService";
import { apiUrl } from "../config.json";

const plans = apiUrl + "/plan/";

export function getPlans() {
  return http.get(plans);
}