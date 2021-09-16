import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  MY_CART_REQUEST,
  MY_CART_SUCCESS,
  MY_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  CHANGE_CART_REQUEST,
  CHANGE_CART_SUCCESS,
  CHANGE_CART_FAILURE,
} from "../types";

import { apiMyCart, apiAddCart, apiDeleteCart, apiChangeCart } from "../_api";

function* myCart(action) {
  try {
    const { data } = yield call(apiMyCart, action.data);

    yield put({
      type: MY_CART_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: MY_CART_FAILURE,
      data: error.response.data,
    });
  }
}
function* addCart(action) {
  try {
    const { data } = yield call(apiAddCart, action.data);

    yield put({
      type: ADD_CART_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_CART_FAILURE,
      data: error.response.data,
    });
  }
}
function* deleteCart(action) {
  try {
    const { data } = yield call(apiDeleteCart, action.data);

    yield put({
      type: DELETE_CART_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: DELETE_CART_FAILURE,
      data: error.response.data,
    });
  }
}
function* changeCart(action) {
  try {
    const { data } = yield call(apiChangeCart, action.data);

    yield put({
      type: CHANGE_CART_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: CHANGE_CART_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchMyCart() {
  yield takeLatest(MY_CART_REQUEST, myCart);
}
function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart);
}
function* watchDeleteCart() {
  yield takeLatest(DELETE_CART_REQUEST, deleteCart);
}
function* watchChangeCart() {
  yield takeLatest(CHANGE_CART_REQUEST, changeCart);
}

export default function* cartSaga() {
  yield all([fork(watchMyCart), fork(watchAddCart), fork(watchDeleteCart), fork(watchChangeCart)]);
}
