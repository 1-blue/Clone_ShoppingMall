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
  CHANGE_CART_REQUEST,
  CHANGE_CART_SUCCESS,
  CHANGE_CART_FAILURE,
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

  isChangeCartLoading: false,
  isChangeCartDone: null,
  isChangeCartError: null,
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
        isChangeCartLoading: false,
        isChangeCartDone: null,
        isChangeCartError: null,
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

    // 내 장바구니 상품하나 삭제
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

    // 내 장바구니 상품개수 변경
    case CHANGE_CART_REQUEST:
      return {
        ...prevState,
        isChangeCartLoading: false,
        isChangeCartDone: null,
        isChangeCartError: null,
      };
    case CHANGE_CART_SUCCESS:
      // 불변성 안지키는데 오류안남
      // 일단 방법을 잘모르겠어서 이대로 사용함
      prevState.cart.forEach(product => (product._id === data.ProductId ? (product.count = data.count) : null));

      return {
        ...prevState,
        isChangeCartLoading: false,
        isChangeCartDone: data.message,
      };
    case CHANGE_CART_FAILURE:
      return {
        ...prevState,
        isChangeCartLoading: false,
        isChangeCartError: data.message,
      };

    default:
      return prevState;
  }
}

export default productReducer;
