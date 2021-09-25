import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ProductCard from "./common/ProductCard";

const ProductsContainerStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
`;

const ProductsContainer = () => {
  const { products } = useSelector(state => state.product);

  return (
    <ProductsContainerStyle>
      {products?.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </ProductsContainerStyle>
  );
};

export default ProductsContainer;
