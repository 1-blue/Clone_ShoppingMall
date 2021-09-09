import axios from "axios";

const productsInstance = axios.create({
  baseURL: "http://localhost:3001/products",
  withCredentials: true,
  timeout: 1000,
});

export function apiNewProducts(body) {
  return productsInstance.get("/?category=new");
}

export function apiBestProducts(body) {
  return productsInstance.get("/?category=best");
}
