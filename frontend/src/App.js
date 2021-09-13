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

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/product" component={ProductsPage} exact />
        <Route path="/product/:_id" component={ProductDetailPage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
    </AppLayout>
  );
}

export default App;
