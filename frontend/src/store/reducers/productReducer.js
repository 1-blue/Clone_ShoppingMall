import {
  RESET_MESSAGE,
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

const initState = {
  products: null,
  product: null,
  cart: null,

  // 상품 정보 불러오기
  isProductLoading: false,
  isProductDone: null,
  isProductError: null,

  // 상품 장바구니 관련 액션들 ( 추가, 삭제 )
  isProductActionLoading: false,
  isProductActionDone: null,
  isProductActionError: null,
};

function productReducer(prevState = initState, { type, data }) {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: null,
        isProductError: null,
        isProductActionLoading: false,
        isProductActionDone: null,
        isProductActionError: null,
      };

    // 신상품
    case NEW_PRODUCTS_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
        isProductDone: null,
        isProductError: null,
      };
    case NEW_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: data.message,
        products: data.products,
      };
    case NEW_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: data.message,
      };

    // 인기상품
    case BEST_PRODUCTS_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
        isProductDone: null,
        isProductError: null,
      };
    case BEST_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: null,
        products: data.products,
      };
    case BEST_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: null,
      };

    // 상품하나의 디테일정보
    case DETAIL_PRODUCT_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
        isProductDone: null,
        isProductError: null,
      };
    case DETAIL_PRODUCT_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: data.message,
        product: data.product,
      };
    case DETAIL_PRODUCT_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: data.message,
      };

    // 상품 장바구니에 추가
    case ADD_PRODUCT_REQUEST:
      return {
        ...prevState,
        isProductActionLoading: true,
        isProductActionDone: null,
        isProductActionError: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductActionDone: data.message,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductActionError: data.message,
      };

    // 내 장바구니 불러오기
    case MY_PRODUCT_REQUEST:
      return {
        ...prevState,
        isProductActionLoading: true,
        isProductActionDone: null,
        isProductActionError: null,
      };
    case MY_PRODUCT_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductActionDone: data.message,
        cart: data.cart,
      };
    case MY_PRODUCT_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductActionError: data.message,
      };

    default:
      return prevState;
  }
}

export default productReducer;
