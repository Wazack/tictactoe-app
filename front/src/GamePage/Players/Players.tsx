import './Players.scss'

function Players (props: any) {
    const displaySymbol = (player: string) => {
        if (player == 'X') {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1">
                    <path d="M14.8207 15.1401L129.265 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    <path d="M129.265 15.1401L14.8207 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    </g>
                </svg>
            )
        } else {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="1" cx="72.0428" cy="72.6345" r="57.2222" stroke="rgb(250, 250, 63)" strokeWidth="28.9801"/>
                </svg>
            )
        }
    }
    return (
        <div className="players">
            <div className="you player">
                <span>You</span>
                {displaySymbol(props.huPlayer)}
            </div>
            <div className="ia player">
                <span>Bot</span>
                {displaySymbol(props.aiPlayer)}
            </div>
        </div>
    )
}

export default Players;