import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailProductAction } from "../store/actions";

import ProductPut from "../components/ProductPut";

const ProductDetailPage = props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);

  useEffect(() => {
    dispatch(detailProductAction({ _id: +props.match.params._id }));
  }, []);
  return (
    <>
      {product && <ProductPut product={product}></ProductPut>}
      <div>상품설명, 상세정보, 후기, 문의 등등 채워넣을 곳</div>
    </>
  );
};

export default ProductDetailPage;
