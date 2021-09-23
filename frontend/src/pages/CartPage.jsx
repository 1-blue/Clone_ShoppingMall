import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// component
import MyCart from "../components/MyCart";

const CartTitleStyle = styled.h1`
  padding-top: 23px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const CartPage = () => {
  const { me } = useSelector(state => state.auth);

  if (!me) return <span>로그인후에 접근해주세요</span>;

  return (
    <>
      <CartTitleStyle>장바구니</CartTitleStyle>
      <MyCart></MyCart>
    </>
  );
};

export default CartPage;
