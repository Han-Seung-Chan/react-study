import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '../../style/mixins';
import GnbInfo from './GnbInfo';

const Gnb = () => {
  return (
    <NavBox>
      <GnbListBox>
        <GnbInfo />
      </GnbListBox>
    </NavBox>
  );
};

const NavBox = styled.nav`
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
`;

const GnbListBox = styled.ul`
  ${flexCenter}
  width: 720px;
  margin: 0 auto;
`;

export default Gnb;
