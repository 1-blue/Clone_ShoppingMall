import React, { useMemo } from "react";
import styled from "styled-components";

const CartMenuStyle = styled.section`
  display: flex;
  align-items: center;
  height: 60px;
`;

const CartMenu = ({ cart, checkedItems, isAllChecked, onAllCheckedItems }) => {
  const padding = useMemo(() => ({ marginRight: "20px" }), []);

  const onClickSelectionDelete = () => {
    console.log(checkedItems);
    // 선택한놈들의 아이디를 배열로 전달하고 싶은데 HTTP DELETE로 전달할 방법이 마땅히 떠오르지않음
  };

  return (
    <CartMenuStyle>
      <input type="checkbox" checked={isAllChecked} onChange={e => onAllCheckedItems(e, cart)} style={padding} />
      <span style={padding}>
        전체선택({checkedItems.size}/{cart.length})
      </span>
      <button type="button" onClick={onClickSelectionDelete}>
        선택삭제
      </button>
    </CartMenuStyle>
  );
};

export default CartMenu;
