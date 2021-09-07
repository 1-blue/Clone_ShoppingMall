import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { newProductAction } from "../store/actions";

import ProductCard from "./common/ProductCard";

const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
`;

const NewProduct = () => {
  const dispatch = useDispatch();
  const tempProducts = useSelector(state => state.product.products);

  useEffect(() => {
    dispatch(newProductAction());
  }, []);

  return (
    <ProductCardContainer>
      {tempProducts?.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </ProductCardContainer>
  );
};

export default NewProduct;
