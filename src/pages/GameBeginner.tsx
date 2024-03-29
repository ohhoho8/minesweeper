import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import Board from "../components/Board";
// @ts-ignore
import HeartMediumImage from '../../assets/images/heart_medium.svg';
// @ts-ignore
import HeartSmallImage from '../../assets/images/heart_small.svg';

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

const HeartMedium = styled.img`
  width: 500px;
  height: auto;
  position: fixed;
  top: 75%;
  left: 15%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HeartSmall = styled.img`
  width: 500px;
  height: auto;
  position: fixed;
  top: 25%;
  left: 75%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const BoardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Timer = styled.div`
  font-size: 24px;
  color: #ffffff;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'DungGeunMo';
  z-index: 3;
`;

const GameBeginner: React.FC = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [gameover, setGameover] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
      if(gameover){
        setElapsedTime(0);
        setGameover(false)
      }
  }, [gameover]);

    const rows = 8;
    const cols = 8;
    const mine = 10;

    return (
        <>
            <GlobalStyle />
            <Background />
            <BoardContainer>
                <Board rows={rows} cols={cols} mine={mine} setGameover={setGameover} />
            </BoardContainer>
            <HeartMedium src={HeartMediumImage} alt="Heart Medium" />
            <HeartSmall src={HeartSmallImage} alt="Heart Medium" />
            <Timer>{`TIME ${elapsedTime}`}</Timer>
        </>
    );
}

export default GameBeginner;
