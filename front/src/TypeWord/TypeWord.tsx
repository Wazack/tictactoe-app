import { useRef, useState } from "react";
import './TypeWord.scss'

function TypeWord(props: any) {

    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [currWordIndex, setCurrWordIndex] = useState(0)
    const [currCharIndex, setCurrCharIndex] = useState<number>(-1);

    const checkCharClass = (charIdx: number, currChar: string, wordIdx: number) => {
        if (wordIdx === currWordIndex && charIdx === inputValue.length - 1 && currChar === inputValue.substr(inputValue.length - 1)) {
            return 'good-char';
        }
        else if (wordIdx === currWordIndex && charIdx === inputValue.length - 1 && currChar !== inputValue.substr(inputValue.length - 1)) {
            return 'bad-char';
        }
        else
            return 'test';
    }

    const checkMatch = () => {
        const wordToCompare = props.words[index][currWordIndex];
        const doesItMatch = wordToCompare === inputValue.trim();
        console.log(doesItMatch)
        return doesItMatch;
    }

    const handleKeyDown = (e : any) => {
        if (e.keyCode === 32) {
            if (checkMatch() == true) {
                setInputValue("")
                setCurrWordIndex(currWordIndex + 1)
            }
            else
                setInputValue("")
        }
    }

    return (
        <div className="type-word">
            <div className="display-word">
                {props.words[index].map((word: string, i: number) => (
                    <span key={i}>
                        <span>
                            {word.split("").map((char, idx) => (
                                <span className={checkCharClass(idx, char, i)} key={idx}>{char}</span>
                            ))}
                        </span>
                        <span> </span>
                    </span>
                ))}
            </div>
            <input onKeyUp={handleKeyDown} onChange={(e) => { setInputValue(e.currentTarget.value) }} value={inputValue} type="text" />
        </div>
    )
}

export default TypeWord;