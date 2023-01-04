import randomWords from 'random-words';
import { useState } from 'react';
import './App.css';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';

function App() {

  const [yourTurn, setYourTurn] = useState(false);
  const [words, setWords] = useState<string[][]>([randomWords(5), randomWords(5), randomWords(5)])

  return (
    <div className="App">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} />
      <TypeWord yourTurn={yourTurn} setYourTurn={setYourTurn} words={words}/>
    </div>
  );
}

export default App;
