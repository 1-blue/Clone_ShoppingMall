import React, { useState } from "react";
import styled from "styled-components";

import { priceSplit } from "../filter";

import useCount from "../hooks/useCount";

const ProductPutStyle = styled.section`
  width: 1050px;
  padding-top: 20px;
  margin: auto;
`;
const ProductImageStyle = styled.img`
  width: 433px;
  height: 522px;
  margin-right: 50px;
`;
const ProductNameStyle = styled.h1`
  width: 567px;
`;
const InfoContainerStyle = styled.ul`
  display: inline-block;
  vertical-align: top;
`;
const InfoListStyle = styled.li`
  display: flex;
  border-top: 1px solid #eeeeee;
  padding: 18px 0;
  &:nth-child(4) {
    margin-top: 20px;
  }
  &:nth-last-child(2) {
    padding-top: 30px;
    justify-content: flex-end;
  }
`;
const DescriptionStyle = styled.h3`
  display: block;
  padding-top: 11px;
  font-size: 13px;
  color: #999;
`;
const PriceStyle = styled.span`
  display: block;
  padding-top: 25px;
  font-weight: 800;
  font-size: 1.5rem;
  color: #333;
`;
const ListTitleStyle = styled.span`
  width: 150px;
  height: 20px;
  color: #666666;
  font-size: 0.9rem;
`;
const ListDescriptionStyle = styled.span`
  height: 20px;
  color: #333333;
  font-size: 0.9rem;
`;
const CountStyle = styled.div`
  border: 1px solid #333;
  border-radius: 2px;
  display: flex;
  width: 88px;
  justify-content: space-between;
  align-items: center;
`;
const MarkBtnStyle = styled.button`
  font-size: 1.5rem;
`;
const AllPriceStyle = styled.b`
  font-size: 1.5rem;
`;
const RestockBtnStyle = styled.button`
  float: left;
  width: 138px;
  height: 56px;
  padding-bottom: 2px;
  margin-right: 12px;
  text-align: center;
  background: #fff;
  color: #3333;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid #3333;
  border-radius: 3px;
  line-height: 52px;
  letter-spacing: -0.1px;
`;
const PutBtnStyle = styled.button`
  float: left;
  width: 100%;
  height: 100%;
  padding-bottom: 2px;
  text-align: center;
  background: #5f0080;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -0.1px;
`;

const ProductPut = ({ product }) => {
  const [saleCount, increaseCount, decreaseCount] = useCount(1);

  return (
    <ProductPutStyle>
      <ProductImageStyle src={product.imgPath} alt="상품 이미지" />
      <InfoContainerStyle>
        <li>
          <ProductNameStyle>{product.name}</ProductNameStyle>
        </li>
        <li>
          <DescriptionStyle>{product.description}</DescriptionStyle>
        </li>
        <li>
          <PriceStyle>{priceSplit(product.price, ",")}원</PriceStyle>
        </li>

        {/* 판매단위 */}
        {product?.saleInfo["saleingUnit"] && (
          <InfoListStyle>
            <ListTitleStyle>판매단위</ListTitleStyle>
            <ListDescriptionStyle>{product.saleInfo["saleingUnit"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* 중량/용량 */}
        {product?.saleInfo["weight"] && (
          <InfoListStyle>
            <ListTitleStyle>중량/용량</ListTitleStyle>
            <ListDescriptionStyle>{product.saleInfo["weight"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* 배송구분 */}
        {product?.saleInfo["shippingCategory"] && (
          <InfoListStyle>
            <ListTitleStyle>배송구분</ListTitleStyle>
            <ListDescriptionStyle>{product.saleInfo["shippingCategory"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* 포장타입 */}
        {product?.saleInfo["packagingType"] && (
          <InfoListStyle>
            <ListTitleStyle>포장타입</ListTitleStyle>
            <ListDescriptionStyle>{product.saleInfo["packagingType"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* 안내사항 */}
        {product?.saleInfo["notification"] && (
          <InfoListStyle>
            <ListTitleStyle>안내사항</ListTitleStyle>
            <ListDescriptionStyle>{product.saleInfo["notification"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* 추가할 정보 있으면 같은 형식으로 추가 */}

        {/* 구매수량 */}
        <InfoListStyle>
          <ListTitleStyle>구매수량</ListTitleStyle>
          <CountStyle>
            <MarkBtnStyle onClick={decreaseCount}>－</MarkBtnStyle>
            <span>{saleCount}</span>
            <MarkBtnStyle onClick={increaseCount}>+</MarkBtnStyle>
          </CountStyle>
        </InfoListStyle>

        {/* 총 금액 */}
        <InfoListStyle>
          <span>
            총 상품금액 : <AllPriceStyle>{priceSplit(product.price * saleCount, ",")}</AllPriceStyle>
            <b>원</b>
          </span>
        </InfoListStyle>

        {/* 재입고알림버튼, 주문버튼 */}
        <InfoListStyle>
          <RestockBtnStyle>재입고 알림</RestockBtnStyle>
          <PutBtnStyle>상품 주문</PutBtnStyle>
        </InfoListStyle>
      </InfoContainerStyle>
    </ProductPutStyle>
  );
};

export default ProductPut;
