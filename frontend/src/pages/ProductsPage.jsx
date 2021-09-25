import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";

import { queryParser } from "../filter";

import { allProductsAction, newProductsAction, bestProductsAction } from "../store/actions";

import Menu from "../components/common/Menu";
import ProductsContainer from "../components/ProductsContainer";

const ProductTitleStyle = styled.h1`
  padding-top: 23px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const ProductsPage = ({ location }) => {
  const dispatch = useDispatch();
  // queryString parse
  const [urlParse, setUrlParse] = useState(null);
  useEffect(() => {
    setUrlParse(queryParser(location));
  }, [location]);

  useEffect(() => {
    if (!urlParse?.category) return;

    switch (urlParse.category) {
      case "new":
        dispatch(newProductsAction());
        break;
      case "best":
        dispatch(bestProductsAction());
        break;
      case "sale":
        break;

      default:
        dispatch(allProductsAction());
        break;
    }
  }, [urlParse]);

  return (
    <main>
      {urlParse?.category === "new" && <ProductTitleStyle>신상품</ProductTitleStyle>}
      {urlParse?.category === "best" && <ProductTitleStyle>베스트상품</ProductTitleStyle>}
      {urlParse?.category === "sale" && <ProductTitleStyle>할인상품</ProductTitleStyle>}
      <Menu />
      <ProductsContainer></ProductsContainer>
    </main>
  );
};

export default withRouter(ProductsPage);
