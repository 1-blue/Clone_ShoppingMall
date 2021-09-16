import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// hooks
import useCheck from "../hooks/useCheck";

// action
import { resetMessageAction, myCartAction } from "../store/actions";

// components
import CartMenu from "./common/CartMenu";
import CartContent from "./common/CartContent";
import CartReceipt from "./common/CartReceipt";

const CartStyle = styled.form`
  display: inline-block;
  width: 742px;
  margin-right: 20px;
`;
const ReceiptStyle = styled.section`
  display: inline-block;
  width: 284px;
  vertical-align: top;
  margin-top: 60px;
`;
const CartContainerStyle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid #f0f0f0;
`;

const MyCart = () => {
  const dispatch = useDispatch();
  const { cart, isDeleteCartDone } = useSelector(state => state.cart);
  const [checkedItems, onCheckedItems, isAllChecked, onAllCheckedItems] = useCheck(cart?.length);

  useEffect(() => {
    dispatch(myCartAction());
  }, []);

  useEffect(() => {
    if (isDeleteCartDone) {
      alert(isDeleteCartDone);
      dispatch(resetMessageAction());
    }
  }, [isDeleteCartDone]);

  if (!cart) return <span>정보를 불러오는중입니다.</span>;

  return (
    <section>
      <CartStyle>
        {/* 선택 or 삭제영역 */}
        <CartMenu
          cart={cart}
          checkedItems={checkedItems}
          isAllChecked={isAllChecked}
          onAllCheckedItems={onAllCheckedItems}
        />

        {/* 장바구니에 담긴 상품들 */}
        <CartContainerStyle>
          {cart?.map(product => (
            <CartContent
              key={product._id}
              product={product}
              checkedItems={checkedItems}
              onCheckedItems={onCheckedItems}
              isAllChecked={isAllChecked}
              myProductLangth={cart.length}
            />
          ))}
        </CartContainerStyle>

        {/* 선택 or 삭제영역 */}
        <CartMenu
          cart={cart}
          checkedItems={checkedItems}
          isAllChecked={isAllChecked}
          onAllCheckedItems={onAllCheckedItems}
        />
      </CartStyle>

      {/* 영수증 및 결제영역 */}
      <ReceiptStyle>
        <CartReceipt allPrice={cart?.reduce((prev, current) => prev + current.price * current.count, 0)}></CartReceipt>
      </ReceiptStyle>
    </section>
  );
};

export default MyCart;
