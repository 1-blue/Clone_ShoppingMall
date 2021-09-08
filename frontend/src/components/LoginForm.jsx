import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import useInput from "../hooks/useInput";

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

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      console.log("id >> ", id);
      console.log("password >> ", password);
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

export default LoginForm;
