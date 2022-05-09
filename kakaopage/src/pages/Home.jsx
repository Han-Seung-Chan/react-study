import React, { useEffect } from 'react';
import styled from 'styled-components';

import Slide from '../components/Slide/Slide';

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];

    titleElement.innerHTML = `kakaopage home`;
  });

  return (
    <ImageSection>
      <Slide />
    </ImageSection>
  );
};

const ImageSection = styled.section`
  position: relative;
  margin-top: 30px;
`;

export default Home;
