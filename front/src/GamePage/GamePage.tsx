import randomWords from 'random-words';
import { useState } from 'react';
import './GamePage.scss';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';

function GamePage(props: any) {

  const [yourTurn, setYourTurn] = useState(false);
  const [words, setWords] = useState<string[][]>([randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5)])

  return (
    <div className="game-page">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} />
      <TypeWord yourTurn={yourTurn} setYourTurn={setYourTurn} words={words}/>
    </div>
  );
}

export default GamePage;
