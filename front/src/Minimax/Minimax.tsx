import { useEffect } from "react";

function Minimax(props: any) {

    var huPlayer: string = 'O';
    var aiPlayer: string = 'X';

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

    const emptyIndexies = (board: any) => {
        return board.filter((s: string | number) => s != 'O' && s != 'X')
    }

    const noName = (newGrid: any, player: string) => {
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
                var result = noName(newGrid, huPlayer);
                if (result)
                    move.score = result.score;
            } else {
                var result = noName(newGrid, aiPlayer);
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
            var index = noName(props.data, 'X')
            props.data[index.index] = 'X'
            props.setData([...props.data]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="minimax"></div>
    )
}

export default Minimax;