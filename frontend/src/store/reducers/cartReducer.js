import {
  RESET_MESSAGE,
  MY_CART_REQUEST,
  MY_CART_SUCCESS,
  MY_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
} from "../types";

const initState = {
  cart: null,

  isCartLoading: false,
  isCartDone: null,
  isCartError: null,

  isAddCartLoading: false,
  isAddCartDone: null,
  isAddCartError: null,

  isDeleteCartLoading: false,
  isDeleteCartDone: null,
  isDeleteCartError: null,
};

function productReducer(prevState = initState, { type, data }) {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        isCartLoading: false,
        isCartDone: null,
        isCartError: null,
        isAddCartLoading: false,
        isAddCartDone: null,
        isAddCartError: null,
        isDeleteCartLoading: false,
        isDeleteCartDone: null,
        isDeleteCartError: null,
      };

    // 내 장바구니 불러오기
    case MY_CART_REQUEST:
      return {
        ...prevState,
        isCartLoading: true,
        isCartDone: null,
        isCartError: null,
      };
    case MY_CART_SUCCESS:
      return {
        ...prevState,
        isCartLoading: false,
        isCartDone: data.message,
        cart: data.cart,
      };
    case MY_CART_FAILURE:
      return {
        ...prevState,
        isCartLoading: false,
        isCartError: data.message,
      };

    // 상품 장바구니에 추가
    case ADD_CART_REQUEST:
      return {
        ...prevState,
        isAddCartLoading: false,
        isAddCartDone: null,
        isAddCartError: null,
      };
    case ADD_CART_SUCCESS:
      return {
        ...prevState,
        isAddCartLoading: false,
        isAddCartDone: data.message,
      };
    case ADD_CART_FAILURE:
      return {
        ...prevState,
        isAddCartLoading: false,
        isAddCartError: data.message,
      };

    // 내 장바구니 불러오기
    case DELETE_CART_REQUEST:
      return {
        ...prevState,
        isDeleteCartLoading: false,
        isDeleteCartDone: null,
        isDeleteCartError: null,
      };
    case DELETE_CART_SUCCESS:
      return {
        ...prevState,
        isDeleteCartLoading: false,
        isDeleteCartDone: data.message,
        cart: prevState.cart.filter(product => product._id !== data.ProductId),
      };
    case DELETE_CART_FAILURE:
      return {
        ...prevState,
        isDeleteCartLoading: false,
        isDeleteCartError: data.message,
      };

    default:
      return prevState;
  }
}

export default productReducer;
