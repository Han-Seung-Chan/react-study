import React, { useReducer } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './style/globalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import MainBanner from './components/MainBanner';
import Day from './pages/Day';
import Webtoon from './pages/Webtoon';

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
      <BrowserRouter>
        <StyledApp>
          <Header />
          <StyledMain>
            <MainBanner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day" element={<Day />} />
              <Route path="/webtoon" element={<Webtoon />} />
            </Routes>
          </StyledMain>
        </StyledApp>
      </BrowserRouter>
    </>
  );
}

const StyledApp = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const StyledMain = styled.main`
  margin-top: 149px;
  padding-top: 18px;
`;

export default App;
