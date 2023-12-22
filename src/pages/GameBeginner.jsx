import React from "react";
import styled, {createGlobalStyle} from 'styled-components';
import Board from "../components/Board";

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

const GameBeginner = () => {
    const rows=8;
    const cols=8;
    const mine=10;

    return(
        <>
            <GlobalStyle />
            <Background>
                <Board rows={rows} cols={cols} mine={mine} />
            </Background>
        </>
    )
}

export default GameBeginner;