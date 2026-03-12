import React from 'react';

const Notebook = ({ encodedMessage, userInput, onUserInputChange, correctnessMap, puzzleHint }) => {
    return (
        <div className="notebook-panel">
            <h2>Decode the Secret Message!</h2>

            {puzzleHint && (
                <div className="puzzle-hint-text">
                    {puzzleHint}
                </div>
            )}

            <div className="encoded-label">Encoded Code:</div>
            <div className="encoded-display">
                {encodedMessage}
            </div>

            <div className="decoded-input-container">
                <div className="encoded-label">Enter Secret Phrase:</div>
                <input
                    type="text"
                    className="decoded-input"
                    value={userInput}
                    onChange={(e) => onUserInputChange(e.target.value)}
                    placeholder="TYPE HERE..."
                    spellCheck="false"
                    autoComplete="off"
                />

                <div className="character-feedback">
                    {correctnessMap.map((isCorrect, i) => (
                        <div
                            key={i}
                            className={`char-box ${isCorrect ? 'correct' : 'incorrect'}`}
                        />
                    ))}
                    {/* Add empty boxes for the remaining characters if desired */}
                </div>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
                Tip: Turn the wheel to see how numbers map to letters!
            </div>
        </div>
    );
};

export default Notebook;
