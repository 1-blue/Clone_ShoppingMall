import React from "react";
import styled from "styled-components";

// components
import RegisterForm from "../components/RegisteForm";

const TitleStyle = styled.h1`
  text-align: center;
  padding: 50px 0;
`;

const RegisterPage = () => {
  return (
    <main>
      <TitleStyle>회원가입</TitleStyle>
      <RegisterForm></RegisterForm>
    </main>
  );
};

export default RegisterPage;
