import { ADD_CART_REQUEST, MY_CART_REQUEST } from "../types";

export function myCartAction(data) {
  return {
    type: MY_CART_REQUEST,
    data,
  };
}

export function addCartAction(data) {
  return {
    type: ADD_CART_REQUEST,
    data,
  };
}
