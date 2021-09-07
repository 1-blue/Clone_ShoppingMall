// 여러 사가들을 합쳐줌
import { all, fork } from "redux-saga/effects";

import userSage from "./userSaga";
import productSage from "./productSaga";

export default function* rootSaga() {
  yield all([fork(userSage), fork(productSage)]);
}
