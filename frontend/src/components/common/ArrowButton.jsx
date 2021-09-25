import React, { useCallback } from "react";

import styled from "styled-components";

const ArrowBtn = styled.span`
  position: absolute;
  top: 50%;
  left: ${props => props.position}%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 1.5rem;
  color: white;
  background: rgba(80, 80, 80, 0.4);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const ArrowButton = ({ sildeCurrentIndex }) => {
  // 우측, 좌측이미지이동버튼 클릭 ( 미완 )
  const onClickArrowRight = useCallback(() => {
    setSlideCurrentIndex(prev => prev + 1);
    setSildeStyle({ transform: `translateX(-${slideWidth.current * sildeCurrentIndex}px)` });
    clearInterval(timerId.current);
    timerId.current = "keyboard cat";
  }, [sildeCurrentIndex]);
  const onClickArrowLeft = () => {
    setSlideCurrentIndex(prev => prev - 1);
    setSildeStyle({ transform: `translateX(-${slideWidth.current * sildeCurrentIndex}px)` });
    clearInterval(timerId.current);
    timerId.current = "keyboard cat";
  };

  return (
    <>
      <ArrowBtn position={10} onClick={onClickArrowLeft}>
        &#60;
      </ArrowBtn>
      <ArrowBtn position={90} onClick={onClickArrowRight}>
        &#62;
      </ArrowBtn>
    </>
  );
};

export default ArrowButton;
