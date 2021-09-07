import React, { useMemo } from "react";
import styled from "styled-components";

const UlStyle = styled.ul`
  display: flex;
  padding-top: 39px;
  justify-content: flex-end;
`;
const LlStyle = styled.ul`
  padding: 0 8px;
  font-size: 0.8rem;
  color: #999;
  cursor: pointer;
`;
const SeparatorStyle = styled.i`
  width: 2px;
  height: 22px;
  background-color: #e5e5e5;
`;

const Menu = () => {
  const totalCountStyle = useMemo(() => ({ justifySelf: "flex-start", flexGrow: 1, color: "#333", padding: 0 }));
  const paddingRightNoneStyle = useMemo(() => ({ paddingRight: "0" }));

  return (
    <UlStyle>
      <LlStyle style={totalCountStyle}>총 x건</LlStyle>
      <LlStyle>추천순</LlStyle>
      <SeparatorStyle />
      <LlStyle>신상품순</LlStyle>
      <SeparatorStyle />
      <LlStyle>인기상품순</LlStyle>
      <SeparatorStyle />
      <LlStyle>혜택순</LlStyle>
      <SeparatorStyle />
      <LlStyle>가격낮은순</LlStyle>
      <SeparatorStyle />
      <LlStyle style={paddingRightNoneStyle}>높은가격순</LlStyle>
    </UlStyle>
  );
};

export default Menu;
