import React from 'react';
import styled from 'styled-components';

import * as svg from '../../assets/svg/gnb/app';
import Img from '../common/Img';

const GnbInfo = () => {
  const gnbInfo = [
    { url: svg.home, alt: '홈' },
    { url: svg.webtoon, alt: '웹툰' },
    { url: svg.novel, alt: '소설' },
    { url: svg.movie, alt: '영화' },
    { url: svg.broadcast, alt: '방송' },
    { url: svg.book, alt: '책' },
  ];

  return (
    <>
      {gnbInfo.map((img) => (
        <NavList key={img.alt} alt={img.alt}>
          <NavBtn>
            <Img url={img.url} description={img.alt} />
          </NavBtn>
        </NavList>
      ))}
    </>
  );
};

const NavList = styled.li`
  flex: auto;
  text-align: center;
  padding: 30px 0 15px;
  font-size: 0;
  border-bottom: ${({ alt }) => (alt === '웹툰' ? '3px solid #ffd200' : '')};
`;

const NavBtn = styled.button`
  width: 100%;
`;

export default GnbInfo;
