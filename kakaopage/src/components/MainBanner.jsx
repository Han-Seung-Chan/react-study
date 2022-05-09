import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainBanner = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goDay = () => {
    navigate('/day');
  };

  const goWebtoon = () => {
    navigate('/webtoon');
  };

  const lnbData = [
    { title: '홈', event: goHome },
    { title: '요일연재', event: goDay },
    { title: '웹툰', event: goWebtoon },
    { title: '소년', event: goHome },
    { title: '드라마', event: goHome },
    { title: '로맨스', event: goHome },
    { title: '로판', event: goHome },
    { title: '액션무협', event: goHome },
    { title: 'BL', event: goHome },
  ];

  return (
    <Lnb>
      <LnbListBox>
        {lnbData.map(({ title, event }, idx) => (
          <LnbList key={`${title}${idx}`}>
            <LnbBtn onClick={event}>{title}</LnbBtn>
          </LnbList>
        ))}
      </LnbListBox>
    </Lnb>
  );
};

const Lnb = styled.nav`
  background: #fff;
`;

const LnbListBox = styled.ul`
  display: flex;
`;

const LnbList = styled.li`
  padding: 21px 0;
  font-size: 20px;
  color: rgb(187, 187, 187);
  font-weight: 350;
  flex: auto;
  /* color: rgb(51, 51, 51);
  font-weight: 500; */
`;

const LnbBtn = styled.button`
  width: 100%;
`;

export default MainBanner;
