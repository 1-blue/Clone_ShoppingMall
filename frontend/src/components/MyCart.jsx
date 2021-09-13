import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// action
import { myProductAction } from "../store/actions";

const MyCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(myProductAction());
  }, []);

  return (
    <>
      <p>장바구니에 뭐가들었을까</p>
    </>
  );
};

export default MyCart;
