import React, { useRef, useState, useEffect } from 'react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NUMBERS = Array.from({ length: 26 }, (_, i) => i + 1);

const DecoderWheel = ({ rotationOffset, onRotate }) => {
    const wheelRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startAngle, setStartAngle] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(0);

    // Update internal rotation when prop changes (for snapping)
    useEffect(() => {
        const targetRotation = rotationOffset * (360 / 26);
        setCurrentRotation(targetRotation);
    }, [rotationOffset]);

    const getAngle = (clientX, clientY) => {
        if (!wheelRef.current) return 0;
        const rect = wheelRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = clientX - centerX;
        const dy = clientY - centerY;
        return Math.atan2(dy, dx) * (180 / Math.PI);
    };

    const handleStart = (e) => {
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setStartAngle(getAngle(clientX, clientY) - currentRotation);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const angle = getAngle(clientX, clientY);
        const newRotation = angle - startAngle;
        setCurrentRotation(newRotation);

        // Calculate offset and notify container
        const step = 360 / 26;
        const normalized = ((newRotation % 360) + 360) % 360;
        const offset = Math.round(normalized / step) % 26;
        if (offset !== rotationOffset) {
            onRotate(offset);
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
        // Snap to nearest step
        const step = 360 / 26;
        const snappedRotation = Math.round(currentRotation / step) * step;
        setCurrentRotation(snappedRotation);
    };

    // Calculate the letter currently aligned with 1 (at the top)
    const activeLetter = LETTERS[(26 - rotationOffset) % 26];

    return (
        <div className="wheel-panel">
            <div className="decoder-wheel-container">
                <div className="active-indicator"></div>

                {/* Outer Ring - Fixed Numbers */}
                <div className="wheel-ring outer-ring">
                    {NUMBERS.map((_, i) => (
                        <div
                            key={`outer-div-${i}`}
                            className="wheel-divider"
                            style={{ transform: `rotate(${(i + 0.5) * (360 / 26)}deg)` }}
                        />
                    ))}
                    {NUMBERS.map((num, i) => (
                        <div
                            key={num}
                            className="wheel-label"
                            style={{ transform: `rotate(${i * (360 / 26)}deg)` }}
                        >
                            {num}
                        </div>
                    ))}
                </div>

                {/* Inner Ring - Rotatable Letters */}
                <div
                    ref={wheelRef}
                    className="wheel-ring inner-ring"
                    style={{ transform: `translate(-50%, -50%) rotate(${currentRotation}deg)` }}
                    onMouseDown={handleStart}
                    onTouchStart={handleStart}
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchEnd={handleEnd}
                >
                    {LETTERS.map((_, i) => (
                        <div
                            key={`inner-div-${i}`}
                            className="wheel-divider"
                            style={{ transform: `rotate(${(i + 0.5) * (360 / 26)}deg)` }}
                        />
                    ))}
                    {LETTERS.map((letter, i) => (
                        <div
                            key={letter}
                            className="wheel-label"
                            style={{ transform: `rotate(${i * (360 / 26)}deg)` }}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
            </div>

            <div className="key-display-box">
                <span className="key-label">ACTIVE KEY</span>
                <div className="key-mapping">
                    <span className="key-number">1</span>
                    <span className="key-arrow">➜</span>
                    <span className="key-letter">{activeLetter}</span>
                </div>
            </div>

            <div className="current-mapping-hint">
                Rotation: {rotationOffset} steps
            </div>
        </div>
    );
};

export default DecoderWheel;
