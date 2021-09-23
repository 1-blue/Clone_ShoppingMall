import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { loadToMeAction } from "../store/actions";

const AuthHoc = (SpecificComponent, option, adminRoute = null) => {
  /**
   * option값
   * true : 로그인시 출압가능
   * false : 비로그인시 출입가능
   * null : 아무나 출입가능
   *
   * adminRoute값
   * true : 관리자계정
   */
  return function AuthenticationCheck({ history }) {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.auth);

    useEffect(() => {
      dispatch(loadToMeAction());
    }, []);

    useEffect(() => {
      if (me === undefined) return;

      if (!me && option === true) {
        // 로그인시 입장가능
        alert("로그인후에 접근해주세요");
        return history.push("/login");
      }

      // 비로그인시 입장가능
      if (me && option === false) {
        alert("로그아웃후에 접근해주세요");
        return history.push("/");
      }

      // 로그인상태 && 로그인시 입장가능 페이지
      if (!me && adminRoute) {
        return history.push("/");
      }
    }, [me]);

    return <SpecificComponent />;
  };
};

export default AuthHoc;
