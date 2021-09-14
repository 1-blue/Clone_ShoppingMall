import {
  EXIT_PRODUCT_DETAIL_PAGE,
  NEW_PRODUCTS_REQUEST,
  BEST_PRODUCTS_REQUEST,
  DETAIL_PRODUCT_REQUEST,
} from "../types";

export function exitProductDatailPageAction(data) {
  return {
    type: EXIT_PRODUCT_DETAIL_PAGE,
    data,
  };
}
export function newProductsAction(data) {
  return {
    type: NEW_PRODUCTS_REQUEST,
    data,
  };
}
export function bestProductsAction(data) {
  return {
    type: BEST_PRODUCTS_REQUEST,
    data,
  };
}
export function detailProductAction(data) {
  return {
    type: DETAIL_PRODUCT_REQUEST,
    data,
  };
}
