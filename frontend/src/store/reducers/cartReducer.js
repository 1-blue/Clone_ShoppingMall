import {
  RESET_MESSAGE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  MY_CART_REQUEST,
  MY_CART_SUCCESS,
  MY_CART_FAILURE,
} from "../types";

const initState = {
  cart: null,

  // 상품 장바구니 관련 액션들 ( 추가, 삭제 )
  isCartLoading: false,
  isCartDone: null,
  isCartError: null,
};

function productReducer(prevState = initState, { type, data }) {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        isCartLoading: false,
        isCartDone: null,
        isCartError: null,
      };

    // 상품 장바구니에 추가
    case ADD_CART_REQUEST:
      return {
        ...prevState,
        isCartLoading: true,
        isCartDone: null,
        isCartError: null,
      };
    case ADD_CART_SUCCESS:
      return {
        ...prevState,
        isCartLoading: false,
        isCartDone: data.message,
      };
    case ADD_CART_FAILURE:
      return {
        ...prevState,
        isCartLoading: false,
        isCartError: data.message,
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

    default:
      return prevState;
  }
}

export default productReducer;
