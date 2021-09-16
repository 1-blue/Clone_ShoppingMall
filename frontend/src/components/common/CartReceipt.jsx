import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// filter
import { priceSplit } from "../../filter";

const LocationStyle = styled.div`
  padding: 10px 20px;
  border: 1px solid #f2f2f2;
`;
const PriceContainerStyle = styled.ul`
  padding: 10px 20px;
  border: 1px solid #f2f2f2;
  margin-bottom: 20px;
`;
const ChangeButtonStyle = styled.button`
  display: block;
  width: 100%;
  height: 36px;
  font-weight: 700;
  font-size: 12px;
  line-height: 34px;
  border: 1px solid #5f0080;
  border-radius: 3px;
  background-color: #fff;
  color: #5f0080;
  margin-top: 20px;
`;
const PriceListStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  font-weight: 400;
  color: #666666;
`;
const OrderButtonStyle = styled.button`
  width: 100%;
  height: 56px;
  padding-bottom: 2px;
  line-height: 54px;
  border: 1px solid #5f0081;
  border-radius: 5px;
  background-color: #5f0080;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;

const CartReceipt = ({ allPrice }) => {
  const { address } = useSelector(state => state.auth.me);

  if (!address) {
    return <span>영수증 준비중입니다...</span>;
  }

  return (
    <>
      {/* 배송지 */}
      <LocationStyle>
        <h3>
          <i className="fas fa-map-marker-alt" style={{ margin: "0 10px 10px 0" }}></i>
          배송지
        </h3>
        <span>{address}</span>
        <ChangeButtonStyle type="button">배송지변경</ChangeButtonStyle>
      </LocationStyle>

      {/* 가격 및 할인 */}
      <PriceContainerStyle>
        <PriceListStyle>
          <span>상품금액</span>
          <span>{priceSplit(allPrice, ",")}원</span>
        </PriceListStyle>
        <PriceListStyle>
          <span>상품할인금액</span>
          <span>-0원</span>
        </PriceListStyle>
        <PriceListStyle>
          <span>배송비</span>
          <span>0원</span>
        </PriceListStyle>
        <hr />
        <PriceListStyle>
          <span>결제예정금액</span>
          <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>{priceSplit(allPrice, ",")}원</span>
        </PriceListStyle>
      </PriceContainerStyle>

      {/* 주문버튼 */}
      <OrderButtonStyle>주문하기</OrderButtonStyle>
    </>
  );
};

export default CartReceipt;
