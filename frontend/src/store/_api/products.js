import axios from "axios";

const productsInstance = axios.create({
  baseURL: "http://localhost:3001/products",
  withCredentials: true,
  timeout: 1000,
});

export function apiNewProducts() {
  return productsInstance.get("/?category=new");
}

export function apiBestProducts() {
  return productsInstance.get("/?category=best");
}
