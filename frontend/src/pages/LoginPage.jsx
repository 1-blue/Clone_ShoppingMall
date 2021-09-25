import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const LoginStyle = styled.main`
  width: 340px;
  margin: auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
`;
const LoginPageTitleStyle = styled.h1`
  text-align: center;
`;

const LoginPage = () => {
  return (
    <LoginStyle>
      <LoginPageTitleStyle>로그인</LoginPageTitleStyle>
      <LoginForm />
    </LoginStyle>
  );
};

export default LoginPage;
