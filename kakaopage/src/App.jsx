import React, { useReducer } from 'react';
import styled from 'styled-components';

import GlobalStyle from './style/globalStyles';
import Header from './components/Header';

const initialState = {};
const reducer = (state, action) => {
  switch (action.type) {
    case 'a':
      return;

    default:
      return;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div``;

export default App;
