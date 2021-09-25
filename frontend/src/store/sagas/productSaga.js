import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  LOAD_MAIN_IMAGES_REQUEST,
  LOAD_MAIN_IMAGES_SUCCESS,
  LOAD_MAIN_IMAGES_FAILURE,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  NEW_PRODUCTS_REQUEST,
  NEW_PRODUCTS_SUCCESS,
  NEW_PRODUCTS_FAILURE,
  BEST_PRODUCTS_REQUEST,
  BEST_PRODUCTS_SUCCESS,
  BEST_PRODUCTS_FAILURE,
  DETAIL_PRODUCT_REQUEST,
  DETAIL_PRODUCT_SUCCESS,
  DETAIL_PRODUCT_FAILURE,
} from "../types";

import { apiLoadMainImages, apiAllProducts, apiNewProducts, apiBestProducts, apiDetailProduct } from "../_api";

function* loadMainImages(action) {
  try {
    const { data } = yield call(apiLoadMainImages, action.data);

    yield put({
      type: LOAD_MAIN_IMAGES_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_MAIN_IMAGES_FAILURE,
      data: error.response.data,
    });
  }
}

function* allProducts(action) {
  try {
    const { data } = yield call(apiAllProducts, action.data);

    yield put({
      type: ALL_PRODUCTS_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ALL_PRODUCTS_FAILURE,
      data: error.response.data,
    });
  }
}

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
    const { data } = yield call(apiBestProducts, action.data);

    yield put({
      type: BEST_PRODUCTS_SUCCESS,
      data,
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

function* watchLoadMainImages() {
  yield takeLatest(LOAD_MAIN_IMAGES_REQUEST, loadMainImages);
}
function* watchAllProducts() {
  yield takeLatest(ALL_PRODUCTS_REQUEST, allProducts);
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

export default function* productSaga() {
  yield all([
    fork(watchLoadMainImages),
    fork(watchAllProducts),
    fork(watchNewProducts),
    fork(watchBestProducts),
    fork(watchDetailProducts),
  ]);
}
