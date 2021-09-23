import {
  LOAD_TO_ME_REQUEST,
  LOAD_TO_ME_SUCCESS,
  LOAD_TO_ME_FAILURE,
  RESET_MESSAGE,
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

const initState = {
  me: undefined,
  accessToken: null,
  refreshToken: null,

  // 로그인유지
  isLoadLoading: false,
  isLoadDone: null,
  isLoadError: null,

  // 회원가입
  isRegisterLoading: false,
  isRegisterDone: null,
  isRegisterError: null,

  // 로그인
  isLoginLoading: false,
  isLoginDone: null,
  isLoginError: null,

  // 로그아웃
  isLogoutLoading: false,
  isLogoutDone: null,
  isLogoutError: null,
};

function authReducer(prevState = initState, { type, data }) {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        isRegisterDone: null,
        isRegisterError: null,
        isLoginDone: null,
        isLoginError: null,
        isLogoutDone: null,
        isLogoutError: null,
      };

    // 로그인유지
    case LOAD_TO_ME_REQUEST:
      return {
        ...prevState,
        isLoadLoading: false,
        isLoadDone: null,
        isLoadError: null,
      };
    case LOAD_TO_ME_SUCCESS:
      return {
        ...prevState,
        isLoadLoading: false,
        isLoadDone: data.message,
        me: data.me,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
    case LOAD_TO_ME_FAILURE:
      return {
        ...prevState,
        isLoadLoading: false,
        isLoadError: null,
      };

    // 회원가입
    case REGISTER_REQUEST:
      return {
        ...prevState,
        isRegisterLoading: true,
        isRegisterDone: null,
        isRegisterError: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...prevState,
        isRegisterLoading: false,
        isRegisterDone: data.message,
      };
    case REGISTER_FAILURE:
      return {
        ...prevState,
        isRegisterLoading: false,
        isRegisterError: null,
      };

    // 로그인
    case LOGIN_REQUEST:
      return {
        ...prevState,
        isLoginLoading: true,
        isLoginDone: null,
        isLoginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        isLoginLoading: false,
        isLoginDone: data.message,
        me: data.me,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
    case LOGIN_FAILURE:
      return {
        ...prevState,
        isLoginLoading: false,
        isLoginError: data.message,
      };

    // 로그아웃
    case LOGOUT_REQUEST:
      return {
        ...prevState,
        isLogoutLoading: true,
        isLogoutDone: null,
        isLogoutError: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...prevState,
        isLogoutLoading: false,
        isLogoutDone: data.message,
        me: data.me,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
    case LOGOUT_FAILURE:
      return {
        ...prevState,
        isLogoutLoading: false,
        isLogoutError: null,
      };

    default:
      return prevState;
  }
}

export default authReducer;
