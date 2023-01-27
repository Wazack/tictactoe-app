import randomWords from 'random-words';
import { useEffect, useState } from 'react';
import './GamePage.scss';
import Board from './Board/Board';
import TypeWord from './TypeWord/TypeWord';
import GameOver from './GameOver/GameOver';

function GamePage(props: any) {

    const [yourTurn, setYourTurn] = useState(false);
    const [isWinner, setIsWinner] = useState(false);
    const [nameWinner, setNameWinner] = useState<string>();
    const [words, setWords] = useState<string[][]>([randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5), randomWords(5)])
    const [indexWord, setIndexWord] = useState(0);
    const [grid, setGrid] = useState<any[]>([
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
    ]);

    var aiSpeed = 10000;

    let lengthWords = 0
    for (var i = 0; i < 5; i++) {
        lengthWords += words[indexWord][i].length + 1;
    }
    if (props.difficulty == 1) {
        aiSpeed = lengthWords * 60000 / 150
    } else if (props.difficulty == 2) {
        aiSpeed = lengthWords * 60000 / 200
    } else {
        aiSpeed = lengthWords * 60000 / 250
    }

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

    var huPlayer = 'O';
    var aiPlayer = 'X';

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
        console.log('Verif win !')
        if (winning(grid, aiPlayer)) {
            setIsWinner(true);
            setNameWinner(aiPlayer);
        } else if (winning(grid, huPlayer)) {
            setIsWinner(true);
            setNameWinner(huPlayer);
        } else if (emptyIndexies.length === 0) {
            setIsWinner(true);
            setNameWinner('Tie');
        }
    }, [grid, yourTurn])

    useEffect(() => {
        if (!isWinner) {
            console.log('aiSpeed: ' + aiSpeed)
            const interval = setInterval(() => {
                var index = minimax_algo(grid, 'X')
                grid[index.index] = 'X'
                setGrid([...grid]);
                setIndexWord(indexWord + 1);
            }, aiSpeed);
            return () => clearInterval(interval);
        }
    }, [grid]);

  return (
    <div className="game-page">
      <Board yourTurn={yourTurn} setYourTurn={setYourTurn} data={grid} />
      {!isWinner ?
        <TypeWord yourTurn={yourTurn} setYourTurn={setYourTurn} words={words}/>
        : <GameOver nameWinner={nameWinner} setDifficulty={props.setDifficulty} />
    }
    </div>
  );
}

export default GamePage;
