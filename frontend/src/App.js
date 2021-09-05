import React from "react";
import { Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// global-css
import "./css/common.css";
import "./css/reset.css";

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} exact />
    </div>
  );
}

export default App;
