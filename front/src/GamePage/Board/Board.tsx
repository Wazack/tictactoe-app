import { useEffect, useState } from "react";
import './Board.scss';

function Board(props: any) {

    const [symbol, setSymbol] = useState('O');

    const putSymbol = (e: any, index: number) => {
        if (props.yourTurn && typeof props.data[index - 1] === 'number') {
            e.target.innerText = symbol;
            props.data[index - 1] = symbol;
            props.setYourTurn(false);
        }
    }

    return (
        <section>
            <div className="board">
                <div className="row">
                    <div className="input-1" onClick={(e) => putSymbol(e, 1)}>{props.data[0]}</div>
                    <div className="input-2" onClick={(e) => putSymbol(e, 2)}>{props.data[1]}</div>
                    <div className="input-3" onClick={(e) => putSymbol(e, 3)}>{props.data[2]}</div>
                </div>
                <div className="row">
                    <div className="input-4" onClick={(e) => putSymbol(e, 4)}>{props.data[3]}</div>
                    <div className="input-5" onClick={(e) => putSymbol(e, 5)}>{props.data[4]}</div>
                    <div className="input-6" onClick={(e) => putSymbol(e, 6)}>{props.data[5]}</div>
                </div>
                <div className="row">
                    <div className="input-7" onClick={(e) => putSymbol(e, 7)}>{props.data[6]}</div>
                    <div className="input-8" onClick={(e) => putSymbol(e, 8)}>{props.data[7]}</div>
                    <div className="input-9" onClick={(e) => putSymbol(e, 9)}>{props.data[8]}</div>
                </div>
            </div>
        </section>
    )
}

export default Board;