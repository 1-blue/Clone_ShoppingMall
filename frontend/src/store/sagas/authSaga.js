import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../types";

import { apiRegister, apiLogin, apiLogout } from "../_api/index";

function* register(action) {
  try {
    const { data } = yield call(apiRegister, action.data);
    console.log("saga data >> ", data);

    yield put({
      type: REGISTER_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: REGISTER_FAILURE,
      data: error.response.data,
    });
  }
}

function* login(action) {
  try {
    const { data } = yield call(apiLogin, action.data);

    yield put({
      type: LOGIN_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_FAILURE,
      data: error.response.data,
    });
  }
}

function* logout() {
  try {
    const { data } = yield call(apiLogout);

    yield put({
      type: LOGOUT_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGOUT_FAILURE,
      data: error.response.data,
    });
  }
}
function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, register);
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* authSaga() {
  yield all([fork(watchRegister), fork(watchLogin), fork(watchLogout)]);
}
