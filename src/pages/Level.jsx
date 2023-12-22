import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";
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
  margin-top: 150px;
  margin-bottom: 150px;
  z-index: 3;
`;

const LevelButton = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-family: 'DungGeunMo';
  text-align: center;
  margin-bottom: 50px;
  z-index: 3;
  a {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
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

const Level = () => {
    return (
      <>
        <GlobalStyle />
        <Background>
          <Title>난이도 선택</Title>
          <HeartLarge src={HeartLargeImage} alt="Heart Large" />
          <LevelButton>
            <Link to={{ pathname: '/gamebeginner', state: { rows: 8 } }}>
              Beginner
            </Link>
          </LevelButton>
          {/* <LevelButton>
            <Link to={{ pathname: '/game', state: { rows: 16, cols: 16, mine: 40 } }}>
              Intermediate
            </Link>
          </LevelButton>
          <LevelButton>
            <Link to={{ pathname: '/game', state: { rows: 32, cols: 16, mine: 100 } }}>
              Expert
            </Link>
          </LevelButton> */}
        </Background>
      </>
    );
  }
  
  export default Level;
