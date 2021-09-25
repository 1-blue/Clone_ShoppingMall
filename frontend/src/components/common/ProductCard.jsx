import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { priceSplit } from "../../filter";

const ProductCardStyle = styled(Link)`
  width: 338px;
  padding-top: 25px;
`;
const ProductImageContainerStyle = styled.section`
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
const PriceStyle = styled.span`
  display: block;
  padding-top: 11px;
  font-weight: 800;
  font-size: 1.2rem;
  color: #333;
`;
const DescriptionStyle = styled.h3`
  display: block;
  padding-top: 11px;
  font-size: 13px;
  color: #999;
`;

const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = useMemo(() => ({ transform: "scale(1.05)" }));

  return (
    <li>
      <ProductCardStyle to={`/product/${product._id}`}>
        <ProductImageContainerStyle>
          <ProductImageStyle
            // src={process.env.REACT_APP_IMAGE_PATH + product.imagePath}
            src={"http://localhost:3001" + product.imagePath}
            alt={`${product.name}의 이미지`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={isHover ? hoverStyle : null}
          />
        </ProductImageContainerStyle>
        <ProductNameStyle>{product.name}</ProductNameStyle>
        <PriceStyle>{priceSplit(product.price, ",")}원</PriceStyle>
        <DescriptionStyle>{product.description}</DescriptionStyle>
      </ProductCardStyle>
    </li>
  );
};

export default ProductCard;
