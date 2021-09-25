import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import Carousel from "../components/common/Carousel";
import ProductsContainer from "../components/ProductsContainer";

// action
import { allProductsAction } from "../store/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProductsAction());
  }, []);

  return (
    <main>
      <Carousel />
      {/* 임시추가... Carousel포지션이 absolute라서 */}
      <section style={{ paddingTop: "400px" }}>
        <ProductsContainer></ProductsContainer>
      </section>
    </main>
  );
};

export default HomePage;
