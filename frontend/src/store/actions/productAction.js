import { NEW_PRODUCTS_REQUEST, BEST_PRODUCTS_REQUEST } from "../types";

export function newProductAction(data) {
  return {
    type: NEW_PRODUCTS_REQUEST,
    data,
  };
}

export function bestProductAction(data) {
  return {
    type: BEST_PRODUCTS_REQUEST,
    data,
  };
}
