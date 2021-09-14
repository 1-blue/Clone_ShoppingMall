import React, { useMemo } from "react";
import styled from "styled-components";

const CartMenuStyle = styled.section`
  display: flex;
  align-items: center;
  height: 60px;
`;

const CartMenu = ({ cart, isAllChecked, onAllCheckedItems, checkItemCount }) => {
  const padding = useMemo(() => ({ marginRight: "20px" }), []);
  return (
    <CartMenuStyle>
      <input type="checkbox" checked={isAllChecked} onChange={e => onAllCheckedItems(e, cart)} style={padding} />
      <span style={padding}>
        전체선택({checkItemCount()}/{cart.length})
      </span>
      <button type="button">선택삭제</button>
    </CartMenuStyle>
  );
};

export default CartMenu;
