import React from "react";

const ProductDetailPage = props => {
  React.useEffect(() => {
    console.log(props.match.params._id);
  }, []);
  return (
    <>
      <h1>{props.match.params._id}상품상세페이지</h1>
    </>
  );
};

export default ProductDetailPage;
