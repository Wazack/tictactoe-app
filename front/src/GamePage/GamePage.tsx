import randomWords from 'random-words';
import { useEffect, useState } from 'react';
import './GamePage.scss';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';

function GamePage(props: any) {

  const [yourTurn, setYourTurn] = useState(false);
  const [words, setWords] = useState<string[][]>([randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5)])
  const [grid, setGrid] = useState<any[]>([
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]);

    function winning(board: any, player: string){
        if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
        ) {
        return true;
        } else {
        return false;
        }
    }

    var huPlayer: string = 'O';
    var aiPlayer: string = 'X';

    const emptyIndexies = (board: any) => {
        return board.filter((s: string | number) => s != 'O' && s != 'X')
    }

    const minimax_algo = (newGrid: any, player: string) => {
        var availSpots = emptyIndexies(newGrid);

        if (winning(newGrid, huPlayer))
            return {index: -1, score: -10};
        else if (winning(newGrid, aiPlayer))
            return {index: -1, score: 10};
        else if (availSpots.length == 0)
            return {index: -1, score: 0};
        
        var moves = [];

        for (var i = 0; i < availSpots.length; i++) {
            var move = {index: 0, score: 0};
            move.index = newGrid[availSpots[i]]
            newGrid[availSpots[i]] = player;
            if (player == aiPlayer) {
                var result = minimax_algo(newGrid, huPlayer);
                if (result)
                    move.score = result.score;
            } else {
                var result = minimax_algo(newGrid, aiPlayer);
                if (result)
                    move.score = result.score;
            }
            newGrid[availSpots[i]] = move.index;
            moves.push(move);
        }
        var bestMove = 0;
        if (player == aiPlayer) {
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i++){
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return moves[bestMove];
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            var index = minimax_algo(grid, 'X')
            grid[index.index] = 'X'
            setGrid([...grid]);
            console.log(index)
        }, 10000);
        return () => clearInterval(interval);
    }, [grid, setGrid, setYourTurn]);

  return (
    <div className="game-page">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} data={grid} />
      <TypeWord yourTurn={yourTurn} setYourTurn={setYourTurn} words={words}/>
    </div>
  );
}

export default GamePage;
