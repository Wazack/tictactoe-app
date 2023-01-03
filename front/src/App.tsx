import { useState } from 'react';
import './App.css';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';

function App() {

  const [yourTurn, setYourTurn] = useState(false);

  return (
    <div className="App">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} />
      <TypeWord yourTurn={yourTurn} />
    </div>
  );
}

export default App;
