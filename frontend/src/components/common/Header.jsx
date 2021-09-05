import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 1050px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const MenuStyle = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const MenuListStyle = styled.li`
  &::after {
    content: "|";
    color: #d8d8d8;
  }
`;
const LinkStyle = styled(Link)`
  padding: 1rem;
  font-size: 0.75rem;
`;
const MainLogoLinkStyle = styled(Link)`
  align-self: center;
`;
const MainLogoStyle = styled.img`
  width: 103px;
  height: 79px;
`;

const Header = () => {
  const registerLintStyle = useMemo(() => ({ color: "#5f0080" }));

  return (
    <HeaderStyle>
      {/* 회원가입, 로그인, 고객센터 리스트 */}
      <MenuStyle>
        <MenuListStyle>
          <LinkStyle to="/register" style={registerLintStyle}>
            회원가입
          </LinkStyle>
        </MenuListStyle>
        <MenuListStyle>
          <LinkStyle to="/login">로그인</LinkStyle>
        </MenuListStyle>
        <li>
          <LinkStyle to="/#">고객센터</LinkStyle>
        </li>
      </MenuStyle>

      {/* 메인로고 */}
      <MainLogoLinkStyle to="/">
        <MainLogoStyle src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리-메인로고" />
      </MainLogoLinkStyle>
    </HeaderStyle>
  );
};

export default Header;
