import { useEffect, useState } from "react";
import './Board.scss';

function Board(props: any) {

    const [symbol, setSymbol] = useState('X');

    const [data, setData] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ]);

    useEffect(() => {
        const checkRow = () => {
            let ret = null;
            for (let i = 0; i < 9; i += 3) {
                if (data[i] == data[i + 1] && data[i] == data[i + 2] && data[i] != '')
                    ret = data[i];
            }
            return ret;
        }
        const chekColumn = () => {
            let ret = null;
            for (let i = 0; i < 3; i++) {
                if (data[i] == data[i + 3] && data[i] == data[i + 6] && data[i] != '')
                    ret = data[i];
            }
            return ret;
        }
        const checkDiagonal = () => {
            if ((data[0] == data[4] && data[0] == data[9] || data[2] == data[4] && data[2] == data[6]) && data[4] != '')
                return data[4];
            return null;
        }

        const checkWin = () => {
            return (checkDiagonal() || checkRow() || chekColumn())
        }

        const checkTie = () => {
            let count = 0;
            for (let i = 0; i < 9; i++) {
                if (data[i] != '')
                    count++;
            }
            return (count === 9)
        }

        const ret = checkWin();
        console.log(ret);
    })

    const putSymbol = (e: any, index: number) => {
        if (props.yourTurn && e.target.innerText == '') {
            e.target.innerText = symbol;
            data[index - 1] = symbol;
            props.setYourTurn(false);
        }
    }

    return (
        <section>
            <div className="board">
                <div className="input-1" onClick={(e) => putSymbol(e, 1)}></div>
                <div className="input-2" onClick={(e) => putSymbol(e, 2)}></div>
                <div className="input-3" onClick={(e) => putSymbol(e, 3)}></div>
                <div className="input-4" onClick={(e) => putSymbol(e, 4)}></div>
                <div className="input-5" onClick={(e) => putSymbol(e, 5)}></div>
                <div className="input-6" onClick={(e) => putSymbol(e, 6)}></div>
                <div className="input-7" onClick={(e) => putSymbol(e, 7)}></div>
                <div className="input-8" onClick={(e) => putSymbol(e, 8)}></div>
                <div className="input-9" onClick={(e) => putSymbol(e, 9)}></div>
            </div>
        </section>
    )
}

export default Board;