import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// hooks
import useCheck from "../hooks/useCheck";

// action
import { resetMessageAction, myCartAction } from "../store/actions";

// components
import CartMenu from "./common/CartMenu";
import CartContent from "./common/CartContent";

const CartStyle = styled.form`
  display: inline-block;
  width: 742px;
`;
const ReceiptStyle = styled.section`
  display: inline-block;
  width: 284px;
`;
const CartContainerStyle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid #f0f0f0;
`;

const MyCart = () => {
  const dispatch = useDispatch();
  const { isDeleteCartDone } = useSelector(state => state.cart);
  const { cart } = useSelector(state => state.cart);
  const [checkedItems, onCheckedItems, isAllChecked, onAllCheckedItems, checkItemCount] = useCheck();

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
          isAllChecked={isAllChecked}
          onAllCheckedItems={onAllCheckedItems}
          checkItemCount={checkItemCount}
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
          isAllChecked={isAllChecked}
          onAllCheckedItems={onAllCheckedItems}
          checkItemCount={checkItemCount}
        />
      </CartStyle>

      {/* 영수증 및 결제영역 */}
      <ReceiptStyle>
        <h1>영수증</h1>
      </ReceiptStyle>
    </section>
  );
};

export default MyCart;
