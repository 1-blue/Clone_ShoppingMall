import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_TO_ME_REQUEST,
  LOAD_TO_ME_SUCCESS,
  LOAD_TO_ME_FAILURE,
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

import { apiLoadToMe, apiRegister, apiLogin, apiLogout } from "../_api/index";

function* loadToMe(action) {
  try {
    const { data } = yield call(apiLoadToMe, action.data);

    yield put({
      type: LOAD_TO_ME_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_TO_ME_FAILURE,
      data: error.response.data,
    });
  }
}

function* register(action) {
  try {
    const { data } = yield call(apiRegister, action.data);

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

function* watchLoad() {
  yield takeLatest(LOAD_TO_ME_REQUEST, loadToMe);
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
  yield all([fork(watchLoad), fork(watchRegister), fork(watchLogin), fork(watchLogout)]);
}
