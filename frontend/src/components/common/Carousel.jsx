import React, { useState, useEffect, useRef, useCallback } from "react";

import styled from "styled-components";

const ImageStyle = styled.img`
  width: 100%;
  height: 370px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: auto auto;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  transition: all 1s;
`;
const SlideBox = styled.figure`
  width: 100%;
  height: 370px;
  overflow: hidden;
`;
const SlideList = styled.ul`
  width: ${props => props.imageWidth * (props.imageCount + 1)}px;
  height: 100%;
  transition: all ${props => props.slideSpeed}ms;
`;
const SlideContent = styled.li`
  position: relative;
  float: left;
`;
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

// 임시 DB ( 관리자가 넣은 이미지의 이름들을 받을 배열임... 아마 redux에 넣어둔거 사용할것 같음 )
const imageNames = ["1", "2", "3", "4"];

const Carousel = () => {
  // 이미지 가로 크기, 이미지 변경 시간, 타이머 아이디
  const slideWidth = useRef(1900);
  const slideInterval = useRef(5000);
  const timerId = useRef("");

  // 이미지 슬라이드 속도
  const [slideSpeed, setSlideSpeed] = useState(0);
  // 이미지 스타일 ( 슬라이드되게 하는 부분 )
  const [sildeStyle, setSildeStyle] = useState({});
  // 현재 보여줄 이미지를 지정하는 인덱스 변수
  const [sildeCurrentIndex, setSlideCurrentIndex] = useState(1);
  // arrow버튼 보여줄지 결정할 변수
  const [isShowArrow, setIsShowArrow] = useState(false);

  useEffect(() => {
    setSildeStyle({ transform: `translateX(-${slideWidth.current * 1}px)` });
    setSlideCurrentIndex(prev => prev + 1);
  }, []);

  // 이미지 슬라이드 슬라이딩조건 지정
  useEffect(() => {
    timerId.current = setInterval(() => {
      setSlideSpeed(1000);
      setSildeStyle({ transform: `translateX(-${slideWidth.current * sildeCurrentIndex}px)` });
      setSlideCurrentIndex(prev => prev + 1);
    }, slideInterval.current);

    // 끝까지 돌면 처음부터 시작
    if (sildeCurrentIndex >= imageNames.length + 1) {
      setTimeout(() => {
        setSlideSpeed(0);
        setSildeStyle({ transform: `translateX(-${slideWidth.current * 0}px)` });
      }, slideInterval.current);
      setSlideCurrentIndex(1);
    }

    return () => clearInterval(timerId.current);
  }, [sildeCurrentIndex]);

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

  // 이미지 슬라이드
  const imageSildeNode = useCallback(() => {
    if (!imageNames) return <div>이미지 준비중입니다...</div>;

    const images = imageNames.map(image => (
      <SlideContent key={image}>
        <ImageStyle src={`/images/${image}.webp`} alt="이미지" />
        {isShowArrow && arrowBtnNode()}
      </SlideContent>
    ));
    // 처음 이미지 맨마지막에 추가
    images.push(
      <SlideContent key={imageNames.length + 1}>
        <ImageStyle src={`/images/${imageNames[0]}.webp`} alt="이미지" />
        {isShowArrow && arrowBtnNode()}
      </SlideContent>,
    );
    // 마지막 이미지 맨처음에 추가
    images.unshift(
      <SlideContent key={imageNames.length + 2}>
        <ImageStyle src={`/images/${imageNames[imageNames.length - 1]}.webp`} alt="이미지" />
        {isShowArrow && arrowBtnNode()}
      </SlideContent>,
    );

    return images;
  }, [imageNames, isShowArrow]);

  // 좌우 화살표버튼
  const arrowBtnNode = useCallback(() => {
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
  }, []);

  return (
    <SlideBox>
      <SlideList
        imageWidth={slideWidth.current}
        imageCount={imageNames.length}
        slideSpeed={slideSpeed}
        style={sildeStyle}
        onMouseEnter={() => setIsShowArrow(true)}
        onMouseLeave={() => setIsShowArrow(false)}
      >
        {imageSildeNode()}
      </SlideList>
    </SlideBox>
  );
};

export default Carousel;
