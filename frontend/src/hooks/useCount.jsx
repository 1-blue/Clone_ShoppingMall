import React, { useState, useCallback } from "react";

const useCount = initValue => {
  const [input, setInput] = useState(initValue);

  const increaseInput = useCallback(() => {
    setInput(prev => prev + 1);
  }, []);

  const decreaseInput = useCallback(() => {
    if (input <= 1) return;
    setInput(prev => prev - 1);
  }, [input]);

  return [input, increaseInput, decreaseInput];
};

export default useCount;
