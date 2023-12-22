import React from "react";
import styled from "styled-components";
import bomb from '../../assets/images/bomb.svg';
import closed from '../../assets/images/closed.svg';
import empty from '../../assets/images/empty.svg';
import one from '../../assets/images/one.svg';
import two from '../../assets/images/two.svg';
import three from '../../assets/images/three.svg';
import four from '../../assets/images/four.svg';
import five from '../../assets/images/five.svg';
import six from '../../assets/images/six.svg';
import seven from '../../assets/images/seven.svg';
import eight from '../../assets/images/eight.svg';

const StyledCell = styled.div`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Cell = ({ cell, onClick }) => {
  if (cell.opened) {
    const getImage = () => {
      switch (cell.value) {
        case 0: return empty;
        case 1: return one;
        case 2: return two;
        case 3: return three;
        case 4: return four;
        case 5: return five;
        case 6: return six;
        case 7: return seven;
        case 8: return eight;
        case 9: return bomb;
        default: return empty;
      }
    };

    return (
      <StyledCell onClick={onClick}>
        <StyledImage src={getImage()} alt="Cell" />
      </StyledCell>
    );
  } else {
    return (
      <StyledCell onClick={onClick}>
        <StyledImage src={closed} alt="Closed" />
      </StyledCell>
    );
  }
};

export default Cell;
