import { useState } from "react";

function TypeWord(props: any) {
    const words = ['ce', 'test', 'toto', 'car', 'voiture'];

    const [index, setIndex] = useState(0);

    const displayWord = () => {
        for (let index = 0; index < words.length; index++) {
            return words[index];
        }
    }

    const test = () => {
        console.log(props.yourTurn);
    }

    return (
        <div className="type-word">
            <div className="display-word">
                {displayWord()}
            </div>
            <input onClick={test} type="text" />
        </div>
    )
}

export default TypeWord;