import React, {useState, useEffect} from "react";
import Cell from "./Cell";

const Board = ({rows, cols, mine}) => {
  
  const [board,setBoard] = useState(Array.from({ length: rows }, () => Array(cols).fill({value:0, opened:false})));
  
  const initializeBoard=(board)=>{
    for (let i=0;i<mine;i++) {
      let row, col;
      do {
        row = Math.floor(Math.random()*rows);
        col = Math.floor(Math.random()*cols);
      } while ((board[row][col].value===9) || (row===0 && col===0)); //9 means mine
      board[row][col]={value:9,opened: false};
    }

    for (let i=0;i<rows;i++){
      for (let j=0;j<cols;j++){
        if (board[i][j].value===9) {
          continue;
        }
        const count =
        (i > 0 && board[i - 1][j + 1]?.value === 9) +
        (board[i][j + 1]?.value === 9) +
        (i < rows - 1 && board[i + 1][j + 1]?.value === 9) +
        (i > 0 && board[i - 1][j]?.value === 9) +
        (i < rows - 1 && board[i + 1][j]?.value === 9) +
        (i > 0 && j > 0 && board[i - 1][j - 1]?.value === 9) +
        (board[i][j - 1]?.value === 9) +
        (i < rows - 1 && j > 0 && board[i + 1][j - 1]?.value === 9);

        board[i][j] = { value: count, opened: false };
      }
    }

    console.log(board);
  }

  useEffect(()=>{
    initializeBoard(board);
  },[]);

    // 1. 선택한 셀 값이 0이 아닌 경우 + open true인 경우 -> 아무것도 바뀌지 않음
    // 2. 선택한 셀 값이 0이 아닌 경우 + open false인 경우 -> 셀 오픈
    // 3. 선택한 셀 값이 0인 경우 + open true인 경우 -> 아무것도 바뀌지 않음
    // 4. 선택한 셀 값이 0인 경우 + open false인 경우 -> 셀 오픈, 상하좌우 재귀적 호출(openCell)

  const openCell = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col].opened) {
      return;
    }
  
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[row][col].opened = true;
      return newBoard;
    });
  
    if (board[row][col].value === 0) {
      setTimeout(() => {
        openCell(row - 1, col);
        openCell(row, col + 1);
        openCell(row + 1, col);
        openCell(row, col - 1);
      }, 0); // Use setTimeout to break the recursion stack
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 30px)`, gap: "0px" ,alignSelf:'center'}}>
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} cell={cell} onClick={() => openCell(rowIndex, colIndex)} />
        ))
      ))}
    </div>
  );  
};

export default Board;
