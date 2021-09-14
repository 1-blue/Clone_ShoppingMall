import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  MY_CART_REQUEST,
  MY_CART_SUCCESS,
  MY_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
} from "../types";

import { apiMyCart, apiAddCart } from "../_api";

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

function* watchMyCart() {
  yield takeLatest(MY_CART_REQUEST, myCart);
}
function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart);
}

export default function* cartSaga() {
  yield all([fork(watchMyCart), fork(watchAddCart)]);
}
