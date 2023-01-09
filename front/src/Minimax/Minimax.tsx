import { useEffect } from "react";

function Minimax(props: any) {

    var AIMove = 0;

    const noName = (newGrid: any, player: string) => {
        const available = (newGrid.filter((a: any) => {
            return (typeof a === 'number')
        }))

        var Moves = [];
        var Scores: number[] = [];

        if (props.checkWin(newGrid))
            return (1);
        else if (props.checkTie(newGrid))
            return (1);

        for (let i = 0; i < available.length; i++) {
            let move = newGrid[available[i]];
            newGrid[available[i]] = player;
            if (player == 'O')
                Scores.push(noName(newGrid, 'X'))
            else
                Scores.push(noName(newGrid, 'O'))
            newGrid[available[i]] = move;
            Moves.push(move);
        }
        if (player === 'X') {
            let highScore = Math.max(...Scores);
            let highScoreIndex = Scores.indexOf(highScore)
            AIMove = Moves[highScoreIndex];
            return Scores[highScoreIndex]
        } else {
            let lowScore = Math.min(...Scores);
            let lowScoreIndex = Scores.indexOf(lowScore)
            AIMove = Moves[lowScoreIndex];
            return Scores[lowScoreIndex]
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            noName(props.data, 'O')
            props.data[AIMove] = 'O';
            props.setData([...props.data]);
            console.log('AIMove: ' + AIMove)
        }, 10000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="minimax"></div>
    )
}

export default Minimax;