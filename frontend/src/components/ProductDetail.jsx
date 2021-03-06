import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { exitProductDatailPageAction, resetMessageAction, addCartAction } from "../store/actions";

import { priceSplit } from "../filter";

import useCount from "../hooks/useCount";

const ProductDetailStyle = styled.section`
  padding-top: 20px;
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

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.auth);
  const { isAddCartDone } = useSelector(state => state.cart);
  const [saleCount, increaseCount, decreaseCount] = useCount(1);

  // ???????????? ????????? ?????? ???????????? ??????????????? ????????????
  useEffect(() => {
    return () => {
      dispatch(exitProductDatailPageAction());
    };
  }, []);

  useEffect(() => {
    if (isAddCartDone) {
      alert(isAddCartDone);
      dispatch(resetMessageAction());
    }
  }, [isAddCartDone]);

  // ?????? ??????????????? ??????
  const onClickAddProductBtn = useCallback(() => {
    if (!me) return alert("??????????????? ??????????????????!");
    dispatch(addCartAction({ ProductId: product._id, count: saleCount }));
  }, [me, saleCount]);

  return (
    <ProductDetailStyle>
      <ProductImageStyle src={"http://localhost:3001" + product.imagePath} alt="?????? ?????????" />
      <InfoContainerStyle>
        <li>
          <ProductNameStyle>{product.name}</ProductNameStyle>
        </li>
        <li>
          <DescriptionStyle>{product.description}</DescriptionStyle>
        </li>
        <li>
          <PriceStyle>{priceSplit(product.price, ",")}???</PriceStyle>
        </li>

        {/* ???????????? */}
        {product?.saleUnit && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["saleUnit"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ??????/?????? */}
        {product?.weight && (
          <InfoListStyle>
            <ListTitleStyle>??????/??????</ListTitleStyle>
            <ListDescriptionStyle>{product["weight"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        {product?.shipping && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["shipping"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ????????? */}
        {product?.origin && (
          <InfoListStyle>
            <ListTitleStyle>?????????</ListTitleStyle>
            <ListDescriptionStyle>{product["origin"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        {product?.packaging && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["packaging"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        {product?.allergy && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["allergy"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        {product?.shelfLife && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["shelfLife"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        {product?.notification && (
          <InfoListStyle>
            <ListTitleStyle>????????????</ListTitleStyle>
            <ListDescriptionStyle>{product["notification"]}</ListDescriptionStyle>
          </InfoListStyle>
        )}

        {/* ???????????? */}
        <InfoListStyle>
          <ListTitleStyle>????????????</ListTitleStyle>
          <CountStyle>
            <MarkBtnStyle onClick={decreaseCount}>???</MarkBtnStyle>
            <span>{saleCount}</span>
            <MarkBtnStyle onClick={increaseCount}>+</MarkBtnStyle>
          </CountStyle>
        </InfoListStyle>

        {/* ??? ?????? */}
        <InfoListStyle>
          <span>
            ??? ???????????? : <AllPriceStyle>{priceSplit(product.price * saleCount, ",")}</AllPriceStyle>
            <b>???</b>
          </span>
        </InfoListStyle>

        {/* ?????????????????????, ???????????? */}
        <InfoListStyle>
          <RestockBtnStyle>????????? ??????</RestockBtnStyle>
          <PutBtnStyle onClick={onClickAddProductBtn}>???????????? ??????</PutBtnStyle>
        </InfoListStyle>
      </InfoContainerStyle>
    </ProductDetailStyle>
  );
};

export default ProductDetail;
