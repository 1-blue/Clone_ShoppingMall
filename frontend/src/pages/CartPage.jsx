import React from "react";
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
  return (
    <>
      <CartTitleStyle>장바구니</CartTitleStyle>
      <MyCart></MyCart>
    </>
  );
};

export default CartPage;
