import React from 'react';
import styled from 'styled-components';

import new_svg from '../../assets/svg/new.svg';
import slideImg from '../../assets/img/The_Live.png';
import Img from '../common/Img';

const Slide = () => {
  return (
    <ImageBox>
      <ImageContainer>
        <ImageElement>
          <Img url={slideImg} description={'더 라이브 이미지'} />
          <ImageText>
            <ImageTitle>더 라이브</ImageTitle>
            <ImageEvent>
              <Img url={new_svg} description={'new'} />
            </ImageEvent>
            <ImageSpan>🕔웹툰 |</ImageSpan>
            <ImageSpan>👤77만명</ImageSpan>
          </ImageText>
          <ImageFooter className="image_footer ">
            시즌 2 런칭기념 캐시 이벤트!
          </ImageFooter>
        </ImageElement>
      </ImageContainer>
    </ImageBox>
  );
};

const ImageBox = styled.div`
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  height: 440px;
  width: 660px;
`;

const ImageContainer = styled.ul`
  position: absolute;
  height: 440px;
  width: 660px;
`;

const ImageElement = styled.li`
  text-decoration: none;
  width: 660px;
  height: 440px;
  display: inline-block;
`;

const ImageText = styled.div`
  position: absolute;
  top: 310px;
  width: 100%;
  text-align: left;
`;

const ImageTitle = styled.h2`
  text-align: left;
  margin-left: 30px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

const ImageEvent = styled.span`
  margin-left: 35px;
  padding: 3px;
`;

const ImageSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

const ImageFooter = styled.div`
  /* pos-abs pd-10 */
  position: absolute;
  padding: 10px;
  top: 405px;
  background-color: #f1c164;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;
export default Slide;
