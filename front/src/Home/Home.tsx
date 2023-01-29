import { useState } from "react";
import GamePage from "../GamePage/GamePage";
import './Home.scss'

function Home() {
    const [difficulty, setDifficulty] = useState(0);

    return (
        <>
            {difficulty == 0 ?
            <div className="home">
                <h1>
                    <span>
                        <span>T</span>
                        <span>i</span>
                        <span>c</span>
                    </span>
                    <span>
                        <span>T</span>
                        <span>a</span>
                        <span>c</span>
                    </span>
                    <span>
                        <span>T</span>
                        <span>o</span>
                        <span>e</span>
                    </span>
                </h1>
                <div className="choice-diff">
                    <span className="selec-diff">Play against</span>
                    <div className="btn-difficulty">
                        <button onClick={() =>setDifficulty(1)}>Baby Bot</button>
                        <button onClick={() =>setDifficulty(2)}>Teenager Bot</button>
                        <button onClick={() =>setDifficulty(3)}>Developer Bot</button>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://github.com/Wazack" target="_blank">My Github</a>
                    <a href="https://tsimon.fr" target="_blank">My Portolio</a>
                </div>
            </div> :
            <GamePage difficulty={difficulty} setDifficulty={setDifficulty} />
            }
        </>
    )
}

export default Home;