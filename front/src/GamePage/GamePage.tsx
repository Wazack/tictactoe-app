import randomWords from 'random-words';
import { useState } from 'react';
import './GamePage.scss';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';
import Minimax from '../Minimax/Minimax';

function GamePage(props: any) {

  const [yourTurn, setYourTurn] = useState(false);
  const [words, setWords] = useState<string[][]>([randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5)])
  const [grid, setGrid] = useState([
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]);

  const checkRow = (data: any) => {
      let ret = null;
      for (let i = 0; i < 9; i += 3) {
          if (data[i] == data[i + 1] && data[i] == data[i + 2] && typeof data[i])
              ret = data[i];
      }
      return ret;
  }
  const chekColumn = (data: any) => {
      let ret = null;
      for (let i = 0; i < 3; i++) {
          if (data[i] == data[i + 3] && data[i] == data[i + 6])
              ret = data[i];
      }
      return ret;
  }
  const checkDiagonal = (data: any) => {
      if (data[0] == data[4] && data[0] == data[9] || data[2] == data[4] && data[2] == data[6])
          return data[4];
      return null;
  }

  const checkWin = (data: any) => {
      return (checkDiagonal(data) || checkRow(data) || chekColumn(data))
  }

  const checkTie = (data: any) => {
      let count = 0;
      for (let i = 0; i < 9; i++) {
          if (typeof data[i] != 'number')
              count++;
      }
      return (count === 9)
  }

  return (
    <div className="game-page">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} data={grid} />
      <TypeWord yourTurn={yourTurn} setYourTurn={setYourTurn} words={words}/>
      <Minimax data={grid} setData={setGrid} checkWin={checkWin} checkTie={checkTie} />
    </div>
  );
}

export default GamePage;
