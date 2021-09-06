import React from "react";
import { Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

// common-components
import Header from "./components/common/Header";
import NavigationBar from "./components/common/NavigationBar";

// global-css
import "./css/common.css";
import "./css/reset.css";

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />

      <Route path="/" component={HomePage} exact />
      <Route path="/register" component={RegisterPage} exact />
    </div>
  );
}

export default App;
