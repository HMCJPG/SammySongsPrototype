
import React, { useState, useEffect } from 'react';

const Grid = ({ grid, onSelectionEnd, foundCells, gridSize }) => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [selection, setSelection] = useState([]); // Array of {row, col}

    const handleMouseDown = (row, col) => {
        setIsSelecting(true);
        setSelection([{ row, col }]);
    };

    const handleMouseEnter = (row, col) => {
        if (!isSelecting) return;

        // We only allow selection in a straight line (horizontal or vertical)
        const start = selection[0];
        const dx = col - start.col;
        const dy = row - start.row;

        // Check if it's horizontal, vertical
        // For simplicity in this template, we update selection if it's a valid move
        if (row === start.row || col === start.col) {
            const newSelection = [];
            const steps = Math.max(Math.abs(dx), Math.abs(dy));
            const stepX = dx === 0 ? 0 : dx / Math.abs(dx);
            const stepY = dy === 0 ? 0 : dy / Math.abs(dy);

            for (let i = 0; i <= steps; i++) {
                newSelection.push({
                    row: start.row + (i * stepY),
                    col: start.col + (i * stepX)
                });
            }
            setSelection(newSelection);
        }
    };

    const handleMouseUp = () => {
        if (!isSelecting) return;
        setIsSelecting(false);

        // Get the sequence of letters
        const word = selection.map(pos => grid[pos.row][pos.col]).join('');
        onSelectionEnd(word, selection);
        setSelection([]);
    };

    // Add global mouse up listener to stop selection if mouse is released outside the grid
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isSelecting) {
                setIsSelecting(false);
                setSelection([]);
            }
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, [isSelecting]);

    const isSelected = (r, c) => {
        return selection.find(pos => pos.row === r && pos.col === c);
    };

    const isFound = (r, c) => {
        return foundCells.has(`${r}-${c}`);
    };

    return (
        <div className="grid-container">
            <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${gridSize}, 40px)` }}
                onMouseLeave={() => { /* Option to cancel selection or keep it */ }}
            >
                {grid.map((row, rIdx) =>
                    row.map((letter, cIdx) => (
                        <div
                            key={`${rIdx}-${cIdx}`}
                            className={`cell ${isSelected(rIdx, cIdx) ? 'selected' : ''} ${isFound(rIdx, cIdx) ? 'found' : ''}`}
                            onMouseDown={() => handleMouseDown(rIdx, cIdx)}
                            onMouseEnter={() => handleMouseEnter(rIdx, cIdx)}
                            onMouseUp={handleMouseUp}
                        >
                            {letter}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Grid;
