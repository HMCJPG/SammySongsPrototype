
import React from 'react';

const WordList = ({ words, foundWords }) => {
    return (
        <div className="word-list-container">
            <h2>Word List</h2>
            <ul className="word-list">
                {words.map((word, index) => {
                    const isFound = foundWords.includes(word.toUpperCase());
                    return (
                        <li
                            key={index}
                            className={`word-item ${isFound ? 'completed' : ''}`}
                        >
                            {word} {isFound ? '✅' : ''}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WordList;
