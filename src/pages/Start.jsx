import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";
import HeartMediumImage from '../../assets/images/heart_medium.svg';
import HeartLargeImage from '../../assets/images/heart_large.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Background = styled.div`
  background-color: #FE91D4;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
`;

const Title = styled.div`
  color: #000000;
  font-size: 100px;
  font-family: 'DungGeunMo';
  text-align: center;
  margin-top: 250px;
  z-index: 3;
`;

const LevelButton = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-family: 'DungGeunMo';
  text-align: center;
  margin-top: 100px;
  margin-bottom: 200px;
  z-index: 3;
  a {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const HeartMedium = styled.img`
  width: 500px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const HeartLarge = styled.img`
  width: 1400px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Start = () => {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Title>지뢰찾기</Title>
        <HeartMedium src={HeartMediumImage} alt="Heart Medium" />
        <HeartLarge src={HeartLargeImage} alt="Heart Large" />
        <LevelButton>
          <Link to={'/level'}>시작하기</Link>
        </LevelButton>
      </Background>
    </>
  );
}

export default Start;
