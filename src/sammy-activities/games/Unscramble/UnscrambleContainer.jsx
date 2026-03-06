import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Unscramble.css';

const DEFAULT_WORDS = [
    "Rabbit", "Savings", "Budget", "Income", "Invest", "Money"
];

const scrambleWord = (word) => {
    const arr = word.toUpperCase().split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr.join('') === word.toUpperCase()) {
        return scrambleWord(word);
    }
    return arr.join('');
};

const UnscrambleContainer = ({ words = DEFAULT_WORDS }) => {
    const [gameState, setGameState] = useState('unscramble');
    const [scrambledData, setScrambledData] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState({});
    const [sortedChips, setSortedChips] = useState([]);
    const [draggedIndex, setDraggedIndex] = useState(null);

    // Gamification State
    const [coins, setCoins] = useState(5);
    const [timeLeft, setTimeLeft] = useState(120);
    const [isStoreOpen, setIsStoreOpen] = useState(false);
    const [floatingCoins, setFloatingCoins] = useState([]);
    const [shakingRow, setShakingRow] = useState(null);
    const [autoSolving, setAutoSolving] = useState({});

    const timerRef = useRef(null);

    const initGame = useCallback(() => {
        const data = words.map(word => ({
            original: word,
            scrambled: scrambleWord(word)
        }));
        setScrambledData(data);
        setUserAnswers(words.reduce((acc, word) => ({ ...acc, [word]: '' }), {}));
        setIsCorrect({});
        setGameState('unscramble');
        setSortedChips([]);
        setTimeLeft(120);
        setCoins(prev => (prev < 5 ? 5 : prev)); // Minimum starting coins
    }, [words]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    useEffect(() => {
        if (gameState === 'unscramble' && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [gameState, timeLeft]);

    const triggerCoinAnim = (e) => {
        const container = document.querySelector('.unscramble-container');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = (e.clientX || e.target.getBoundingClientRect().left) - rect.left;
        const y = (e.clientY || e.target.getBoundingClientRect().top) - rect.top;

        const id = Date.now();
        const newCoin = { id, x, y };
        setFloatingCoins(prev => [...prev, newCoin]);
        setTimeout(() => {
            setFloatingCoins(prev => prev.filter(c => c.id !== id));
        }, 1000);
    };

    const handleInputChange = (originalWord, value, event) => {
        if (autoSolving[originalWord]) return;

        setUserAnswers(prev => ({ ...prev, [originalWord]: value }));

        if (value.toLowerCase() === originalWord.toLowerCase() && !isCorrect[originalWord]) {
            setIsCorrect(prev => ({ ...prev, [originalWord]: true }));
            setCoins(prev => prev + 1);
            if (event) triggerCoinAnim(event);
        } else if (isCorrect[originalWord] && value.toLowerCase() !== originalWord.toLowerCase()) {
            setIsCorrect(prev => ({ ...prev, [originalWord]: false }));
        }
    };

    const handleCheckAnswers = () => {
        const incorrects = scrambledData.filter(item =>
            userAnswers[item.original].toLowerCase() !== item.original.toLowerCase()
        );

        if (incorrects.length === 0) {
            setGameState('alphabetize');
            setSortedChips([...words].sort(() => Math.random() - 0.5));
        } else {
            // Trigger shake for first incorrect
            setShakingRow(incorrects[0].original);
            setTimeout(() => setShakingRow(null), 500);
        }
    };

    // Power-ups
    const buyPowerUp = (type, cost) => {
        if (coins < cost) return;
        setCoins(prev => prev - cost);

        switch (type) {
            case 'RESHUFFLE':
                setScrambledData(prev => prev.map(item =>
                    isCorrect[item.original] ? item : { ...item, scrambled: scrambleWord(item.original) }
                ));
                break;
            case 'REVEAL':
                const unsolved = scrambledData.filter(item => !isCorrect[item.original]);
                if (unsolved.length > 0) {
                    const target = unsolved[0].original;
                    const current = userAnswers[target] || "";
                    const nextChar = target[current.length] || "";
                    if (nextChar) {
                        handleInputChange(target, current + nextChar);
                    }
                }
                break;
            case 'REMOVE':
                // Not strictly applicable here as there aren't "wrong letters" shown in a pool, 
                // but we could "clean" the current input.
                alert("Wrong attempts cleared!");
                setScrambledData(prev => prev.map(item => isCorrect[item.original] ? item : item));
                break;
            case 'AUTOSOLVE':
                const toSolve = scrambledData.find(item => !isCorrect[item.original]);
                if (toSolve) {
                    const target = toSolve.original;
                    setAutoSolving(prev => ({ ...prev, [target]: true }));
                    let i = 0;
                    setUserAnswers(prev => ({ ...prev, [target]: '' }));
                    const interval = setInterval(() => {
                        setUserAnswers(prev => ({
                            ...prev,
                            [target]: target.substring(0, i + 1)
                        }));
                        i++;
                        if (i >= target.length) {
                            clearInterval(interval);
                            setIsCorrect(prev => ({ ...prev, [target]: true }));
                            setAutoSolving(prev => ({ ...prev, [target]: false }));
                            setCoins(prev => prev + 1);
                        }
                    }, 100);
                }
                break;
            default: break;
        }
        setIsStoreOpen(false);
    };

    // Drag and Drop Logic
    const onDragStart = (e, index) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (e, index) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) return;
        const newChips = [...sortedChips];
        const draggedItem = newChips[draggedIndex];
        newChips.splice(draggedIndex, 1);
        newChips.splice(index, 0, draggedItem);
        setDraggedIndex(index);
        setSortedChips(newChips);
    };

    const checkAlphabetical = () => {
        const correctOrder = [...words].sort((a, b) => a.localeCompare(b));
        if (correctOrder.every((val, index) => val === sortedChips[index])) {
            setGameState('finished');
        } else {
            alert("Not quite alphabetical yet! Try again.");
        }
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="unscramble-container">
            {floatingCoins.map(coin => (
                <div key={coin.id} className="floating-coin" style={{ left: coin.x, top: coin.y }}>
                    +1 🪙
                </div>
            ))}

            <div className="top-bar">
                <div className={`timer-pill ${timeLeft < 20 ? 'low-time' : ''}`}>
                    <span>⏱️</span> {formatTime(timeLeft)}
                </div>
                <div className="stats-group">
                    <div className="coin-counter">
                        <span className="coin-icon">🪙</span> {coins}
                    </div>
                    <button className="powerups-btn" onClick={() => setIsStoreOpen(true)}>
                        <span>⚡</span> Power-Ups
                    </button>
                </div>
            </div>

            <header className="unscramble-header">
                <h1>Unscramble the Words</h1>
                <p>Type the correct word for each scramble.</p>
                <div className="header-underline"></div>
            </header>

            <main className="puzzle-area">
                {scrambledData.map((item, idx) => (
                    <div key={idx} className="puzzle-row">
                        <div className="scrambled-word-cell">
                            <span className="scrambled-word">{item.scrambled}</span>
                        </div>
                        <div className="input-cell">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className={`unscramble-input 
                                        ${isCorrect[item.original] ? 'correct' : ''} 
                                        ${shakingRow === item.original ? 'shake' : ''}
                                        ${autoSolving[item.original] ? 'auto-solved' : ''}
                                    `}
                                    placeholder="Type here..."
                                    value={userAnswers[item.original]}
                                    onChange={(e) => handleInputChange(item.original, e.target.value, e)}
                                    disabled={gameState !== 'unscramble' || isCorrect[item.original]}
                                    onClick={(e) => isCorrect[item.original] && triggerCoinAnim(e)}
                                />
                                <span className={`feedback-icon ${isCorrect[item.original] ? 'visible' : ''}`}>
                                    ✓
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {gameState === 'unscramble' && (
                <div className="actions">
                    <button className="btn btn-primary" onClick={handleCheckAnswers}>
                        Check My Answers
                    </button>
                </div>
            )}

            {isStoreOpen && (
                <div className="modal-overlay" onClick={() => setIsStoreOpen(false)}>
                    <div className="store-modal" onClick={e => e.stopPropagation()}>
                        <div className="store-header">
                            <h3>⚡ Power-Up Store</h3>
                            <button className="close-store" onClick={() => setIsStoreOpen(false)}>×</button>
                        </div>
                        <div className="powerup-list">
                            <div className={`powerup-item ${coins < 1 ? 'disabled' : ''}`} onClick={() => buyPowerUp('RESHUFFLE', 1)}>
                                <div className="powerup-icon">🔄</div>
                                <div className="powerup-details">
                                    <h4>Reshuffle</h4>
                                    <p>Mix up the letters again!</p>
                                </div>
                                <div className="powerup-cost">1 🪙</div>
                            </div>
                            <div className={`powerup-item ${coins < 2 ? 'disabled' : ''}`} onClick={() => buyPowerUp('REVEAL', 2)}>
                                <div className="powerup-icon">🔍</div>
                                <div className="powerup-details">
                                    <h4>Reveal Letter</h4>
                                    <p>Get a little help with the next letter.</p>
                                </div>
                                <div className="powerup-cost">2 🪙</div>
                            </div>
                            <div className={`powerup-item ${coins < 5 ? 'disabled' : ''}`} onClick={() => buyPowerUp('AUTOSOLVE', 5)}>
                                <div className="powerup-icon">✨</div>
                                <div className="powerup-details">
                                    <h4>Auto-Solve</h4>
                                    <p>Instantly solve one word!</p>
                                </div>
                                <div className="powerup-cost">5 🪙</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {gameState === 'alphabetize' && (
                <div className="alphabetize-section">
                    <h2>Great job! Now sort them alphabetically.</h2>
                    <div className="chips-container">
                        {sortedChips.map((word, index) => (
                            <div
                                key={word}
                                className="word-chip"
                                draggable
                                onDragStart={(e) => onDragStart(e, index)}
                                onDragOver={(e) => onDragOver(e, index)}
                                onDragEnd={() => setDraggedIndex(null)}
                            >
                                <div className="drag-handle">
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                </div>
                                <span className="chip-text">{word}</span>
                            </div>
                        ))}
                    </div>
                    <div className="actions">
                        <button className="btn btn-primary" onClick={checkAlphabetical}>
                            Check Order
                        </button>
                    </div>
                </div>
            )}

            {gameState === 'finished' && (
                <div className="finish-message" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <h2 style={{ color: 'var(--primary-green)', fontSize: '2rem' }}>🎉 Perfect! 🎉</h2>
                    <p>You earned {coins} coins and finished with {formatTime(timeLeft)} left!</p>
                    <div className="actions">
                        <button className="btn btn-secondary" onClick={initGame}>
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnscrambleContainer;
