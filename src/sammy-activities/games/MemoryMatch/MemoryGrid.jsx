import React from 'react';
import MemoryCard from './MemoryCard';

const MemoryGrid = ({
    cards,
    flippedCards,
    matchedCards,
    onCardClick,
    rows,
    columns
}) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
    };

    return (
        <div className="memory-grid" style={gridStyle}>
            {cards.map((card) => {
                const isFlipped = flippedCards.some(fc => fc.instanceId === card.instanceId);
                const isMatched = matchedCards.has(card.pairId);

                return (
                    <MemoryCard
                        key={card.instanceId}
                        content={card.content}
                        isFlipped={isFlipped}
                        isMatched={isMatched}
                        onClick={() => onCardClick(card)}
                    />
                );
            })}
        </div>
    );
};

export default MemoryGrid;
