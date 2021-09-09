import axios from "axios";

const productInstance = axios.create({
  baseURL: "http://localhost:3001/product",
  withCredentials: true,
  timeout: 1000,
});

export function apiDetailProduct(body) {
  return productInstance.get(`/${body._id}`);
}
