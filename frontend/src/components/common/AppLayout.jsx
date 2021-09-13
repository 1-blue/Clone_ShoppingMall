import React from "react";
import styled from "styled-components";

// component
import Header from "../../components/common/Header";
import NavigationBar from "../../components/common/NavigationBar";

const AppLayoutStyle = styled.section`
  width: 1050px;
  margin: auto;
`;

const AppLayout = ({ children }) => {
  return (
    <AppLayoutStyle>
      <Header />
      <NavigationBar />
      {children}
    </AppLayoutStyle>
  );
};

export default AppLayout;
