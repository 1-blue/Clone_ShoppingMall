/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from "react";

const useCheck = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const onCheckedItems = useCallback((_id, isChecked, allItemSize) => {
    // new Set()하는 이유는 set에 동등연산자 사용시 변경후에도 true가 나와서 리액트에서 변화감지를 못함
    isChecked ? checkedItems.add(_id) : checkedItems.delete(_id);
    setCheckedItems(new Set([...checkedItems]));

    // 전부체크후 하나체크해제할 경우
    if(checkedItems.size !== allItemSize) setIsAllChecked(false);
    // 수동으로 전부체크할경우
    if(checkedItems.size === allItemSize) setIsAllChecked(true)
  }, [checkedItems]);

  const onAllCheckedItems = useCallback((e, items) => {
    if (e.target.checked) {
      setCheckedItems(new Set(items.map(item => item._id)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setIsAllChecked(false);
    }
  }, [checkedItems, isAllChecked]);

  const checkItemCount = useCallback(() => {
    return checkedItems.size
  }, [checkedItems])

  return [checkedItems, onCheckedItems, isAllChecked, onAllCheckedItems, checkItemCount];
};

export default useCheck;
