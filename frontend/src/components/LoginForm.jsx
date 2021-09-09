import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import useInput from "../hooks/useInput";

// action
import { resetMessageAction, loginAction } from "../store/actions";

const LoginFormStlye = styled.form`
  padding-top: 36px;
`;
const InputTextStyle = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 14px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  background: #fff;
  font-size: 1rem;
  line-height: 20px;
  outline: none;
  &:focus {
    outline: 1px solid black;
  }
  &::placeholder {
    color: #ccc;
    font-size: 0.85rem;
  }
`;
const LoginBtnStyle = styled.button`
  width: 100%;
  height: 54px;
  margin-top: 10px;
  background: #5f0080;
  color: #fff;
  border-radius: 4px;
`;
const RegisterBtnStyle = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 54px;
  margin-top: 10px;
  color: #5f0080;
  border: 1px solid #5f0080;
  border-radius: 4px;
  text-align: center;
  line-height: 54px;
`;

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { isLoginDone, isLoginError } = useSelector(state => state.auth);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  // 로그인 성공 메시지 + 홈이동
  useEffect(() => {
    if (isLoginDone) {
      alert(isLoginDone);
      dispatch(resetMessageAction());
      history.push("/");
    }
  }, [isLoginDone]);

  // 로그인 실패 메시지
  useEffect(() => {
    if (isLoginError) {
      alert(isLoginError);
    }
  }, [isLoginError]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(loginAction({ id, password }));
    },
    [id, password],
  );

  return (
    <LoginFormStlye onSubmit={onSubmit}>
      <label htmlFor="id" hidden>
        아이디
      </label>
      <InputTextStyle type="text" id="id" placeholder="아이디를 입력해주세요" onChange={onChangeId} value={id} />
      <label htmlFor="id" hidden>
        비밀번호
      </label>
      <InputTextStyle
        type="password"
        id="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangePassword}
        value={password}
      />

      <LoginBtnStyle type="submit">로그인</LoginBtnStyle>
      <RegisterBtnStyle to="/register">회원가입</RegisterBtnStyle>
    </LoginFormStlye>
  );
};

export default withRouter(LoginForm);
