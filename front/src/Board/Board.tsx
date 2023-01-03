import { useState } from "react";
import './Board.scss';

function Board(props: any) {

    const [data, setData] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ]);

    const test = (e: any, index: number) => {
        if (props.yourTurn) {
            e.target.innerText = 'X';
            data[index - 1] = 'X';
            props.setYourTurn(false);
        }
    }

    return (
        <section>
            <div className="board">
                <div className="input-1" onClick={(e) => test(e, 1)}></div>
                <div className="input-2" onClick={(e) => test(e, 2)}></div>
                <div className="input-3" onClick={(e) => test(e, 3)}></div>
                <div className="input-4" onClick={(e) => test(e, 4)}></div>
                <div className="input-5" onClick={(e) => test(e, 5)}></div>
                <div className="input-6" onClick={(e) => test(e, 6)}></div>
                <div className="input-7" onClick={(e) => test(e, 7)}></div>
                <div className="input-8" onClick={(e) => test(e, 8)}></div>
                <div className="input-9" onClick={(e) => test(e, 9)}></div>
            </div>
        </section>
    )
}

export default Board;