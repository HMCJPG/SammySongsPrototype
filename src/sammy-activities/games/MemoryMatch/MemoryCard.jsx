import React from 'react';

const MemoryCard = ({
    isFlipped,
    isMatched,
    content,
    onClick
}) => {
    const { word, img } = content;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
        }
    };

    const ariaLabel = isMatched
        ? `Matched: ${word}`
        : isFlipped
            ? `Revealed card: ${word}`
            : "Hidden memory card";

    return (
        <div
            className={`memory-card ${isFlipped || isMatched ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
            onClick={!isFlipped && !isMatched ? onClick : undefined}
            tabIndex={isMatched ? -1 : 0}
            role="button"
            aria-label={ariaLabel}
            onKeyDown={handleKeyDown}
        >
            <div className="card-face back">
                {/* Visual content for back is handled by CSS ::after */}
            </div>
            <div className="card-face front">
                {img ? (
                    <img src={img} alt={word} />
                ) : word ? (
                    <div className="card-word">{word}</div>
                ) : (
                    <div className="card-placeholder">🌟</div>
                )}
            </div>
        </div>
    );
};

export default MemoryCard;
