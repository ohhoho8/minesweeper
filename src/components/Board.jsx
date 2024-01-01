import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const Board = ({ rows, cols, mine, setGameover }) => {
  const [board, setBoard] = useState(Array.from({ length: rows }, () => Array(cols).fill({ value: 0, opened: false })));

  const initializeBoard = () => {
    const newBoard = Array.from({ length: rows }, () => Array(cols).fill({ value: 0, opened: false }));

    for (let i = 0; i < mine; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * rows);
        col = Math.floor(Math.random() * cols);
      } while (newBoard[row][col].value === 9 || (row === 0 && col === 0)); // 9 means mine
      newBoard[row][col] = { value: 9, opened: false };
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (newBoard[i][j].value === 9) {
          continue;
        }

        const count =
        (i > 0 && newBoard[i - 1][j + 1]?.value === 9) +
        (newBoard[i][j + 1]?.value === 9) +
        (i < rows - 1 && newBoard[i + 1][j + 1]?.value === 9) +
        (i > 0 && newBoard[i - 1][j]?.value === 9) +
        (i < rows - 1 && newBoard[i + 1][j]?.value === 9) +
        (i > 0 && j > 0 && newBoard[i - 1][j - 1]?.value === 9) +
        (newBoard[i][j - 1]?.value === 9) +
        (i < rows - 1 && j > 0 && newBoard[i + 1][j - 1]?.value === 9);

        newBoard[i][j] = { value: count, opened: false };
      }
    }

    setBoard(newBoard);
  };

  useEffect(() => {
    initializeBoard();
  }, []);

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
      }, 0);
    } else if(board[row][col].value === 9 && board[row][col].opened===true) {
      setTimeout(() => {
        initializeBoard();
        setGameover(true);
      }, 1000);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 30px)`, gap: "0px", alignSelf: "center" }}>
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} cell={cell} onClick={() => openCell(rowIndex, colIndex)} />
        ))
      ))}
    </div>
  );
};

export default Board;
