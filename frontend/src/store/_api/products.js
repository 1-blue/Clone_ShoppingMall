import axios from "axios";

const productsInstance = axios.create({
  baseURL: "http://localhost:3000/products",
  withCredentials: true,
  timeout: 1000,
});

export async function apiNewProducts(body) {
  try {
    const { data } = productsInstance.get("/?category=new");
  } catch (error) {
    throw error;
  }
}

export async function apiBestProducts(body) {
  try {
    const { data } = productsInstance.get("/?category=best");
  } catch (error) {
    throw error;
  }
}
