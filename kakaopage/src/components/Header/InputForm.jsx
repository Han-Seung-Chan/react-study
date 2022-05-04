import React from 'react';
import styled from 'styled-components';

const InputForm = () => {
  return (
    <div>
      <HeaderForm action="#">
        <HeaderInput type="text" />
        <HeaderBtn type="button" />
      </HeaderForm>
    </div>
  );
};

const HeaderForm = styled.form`
  width: 186px;
  display: flex;
  align-items: center;
  height: 34px;
  border: 1px solid #cfcfcf;
  border-radius: 17px;
  box-sizing: border-box;
  overflow: hidden;
`;

const HeaderInput = styled.input`
  width: 100%;
  height: 100%;
`;

const HeaderBtn = styled.button`
  flex-shrink: 0;
  width: 30px;
  height: 100%;
  background: url(https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a)
    no-repeat left center / 20px;
  text-indent: -9999em;
`;
export default InputForm;
