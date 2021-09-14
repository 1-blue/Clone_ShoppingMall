import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// action
import { myCartAction } from "../store/actions";

const MyCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(myCartAction());
  }, []);

  return (
    <>
      <p>장바구니에 뭐가들었을까</p>
    </>
  );
};

export default MyCart;
