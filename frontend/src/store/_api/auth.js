import axios from "axios";
import store from "../configureStore";

const authInstance = axios.create({
  baseURL: "http://localhost:3001/auth",
  withCredentials: true,
  timeout: 1000,
});

const myRequestInterceptor = authInstance.interceptors.request.use(
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

export function apiLoadToMe() {
  return authInstance.get("/load");
}

export function apiRegister(body) {
  return authInstance.post("/register", body);
}

export function apiLogin(body) {
  return authInstance.post("/login", body);
}

export function apiLogout() {
  return authInstance.delete("/logout");
}
