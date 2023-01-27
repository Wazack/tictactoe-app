import { useEffect, useState } from "react";
import './Board.scss';

function Board(props: any) {

    const [symbol, setSymbol] = useState('O');

    const putSymbol = (e: any, index: number) => {
        if (props.yourTurn && typeof props.data[index - 1] === 'number') {
            props.data[index - 1] = symbol;
            props.setYourTurn(false);
        }
    }

    const displaySymbol = (index: number) => {
        if (props.data[index] === 'X') {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1">
                    <path d="M14.8207 15.1401L129.265 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    <path d="M129.265 15.1401L14.8207 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    </g>
                </svg>
            )
        } else if (props.data[index] === 'O') {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="1" cx="72.0428" cy="72.6345" r="57.2222" stroke="rgb(250, 250, 63)" strokeWidth="28.9801"/>
                </svg>
            )
        }
    }

    return (
        <section>
            <div className="board">
                <div className="row">
                    <div className="input-1" onClick={(e) => putSymbol(e, 1)}>{displaySymbol(0)}</div>
                    <div className="input-2" onClick={(e) => putSymbol(e, 2)}>{displaySymbol(1)}</div>
                    <div className="input-3" onClick={(e) => putSymbol(e, 3)}>{displaySymbol(2)}</div>
                </div>
                <div className="row">
                    <div className="input-4" onClick={(e) => putSymbol(e, 4)}>{displaySymbol(3)}</div>
                    <div className="input-5" onClick={(e) => putSymbol(e, 5)}>{displaySymbol(4)}</div>
                    <div className="input-6" onClick={(e) => putSymbol(e, 6)}>{displaySymbol(5)}</div>
                </div>
                <div className="row">
                    <div className="input-7" onClick={(e) => putSymbol(e, 7)}>{displaySymbol(6)}</div>
                    <div className="input-8" onClick={(e) => putSymbol(e, 8)}>{displaySymbol(7)}</div>
                    <div className="input-9" onClick={(e) => putSymbol(e, 9)}>{displaySymbol(8)}</div>
                </div>
            </div>
        </section>
    )
}

export default Board;