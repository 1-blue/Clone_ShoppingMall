import {
  NEW_PRODUCTS_REQUEST,
  NEW_PRODUCTS_SUCCESS,
  NEW_PRODUCTS_FAILURE,
  BEST_PRODUCTS_REQUEST,
  BEST_PRODUCTS_SUCCESS,
  BEST_PRODUCTS_FAILURE,
} from "../types";

const initState = {
  products: null,
  isProductLoading: false,
  isProductDone: null,
  isProductError: null,
};

function productReducer(prevState = initState, { type, data }) {
  switch (type) {
    // 신상품
    case NEW_PRODUCTS_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
      };
    case NEW_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: null,
        products: data,
      };
    case NEW_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: null,
      };

    // 인기상품
    case BEST_PRODUCTS_REQUEST:
      return {
        ...prevState,
        isProductLoading: true,
      };
    case BEST_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isProductLoading: false,
        isProductDone: null,
        products: data,
      };
    case BEST_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isProductLoading: false,
        isProductError: null,
      };

    default:
      return prevState;
  }
}

export default productReducer;
