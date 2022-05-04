import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../style/mixins';

import stage from '../../assets/svg/stage.svg';
import Img from '../common/Img';

const StageBox = () => {
  return (
    <StyledBox>
      <Stage href="#!">
        <Img url={stage} description={'스테이지'} />
      </Stage>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  ${flexCenter}
  margin: 0 5px 0 20px;
`;

const Stage = styled.a`
  display: block;
  font-size: 0;
`;
export default StageBox;
