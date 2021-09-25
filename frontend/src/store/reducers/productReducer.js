import {
  RESET_MESSAGE,
  EXIT_PRODUCT_DETAIL_PAGE,
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

const initState = {
  products: null,
  product: null,
  mainImages: null,

  // 상품 정보 불러오기
  isProductLoading: false,
  isProductDone: null,
  isProductError: null,
};

function productReducer(prevState = initState, { type, data }) {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: null,
        isProductError: null,
      };
    case EXIT_PRODUCT_DETAIL_PAGE:
      return {
        ...prevState,
        product: null,
      };

    // 메인이미지 받기
    case LOAD_MAIN_IMAGES_REQUEST:
      return {
        ...prevState,
      };
    case LOAD_MAIN_IMAGES_SUCCESS:
      return {
        ...prevState,
        mainImages: data.mainImages,
      };
    case LOAD_MAIN_IMAGES_FAILURE:
      return {
        ...prevState,
      };

    // 모든상품
    case ALL_PRODUCTS_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
        isProductDone: null,
        isProductError: null,
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: data.message,
        products: data.products,
      };
    case ALL_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: data.message,
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

    default:
      return prevState;
  }
}

export default productReducer;
