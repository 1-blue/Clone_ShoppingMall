import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";

import { detailProductAction } from "../store/actions";

import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);

  useEffect(() => {
    dispatch(detailProductAction({ _id: +props.match.params._id }));
  }, []);
  return <main>{product && <ProductDetail product={product}></ProductDetail>}</main>;
};

export default withRouter(ProductDetailPage);
