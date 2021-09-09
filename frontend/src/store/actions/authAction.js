import { REGISTER_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from "../types";

export function registerAction(data) {
  return {
    type: REGISTER_REQUEST,
    data,
  };
}

export function loginAction(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

export function logoutAction(data) {
  return {
    type: LOGOUT_REQUEST,
    data,
  };
}
