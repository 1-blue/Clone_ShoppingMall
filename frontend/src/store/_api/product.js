import axios from "axios";

const productInstance = axios.create({
  baseURL: "http://localhost:3000/product",
  withCredentials: true,
  timeout: 1000,
});

export async function apiDetailProduct(body) {
  try {
    const { data } = productInstance.get(`/${body._id}`);
  } catch (error) {
    throw error;
  }
}
