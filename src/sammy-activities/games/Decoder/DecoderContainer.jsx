import React, { useState, useCallback } from 'react';
import { validateSolution, getCorrectnessMap, mapNumberToLetter, encodeMessage } from './decoderHelper';
import DecoderWheel from './DecoderWheel';
import Notebook from './Notebook';
import './Decoder.css';

const DecoderContainer = ({
    solution = "SAMMY RABBIT",
    onComplete
}) => {
    // Generate a random target offset once when the puzzle loads
    const [puzzleData] = useState(() => {
        const targetOffset = Math.floor(Math.random() * 26);
        const encoded = encodeMessage(solution, targetOffset);
        const hintLetter = mapNumberToLetter(1, targetOffset);
        return {
            targetOffset,
            encodedMessage: encoded,
            hint: `Key: 1 = ${hintLetter}`
        };
    });

    const [rotationOffset, setRotationOffset] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [showWin, setShowWin] = useState(false);

    const handleRotate = useCallback((offset) => {
        setRotationOffset(offset);
    }, []);

    const handleInputChange = (value) => {
        setUserInput(value.toUpperCase());
    };

    const handleCheckCode = () => {
        if (validateSolution(userInput, solution)) {
            setShowWin(true);
            if (onComplete) onComplete();
        } else {
            alert("Not quite right! Keep matching those numbers!");
        }
    };

    const correctnessMap = getCorrectnessMap(userInput, solution);

    const resetGame = () => {
        // Reload to re-randomize everything
        window.location.reload();
    };

    return (
        <div className="decoder-activity">
            <main className="decoder-main">
                <Notebook
                    encodedMessage={puzzleData.encodedMessage}
                    userInput={userInput}
                    onUserInputChange={handleInputChange}
                    correctnessMap={correctnessMap}
                    puzzleHint={puzzleData.hint}
                />

                <DecoderWheel
                    rotationOffset={rotationOffset}
                    onRotate={handleRotate}
                />
            </main>

            <footer className="decoder-footer">
                <button className="check-btn" onClick={handleCheckCode}>
                    Check Code!
                </button>
            </footer>

            {showWin && (
                <div className="win-overlay">
                    <div className="win-content">
                        <h1>🏆 CODE BROKEN! 🏆</h1>
                        <p>Excellent detective work! You decoded the message!</p>
                        <p><strong>{solution}</strong></p>
                        <button
                            className="check-btn"
                            style={{ marginTop: '20px' }}
                            onClick={resetGame}
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DecoderContainer;
