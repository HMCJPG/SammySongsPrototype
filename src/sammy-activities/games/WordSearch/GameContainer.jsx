
import React, { useState, useEffect, useMemo } from 'react';
import Grid from './Grid';
import WordList from './WordList';
import { generateGrid } from './wordSearchHelper';
import './WordSearch.css';

const GameContainer = ({ words: initialWords, size = 10 }) => {
    const [gridData, setGridData] = useState({ grid: [], placedWords: [] });
    const [foundWords, setFoundWords] = useState([]);
    const [foundCells, setFoundCells] = useState(new Set());
    const [feedback, setFeedback] = useState(null);

    // Initialize game
    useEffect(() => {
        const data = generateGrid(initialWords, size);
        setGridData(data);
    }, [initialWords, size]);

    const handleSelectionEnd = (selectedWord, selectionPath) => {
        // Check if the word is in our initial list and not already found
        const upperWords = initialWords.map(w => w.toUpperCase());
        const reverseWord = selectedWord.split('').reverse().join('');

        let matchedWord = null;
        if (upperWords.includes(selectedWord) && !foundWords.includes(selectedWord)) {
            matchedWord = selectedWord;
        } else if (upperWords.includes(reverseWord) && !foundWords.includes(reverseWord)) {
            matchedWord = reverseWord;
        }

        if (matchedWord) {
            setFoundWords(prev => [...prev, matchedWord]);

            // Mark cells as found
            const newFoundCells = new Set(foundCells);
            selectionPath.forEach(pos => newFoundCells.add(`${pos.row}-${pos.col}`));
            setFoundCells(newFoundCells);

            // Show feedback
            showFeedback();
        }
    };

    const showFeedback = () => {
        const messages = ["Great job!", "Awesome!", "You found it!", "Well done!", "Keep going!"];
        const message = messages[Math.floor(Math.random() * messages.length)];
        setFeedback(message);
        setTimeout(() => setFeedback(null), 1500);
    };

    const resetGame = () => {
        const data = generateGrid(initialWords, size);
        setGridData(data);
        setFoundWords([]);
        setFoundCells(new Set());
    };

    const isGameComplete = foundWords.length === initialWords.length && initialWords.length > 0;

    return (
        <div className="word-search-container">
            <header className="game-instructions">
                <h1>Word Search Fun! 🔍</h1>
                <p>Find all the words hidden in the grid. Click and drag your mouse over the letters!</p>
                <button onClick={resetGame} style={{
                    padding: '8px 20px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>
                    New Game
                </button>
            </header>

            <main className="game-main">
                {gridData.grid.length > 0 && (
                    <Grid
                        grid={gridData.grid}
                        gridSize={size}
                        onSelectionEnd={handleSelectionEnd}
                        foundCells={foundCells}
                    />
                )}
                <WordList words={initialWords} foundWords={foundWords} />
            </main>

            {feedback && (
                <div className="feedback-overlay">
                    {feedback}
                </div>
            )}

            {isGameComplete && (
                <div className="feedback-overlay" style={{ background: '#4ecdc4', color: 'white' }}>
                    🎉 HOORAY! YOU WON! 🎉
                </div>
            )}
        </div>
    );
};

export default GameContainer;
