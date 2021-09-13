import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  NEW_PRODUCTS_REQUEST,
  NEW_PRODUCTS_SUCCESS,
  NEW_PRODUCTS_FAILURE,
  BEST_PRODUCTS_REQUEST,
  BEST_PRODUCTS_SUCCESS,
  BEST_PRODUCTS_FAILURE,
  DETAIL_PRODUCT_REQUEST,
  DETAIL_PRODUCT_SUCCESS,
  DETAIL_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  MY_PRODUCT_REQUEST,
  MY_PRODUCT_SUCCESS,
  MY_PRODUCT_FAILURE,
} from "../types";

import { apiNewProducts, apiBestProducts, apiDetailProduct, apiAddProduct, apiMyProducts } from "../_api";

function* newProducts(action) {
  try {
    const { data } = yield call(apiNewProducts, action.data);

    yield put({
      type: NEW_PRODUCTS_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: NEW_PRODUCTS_FAILURE,
      data: error.response.data,
    });
  }
}

function* bestProducts(action) {
  try {
    // const { data } = yield call(apiBestProducts, action.data);

    yield put({
      type: BEST_PRODUCTS_SUCCESS,
      //data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: BEST_PRODUCTS_FAILURE,
      data: error.response.data,
    });
  }
}

function* detailProduct(action) {
  try {
    const { data } = yield call(apiDetailProduct, action.data);

    yield put({
      type: DETAIL_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: DETAIL_PRODUCT_FAILURE,
      data: error.response.data,
    });
  }
}

// 장바구니
function* addProduct(action) {
  try {
    const { data } = yield call(apiAddProduct, action.data);

    yield put({
      type: ADD_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_PRODUCT_FAILURE,
      data: error.response.data,
    });
  }
}
function* myProduct(action) {
  try {
    const { data } = yield call(apiMyProducts, action.data);

    yield put({
      type: MY_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: MY_PRODUCT_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchNewProducts() {
  yield takeLatest(NEW_PRODUCTS_REQUEST, newProducts);
}
function* watchBestProducts() {
  yield takeLatest(BEST_PRODUCTS_REQUEST, bestProducts);
}
function* watchDetailProducts() {
  yield takeLatest(DETAIL_PRODUCT_REQUEST, detailProduct);
}
function* watchAddProducts() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
}
function* watchMyProducts() {
  yield takeLatest(MY_PRODUCT_REQUEST, myProduct);
}

export default function* productSaga() {
  yield all([
    fork(watchNewProducts),
    fork(watchBestProducts),
    fork(watchDetailProducts),
    fork(watchAddProducts),
    fork(watchMyProducts),
  ]);
}
