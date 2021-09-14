import { MY_CART_REQUEST, ADD_CART_REQUEST, DELETE_CART_REQUEST } from "../types";

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
export function deleteCartAction(data) {
  return {
    type: DELETE_CART_REQUEST,
    data,
  };
}
