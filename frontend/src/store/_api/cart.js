import axios from "axios";
import store from "../configureStore";

const cartInstance = axios.create({
  baseURL: "http://localhost:3001/cart",
  withCredentials: true,
  timeout: 1000,
});

const myRequestInterceptor = cartInstance.interceptors.request.use(
  config => {
    const { accessToken, refreshToken } = store.getState(state => state).auth;

    // 토큰들이 존재하면 토큰도 넣어서 전달
    if (accessToken && refreshToken) config.headers.Authorization = accessToken + " " + refreshToken;

    return config;
  },
  error => {
    console.log("오류 요청을 보내기전 호출됨");
    return Promise.reject(error);
  },
);

export function apiMyCart() {
  return cartInstance.get("/");
}
export function apiAddCart(body) {
  return cartInstance.post("/", body);
}
export function apiDeleteCart(ProductId) {
  return cartInstance.delete(`/${ProductId}`);
}
export function apiChangeCart(body) {
  return cartInstance.patch("/", body);
}
