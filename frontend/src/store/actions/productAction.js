import {
  NEW_PRODUCTS_REQUEST,
  BEST_PRODUCTS_REQUEST,
  DETAIL_PRODUCT_REQUEST,
  ADD_PRODUCT_REQUEST,
  MY_PRODUCT_REQUEST,
} from "../types";

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

// 장바구니
export function addProductAction(data) {
  return {
    type: ADD_PRODUCT_REQUEST,
    data,
  };
}
export function myProductAction(data) {
  return {
    type: MY_PRODUCT_REQUEST,
    data,
  };
}
