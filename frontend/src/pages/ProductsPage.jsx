import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { queryParser } from "../filter";

import Menu from "../components/common/Menu";
import NewProduct from "../components/NewProduct";
import BestProduct from "../components/BestProduct";
import SaleProduct from "../components/SaleProduct";

const ProductTitleStyle = styled.h1`
  padding-top: 23px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const ProductsPage = ({ location }) => {
  // queryString parse
  const [urlParse, setUrlParse] = useState(null);
  useEffect(() => {
    setUrlParse(queryParser(location));
  }, [location]);

  return (
    <section>
      {urlParse?.category === "new" && <ProductTitleStyle>신상품</ProductTitleStyle>}
      {urlParse?.category === "best" && <ProductTitleStyle>베스트상품</ProductTitleStyle>}
      {urlParse?.category === "sale" && <ProductTitleStyle>할인상품</ProductTitleStyle>}
      <Menu />
      {urlParse?.category === "new" && <NewProduct></NewProduct>}
      {urlParse?.category === "best" && <BestProduct></BestProduct>}
      {urlParse?.category === "sale" && <SaleProduct></SaleProduct>}
    </section>
  );
};

export default ProductsPage;
