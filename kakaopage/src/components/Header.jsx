import React from 'react';
import styled from 'styled-components';

import { flexBetween, flexCenter, maxWidth } from '../style/mixins';
import InputForm from './Header/InputForm';
import Logo from './Header/Logo';
import StageBox from './Header/StageBox';
import UserBtn from './Header/UserBtn';
import Gnb from './Header/Gnb';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTop>
        <Logo />
        <HeaderBox>
          <InputForm />
          <HeaderNav>
            <StageBox />
            <UserBtn />
          </HeaderNav>
        </HeaderBox>
      </HeaderTop>
      <Gnb />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fff;
  z-index: 10;
`;

const HeaderTop = styled.div`
  ${maxWidth}
  ${flexBetween}
  height: 80px;
`;

const HeaderBox = styled.div`
  ${flexCenter}
`;

const HeaderNav = styled.nav`
  ${flexCenter}
`;
export default Header;
