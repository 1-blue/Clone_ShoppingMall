import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// filter
import { priceSplit } from "../../filter";

// hooks
import useCount from "../../hooks/useCount";

// action
import { deleteCartAction, ChangeCartAction } from "../../store/actions";

const ContainerStyle = styled.ul`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;
const ListStyle = styled.li`
  &:nth-child(1) {
    flex: 0 0 5%;
  }
  &:nth-child(2) {
    flex: 0 0 10%;
  }
  &:nth-child(3) {
    flex: 1;
  }
  &:nth-child(4) {
    flex: 0 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333;
    border-radius: 2px;
    margin-right: 20px;
  }
  &:nth-child(5) {
    flex: 0 0 15%;
  }
  &:nth-child(6) {
    flex: 0 0 5%;
  }
`;
const ProductImageStyle = styled.img`
  width: 60px;
  height: 78px;
`;
const MarkBtnStyle = styled.button`
  font-size: 1.2rem;
`;
const DropBtnStyle = styled.button`
  font-size: 1.2rem;
  color: grey;
`;

const CartContent = ({ product, checkedItems, onCheckedItems, isAllChecked, myProductLangth }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [saleCount, increaseCount, decreaseCount] = useCount(product.count);
  const [initSaleCount, setInitSaleCount] = useState(product.count);

  useEffect(() => {
    if (initSaleCount.current !== saleCount) {
      dispatch(ChangeCartAction({ ProductId: product._id, count: saleCount }));
    }
  }, [initSaleCount, saleCount]);

  useEffect(() => {
    isAllChecked ? setChecked(true) : setChecked(false);

    // 전부체크후 하나체크해제할 경우
    if (!isAllChecked && checkedItems.has(product._id)) {
      setChecked(true);
    }
  }, [isAllChecked]);

  const onChecked = e => {
    setChecked(!checked);
    onCheckedItems(product._id, e.target.checked, myProductLangth);
  };

  const onClickDeleteBtn = () => {
    dispatch(deleteCartAction(product._id));
  };

  return (
    <ContainerStyle>
      {/* 체크박스 */}
      <ListStyle>
        <input type="checkbox" checked={checked} onChange={onChecked} />
      </ListStyle>

      {/* 상품이미지 */}
      <ListStyle>
        <ProductImageStyle src={product.imagePath} alt="이미지 준비중..." />
      </ListStyle>

      {/* 상품이름 */}
      <ListStyle>
        <span>{product.name}</span>
      </ListStyle>

      {/* 상품개수 */}
      <ListStyle>
        <MarkBtnStyle type="button" onClick={decreaseCount}>
          －
        </MarkBtnStyle>
        <span>{saleCount}</span>
        <MarkBtnStyle type="button" onClick={increaseCount}>
          +
        </MarkBtnStyle>
      </ListStyle>

      {/* 상품가격 */}
      <ListStyle>
        <span>{priceSplit(product.price * saleCount, ",")}원</span>
      </ListStyle>

      {/* 장바구니에서삭제버튼 */}
      <ListStyle>
        <DropBtnStyle type="button" onClick={onClickDeleteBtn}>
          <b>x</b>
        </DropBtnStyle>
      </ListStyle>
    </ContainerStyle>
  );
};

export default CartContent;
