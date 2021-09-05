import React from "react";
import { Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// common-components
import Header from "./components/common/Header";
import NavigationBar from "./components/common/NavigationBar";
import Carousel from "./components/common/Carousel";

// global-css
import "./css/common.css";
import "./css/reset.css";

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Carousel />

      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} exact />
    </div>
  );
}

export default App;
