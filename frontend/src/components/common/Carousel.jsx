import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import ArrowButton from "./ArrowButton";

import { loadMainImageAction } from "../../store/actions";

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
  position: absolute;
  left: 0%;
  width: 100vw;
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

const Carousel = () => {
  const dispatch = useDispatch();
  const { mainImages } = useSelector(state => state.product);
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
    dispatch(loadMainImageAction());
  }, []);

  useEffect(() => {
    setSildeStyle({ transform: `translateX(-${slideWidth.current * 1}px)` });
    setSlideCurrentIndex(prev => prev + 1);
  }, []);

  // 이미지 슬라이드 슬라이딩조건 지정
  useEffect(() => {
    if (!mainImages) return;

    timerId.current = setInterval(() => {
      setSlideSpeed(1000);
      setSildeStyle({ transform: `translateX(-${slideWidth.current * sildeCurrentIndex}px)` });
      setSlideCurrentIndex(prev => prev + 1);
    }, slideInterval.current);

    // 끝까지 돌면 처음부터 시작
    if (sildeCurrentIndex >= mainImages.length + 1) {
      setTimeout(() => {
        setSlideSpeed(0);
        setSildeStyle({ transform: `translateX(-${slideWidth.current * 0}px)` });
      }, slideInterval.current);
      setSlideCurrentIndex(1);
    }

    return () => clearInterval(timerId.current);
  }, [sildeCurrentIndex]);

  // 이미지 슬라이드
  const imageSildeNode = useCallback(() => {
    if (!mainImages) return <h1>이미지 준비중입니다.</h1>;

    const images = mainImages.map(image => (
      <SlideContent key={image._id}>
        {/* <ImageStyle src={`${process.env.REACT_APP_IMAGE_PATH}${image.imagePath}`} alt="이미지" /> */}
        <ImageStyle src={`http://localhost:3001${image.imagePath}`} alt="이미지" />
        {isShowArrow && <ArrowButton sildeCurrentIndex={sildeCurrentIndex} />}
      </SlideContent>
    ));
    // 처음 이미지 맨마지막에 추가
    images.push(
      <SlideContent key={mainImages.length + 1}>
        <ImageStyle src={`http://localhost:3001${mainImages[0].imagePath}`} alt="이미지" />
        {isShowArrow && <ArrowButton sildeCurrentIndex={sildeCurrentIndex} />}
      </SlideContent>,
    );
    // 마지막 이미지 맨처음에 추가
    images.unshift(
      <SlideContent key={mainImages.length + 2}>
        <ImageStyle src={`http://localhost:3001${mainImages[mainImages.length - 1].imagePath}`} alt="이미지" />
        {isShowArrow && <ArrowButton sildeCurrentIndex={sildeCurrentIndex} />}
      </SlideContent>,
    );

    return images;
  }, [mainImages, isShowArrow]);

  return (
    <SlideBox>
      {mainImages && (
        <SlideList
          imageWidth={slideWidth.current}
          imageCount={mainImages.length}
          slideSpeed={slideSpeed}
          style={sildeStyle}
          onMouseEnter={() => setIsShowArrow(true)}
          onMouseLeave={() => setIsShowArrow(false)}
        >
          {imageSildeNode()}
        </SlideList>
      )}
    </SlideBox>
  );
};

export default Carousel;
