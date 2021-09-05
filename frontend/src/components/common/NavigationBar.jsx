import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { purple } from "../../css/styleConstants";

const NavStyle = styled.nav`
  width: 1050px;
  margin: auto;
`;
const NavUlStyle = styled.ul`
  display: flex;
`;
const NavLiStyle = styled.li`
  width: 124px;
  height: 55px;
  text-align: center;
  line-height: 55px;
`;
const NavLinkStyle = styled(Link)`
  font-size: 16px;
  color: #333;
  :hover {
    ${purple};
    text-decoration: underline;
    text-underline-position: under;
  }
`;
const IconStyle = styled.i`
  font-size: 1.5rem;
`;

const NavigationBar = () => {
  const barsStyle = useMemo(() => ({ "padding-right": "0.5rem" }));

  return (
    <NavStyle>
      <NavUlStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">
            <i className="fas fa-bars" style={barsStyle}></i>
            전체카테고리
          </NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">신상품</NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">베스트</NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">알뜰쇼핑</NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">특가/혜택</NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">검색</NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">
            <IconStyle className="fas fa-map-marker-alt"></IconStyle>
          </NavLinkStyle>
        </NavLiStyle>
        <NavLiStyle>
          <NavLinkStyle to="/#">
            <IconStyle className="fas fa-shopping-cart"></IconStyle>
          </NavLinkStyle>
        </NavLiStyle>
      </NavUlStyle>
    </NavStyle>
  );
};

export default NavigationBar;