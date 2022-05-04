import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '../../style/mixins';

const UserBtn = () => {
  return (
    <UserNav>
      <NavBtn>캐시충전</NavBtn>
      <NavBtn>로그인</NavBtn>
    </UserNav>
  );
};

const UserNav = styled.div`
  ${flexCenter}
`;

const NavBtn = styled.button`
  font-size: 18px;
  color: #999;

  ::before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 12px;
    margin: 0 10px;
    background-color: #e2e2e2;
  }
`;
export default UserBtn;
