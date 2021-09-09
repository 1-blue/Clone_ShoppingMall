import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import { resetMessageAction, logoutAction } from "../../store/actions";

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
  padding: 0.2rem 1rem 1rem 1rem;
  font-size: 0.75rem;
`;
const LogoutBtnStyle = styled.button`
  padding: 0.2rem 1rem 1rem 1rem;
  font-size: 0.75rem;
`;
const MainLogoLinkStyle = styled(Link)`
  align-self: center;
`;
const MainLogoStyle = styled.img`
  width: 103px;
  height: 79px;
`;

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const { me, isLogoutDone } = useSelector(state => state.auth);
  const registerLintStyle = useMemo(() => ({ color: "#5f0080" }));

  // 로그아웃 성공 메시지
  useEffect(() => {
    if (isLogoutDone) {
      alert(isLogoutDone);
      dispatch(resetMessageAction());
      history.push("/");
    }
  }, [isLogoutDone]);

  const onClickLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <HeaderStyle>
      {/* (로그아웃), (회원가입, 로그인), 고객센터 리스트 */}
      <MenuStyle>
        {/* 로그인 유무에 따라 변경 */}
        {me ? (
          <MenuListStyle>
            <LogoutBtnStyle onClick={onClickLogout}>로그아웃</LogoutBtnStyle>
          </MenuListStyle>
        ) : (
          <>
            <MenuListStyle>
              <LinkStyle to="/register" style={registerLintStyle}>
                회원가입
              </LinkStyle>
            </MenuListStyle>
            <MenuListStyle>
              <LinkStyle to="/login">로그인</LinkStyle>
            </MenuListStyle>
          </>
        )}

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

export default withRouter(Header);
