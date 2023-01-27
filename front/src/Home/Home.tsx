import { useState } from "react";
import GamePage from "../GamePage/GamePage";

function Home() {
    const [difficulty, setDifficulty] = useState(0);

    return (
        <>
            {difficulty == 0 ?
            <div className="home">
                <h1>Tic Tac Toe</h1>
                <span>Select the difficulty</span>
                <button onClick={() =>setDifficulty(1)}>Against a baby</button>
                <button onClick={() =>setDifficulty(2)}>Against a teenager</button>
                <button onClick={() =>setDifficulty(3)}>Against a developer</button>
                <button>How to play ?</button>
            </div> :
            <GamePage difficulty={difficulty} setDifficulty={setDifficulty} />
            }
        </>
    )
}

export default Home;