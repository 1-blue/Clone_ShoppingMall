import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { priceSplit } from "../../filter";

const ProductCardStyle = styled(Link)`
  width: 338px;
  padding-top: 25px;
`;
const ProductImageContainerStyle = styled.div`
  height: 435px;
  overflow: hidden;
`;
const ProductImageStyle = styled.img`
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
`;
const ProductNameStyle = styled.h3`
  display: block;
  font-weight: 400;
  font-size: 20px;
  color: #333;
`;
const ProductPriceStyle = styled.span`
  display: block;
  padding-top: 11px;
  font-weight: 800;
  font-size: 1.2rem;
  color: #333;
`;
const ProductDescriptionStyle = styled.span`
  display: block;
  padding-top: 11px;
  font-size: 13px;
  color: #999;
`;

const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = useMemo(() => ({ transform: "scale(1.05)" }));

  return (
    <ProductCardStyle to={`/product/${product._id}`}>
      <ProductImageContainerStyle>
        <ProductImageStyle
          src={product.imgPath}
          alt={`${product.name}의 이미지`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={isHover ? hoverStyle : null}
        />
      </ProductImageContainerStyle>
      <ProductNameStyle>{product.name}</ProductNameStyle>
      <ProductPriceStyle>{priceSplit(product.price, ",")}원</ProductPriceStyle>
      <ProductDescriptionStyle>{product.description}</ProductDescriptionStyle>
    </ProductCardStyle>
  );
};

export default ProductCard;
