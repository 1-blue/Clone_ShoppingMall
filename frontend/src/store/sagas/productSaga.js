import { all, call, fork, put, delay, takeLatest } from "redux-saga/effects";

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
} from "../types";

// import { apiNewProducts, apiBestProducts, apiDetailProduct } from "../../api";

// 임시데이터 ( 서버완성전까지 사용, 서버에서 보내는 데이터의 형식과 일치 )
const tempProducts = [
  {
    _id: 1,
    imgPath: "/images/products/1.jpg",
    name: "[숙박권] 웨스틴 조선 부산 이그제큐티브파크",
    price: 665550,
    description: "아름다운 바다를 마주한",
  },
  {
    _id: 2,
    imgPath: "/images/products/2.jpg",
    name: "[만나]국산 씨없는 청포도 500g",
    price: 7950,
    description: "아삭 달콤한 연두빛 구술",
  },
  {
    _id: 3,
    imgPath: "/images/products/3.jpg",
    name: "[김소영 아티장의 안단테]시에라 네바다 그래지어 할라피뇨 잭",
    price: 15600,
    description: "할라피뇨의 청량하고 스파이시한 킥",
  },
  {
    _id: 4,
    imgPath: "/images/products/4.jpg",
    name: "[비움반찬]김치볶음",
    price: 3900,
    description: "아삭함이 살아 있는 만능 반찬",
  },
];

// 임시데이터2
// 아무리봐도 형식이 많이 바뀔것 같음
const tempDetailProduct = [
  {
    _id: 1,
    imgPath: "/images/products/1.jpg",
    name: "[숙박권] 웨스틴 조선 부산 이그제큐티브파크",
    price: 665550,
    description: "아름다운 바다를 마주한",
    saleInfo: {
      saleingUnit: "1박",
      shippingCategory: "샛별배송/택배배송",
      packagingType: "기타",
      notification: "아무튼 숙박",
    },
  },
  {
    _id: 2,
    imgPath: "/images/products/2.jpg",
    name: "[만나]국산 씨없는 청포도 500g",
    price: 7950,
    description: "아삭 달콤한 연두빛 구술",
    saleInfo: {
      saleingUnit: "1팩",
      weight: "500g",
      shippingCategory: "샛별배송/택배배송",
      packagingType: "냉장/종이포장",
      notification: "아무튼 과일",
    },
  },
  {
    _id: 3,
    imgPath: "/images/products/3.jpg",
    name: "[김소영 아티장의 안단테]시에라 네바다 그래지어 할라피뇨 잭",
    price: 15600,
    description: "할라피뇨의 청량하고 스파이시한 킥",
    saleInfo: {
      saleingUnit: "1팩",
      weight: "255g",
      shippingCategory: "샛별배송/택배배송",
      packagingType: "냉장/종이포장",
      notification: "아무튼 치즈",
    },
  },
  {
    _id: 4,
    imgPath: "/images/products/4.jpg",
    name: "[비움반찬]김치볶음",
    price: 3900,
    description: "아삭함이 살아 있는 만능 반찬",
    saleInfo: {
      saleingUnit: "1팩",
      weight: "150g",
      shippingCategory: "샛별배송/택배배송",
      packagingType: "냉장/종이포장",
      notification: "아무튼 김치",
    },
  },
];

function* newProducts(action) {
  try {
    // const { data } = yield call(apiNewProducts, action.data);

    delay(1000);

    yield put({
      type: NEW_PRODUCTS_SUCCESS,
      data: tempProducts,
      //data,
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

    delay(1000);

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
    // const { data } = yield call(apiDetailProduct, action.data);

    // 원래는 서버에서 처리할 내용
    const data = tempDetailProduct.find(v => v._id === action.data._id);

    delay(1000);

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
  yield all([fork(watchNewProducts), fork(watchBestProducts), fork(watchDetailProducts)]);
}
