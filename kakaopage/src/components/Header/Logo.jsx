import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/svg/logo.svg';
import Img from '../common/Img';

const Logo = () => {
  return (
    <StyledLogo>
      <Img url={logo} description={'kakaopage'} />
    </StyledLogo>
  );
};

const StyledLogo = styled.h1``;

export default Logo;
