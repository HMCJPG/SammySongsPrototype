import React, { useState, useEffect, useCallback } from 'react';
import { generateDeck, checkMatch } from './memoryMatchHelper';
import MemoryGrid from './MemoryGrid';
import './MemoryMatch.css';

const MemoryMatchContainer = ({
    pairs = [],
    rows = 3,
    columns = 4,
    onComplete
}) => {
    const [deck, setDeck] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState(new Set());
    const [isProcessing, setIsProcessing] = useState(false);
    const [showHooray, setShowHooray] = useState(false);

    // Initialize/Reset game
    const initGame = useCallback(() => {
        // We only take the number of pairs that fits the grid (rows * columns / 2)
        const pairCount = (rows * columns) / 2;
        const selectedPairs = pairs.slice(0, pairCount);

        const newDeck = generateDeck(selectedPairs);
        setDeck(newDeck);
        setFlippedCards([]);
        setMatchedCards(new Set());
        setShowHooray(false);
        setIsProcessing(false);
    }, [pairs, rows, columns]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    const handleCardClick = (card) => {
        if (isProcessing || flippedCards.some(c => c.instanceId === card.instanceId)) return;

        const newFlipped = [...flippedCards, card];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setIsProcessing(true);
            const [cardA, cardB] = newFlipped;

            if (checkMatch(cardA, cardB)) {
                // Match found!
                setTimeout(() => {
                    const newMatched = new Set(matchedCards);
                    newMatched.add(cardA.pairId);
                    setMatchedCards(newMatched);
                    setFlippedCards([]);
                    setIsProcessing(false);

                    // Check win condition
                    if (newMatched.size === (rows * columns) / 2) {
                        setShowHooray(true);
                        if (onComplete) onComplete();
                    }
                }, 600);
            } else {
                // No match
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsProcessing(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="memory-match-container">
            <header className="game-header">
                <h2>Memory Match! 🧠</h2>
                <p>Find all matching pairs to win.</p>
            </header>

            <MemoryGrid
                cards={deck}
                flippedCards={flippedCards}
                matchedCards={matchedCards}
                onCardClick={handleCardClick}
                rows={rows}
                columns={columns}
            />

            {showHooray && (
                <div className="completion-overlay">
                    <div className="completion-content">
                        <h2>🎉 Great job! 🎉</h2>
                        <p>You matched all the cards!</p>
                        <button className="btn-new-game" onClick={initGame}>
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemoryMatchContainer;
