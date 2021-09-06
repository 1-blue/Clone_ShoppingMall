import React from "react";
import styled from "styled-components";

// components
import RegisterForm from "../components/RegisteForm";

const RegisterStyle = styled.section`
  width: 1050px;
  margin: auto;
`;
const TitleStyle = styled.h1`
  text-align: center;
  padding: 50px 0;
`;

const RegisterPage = () => {
  return (
    <RegisterStyle>
      <TitleStyle>회원가입</TitleStyle>
      <RegisterForm></RegisterForm>
    </RegisterStyle>
  );
};

export default RegisterPage;
