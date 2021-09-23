import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

// common-components
import AppLayout from "./components/common/AppLayout";

// global-css
import "./css/common.css";
import "./css/reset.css";

// 인증 hoc ( 로그인유지 & 페이지접근권한확인 )
import AuthHoc from "./hoc/auth";

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={AuthHoc(HomePage, null)} exact />
        <Route path="/register" component={AuthHoc(RegisterPage, false)} exact />
        <Route path="/login" component={AuthHoc(LoginPage, false)} exact />
        <Route path="/product" component={AuthHoc(ProductsPage, null)} exact />
        <Route path="/product/:_id" component={AuthHoc(ProductDetailPage, null)} exact />
        <Route path="/cart" component={AuthHoc(CartPage, true)} exact />
      </Switch>
    </AppLayout>
  );
}

export default App;
